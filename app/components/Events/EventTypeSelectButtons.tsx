import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Events from '../../assets/stylesheets/Events';
import ErrorPanel from '../ErrorPanel';

const EVENT_TYPES_QUERY = gql`
  query EventTypes {
    eventTypes {
      id
      name
    }
  }
`;

export default function EventTypeSelectButtons({
    eventTypes, onChangeEventTypes,
  } = props) {

  const [selectedTypes, setSelectedTypes] = useState([]);

  const {
    data, error, loading, refetch,
  } = useQuery(EVENT_TYPES_QUERY);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />;
  }

  const isSelected = (eventTypeId : number) => eventTypes.some(id => id === eventTypeId);

  const updateSelected = (selectedType : any) => {
    const id = selectedType.id;
    if (isSelected(id)) {
      onChangeEventTypes(eventTypes.filter(x => x !== id));
    } else {
      onChangeEventTypes(eventTypes.push(id));
    }
  };

  return (
    <SafeAreaView style={Events.mainContainer}>
      <View style={Events.buttonContainer}>
        <FlatList
          data={data.eventTypes}
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
