import { gql, useQuery } from '@apollo/client';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Events from '../../assets/stylesheets/Events';
import Messes from '../../assets/stylesheets/Messes';
import ErrorPanel from '../ErrorPanel';

const MESS_TYPE_QUERY = gql`
  query MessTypes {
    messTypes {
      id
      name
    }
  }
`;

export default function MessTypeSelectButtons({ messType, onChangeMessType }) {
  const { data, error, loading, refetch } = useQuery(MESS_TYPE_QUERY);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />;
  }

  const isSelected = messTypeId => messType.id === messTypeId;

  const updateSelected = selectedType => {
    onChangeMessType(selectedType);
    console.log(selectedType);
  };

  return (
    <SafeAreaView style={Events.mainContainer}>
      <View style={Events.buttonContainer}>
        <FlatList
          data={data?.messTypes}
          horizontal
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => updateSelected(item)}
              style={isSelected(item.id) ? Messes.messTypeButtonSelected : Messes.messTypeButton}
            >
              <Text
                style={
                  isSelected(item.id)
                    ? Messes.messTypeButtonTextSelected
                    : Messes.messTypeButtonText
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
