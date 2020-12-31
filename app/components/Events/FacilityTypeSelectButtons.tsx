import React, { ReactElement } from 'react';
import {
  FlatList, View, SafeAreaView, Text, TouchableOpacity,
} from 'react-native';
import Events from '../../assets/stylesheets/Events';

export default function FacilityTypeSelectButtons({
  facilityType, onChangeFacilityType,
}): ReactElement {
  const facilityTypes = [
    { id: 1, title: 'Disabled Access' },
    { id: 2, title: 'Child Friendly' },
    { id: 3, title: 'Toilets Nearby' },
    { id: 4, title: 'Parking Nearby' },
    { id: 5, title: 'First Aiders' },
    { id: 6, title: 'Transport Routes Nearby' },
    { id: 7, title: 'Other' },
  ];

  return (
    <SafeAreaView style={Events.mainContainer}>
      <View style={Events.buttonContainer}>
        <FlatList
          data={facilityTypes}
          horizontal
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onChangeFacilityType(item.title)}
              style={facilityType === item.title
                ? Events.eventTypeButtonSelected : Events.eventTypeButton}
            >
              <Text
                style={facilityType === item.title
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
