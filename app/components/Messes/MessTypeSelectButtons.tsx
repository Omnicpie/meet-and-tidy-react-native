import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Events from '../../assets/stylesheets/Events';
import ErrorPanel from '../ErrorPanel';

const MESS_TYPES_QUERY = gql`
  query MessTypes {
    messTypes {
      id
      name
    }
  }
`;

export default function MessTypeSelectButtons({ messTypes, onChangeMessTypes } = props) {

  const [selectedTypes, setSelectedTypes] = useState([]);

  const { data, error, loading, refetch } = useQuery(MESS_TYPES_QUERY);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />;
  }

  const isSelected = (messTypeId : number) => messTypes.some(id => id === messTypeId);

  const updateSelected = (selectedType : any) => {
    const id = selectedType.id;
    if (isSelected(id)) {
      onChangeMessTypes(messTypes.filter(x => x !== id));
    } else {
      onChangeMessTypes(messTypes.push(id));
    }
  };

  return (
    <SafeAreaView style={Events.mainContainer}>
      <View style={Events.buttonContainer}>
        <FlatList
          data={data.messTypes}
          horizontal
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => updateSelected(item)}
              style={isSelected(item.id)
                ? Events.eventTypeButtonSelected : Events.eventTypeButton}
            >
              <Text
                style={isSelected(item.id)
                  ? Events.eventTypeButtonTextSelected : Events.eventTypeButtonText}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
