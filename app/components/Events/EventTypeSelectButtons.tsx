import { gql, useQuery } from '@apollo/client';
import React, { ReactElement } from 'react';
import {
  ActivityIndicator, FlatList, SafeAreaView, Text, TouchableOpacity, View
 } from 'react-native';
import Events from '../../assets/stylesheets/Events';
import ErrorPanel from '../ErrorPanel';

const EVENT_TYPE_QUERY = gql`
  query EventTypes {
    eventTypes {
      id
      name
    }
  }
`;

type EventTypeSelecProps = {
  eventType: string;
  onChangeEventType: (eventType: string) => void;
};

export default function EventTypeSelectButtons({ onChangeEventType}:
  EventTypeSelecProps): ReactElement {
  const {
    data, error, loading, refetch,
  } = useQuery(EVENT_TYPE_QUERY);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />;
  }

  const isSelected = (eventTypeId : number) => data?.eventTypes.some(id => id === eventTypeId);

  const updateSelected = (selectedType : any) => {
    const { name } = selectedType;
    onChangeEventType(name);
    console.log(name);
  };

  return (
    <SafeAreaView style={Events.mainContainer}>
      <View style={Events.buttonContainer}>
        <FlatList
          data={data?.eventTypes}
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
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
