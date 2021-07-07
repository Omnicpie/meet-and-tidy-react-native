import { gql, useQuery } from '@apollo/client';
import React, { ReactElement } from 'react';
import {
  ActivityIndicator, FlatList, SafeAreaView, Text, TouchableOpacity, View,
} from 'react-native';
import { ApiFacility } from '../../../ApiTypes';
import Events from '../../assets/stylesheets/Events';
import ErrorPanel from '../ErrorPanel';

const FACILITIES_QUERY = gql`
  query Facilities {
    facilities {
      id
      name
    }
  }
`;

type FacilitySelectProps = {
  facilities: Array<ApiFacility>;
  onChangeFacilities: (facilities: Array<ApiFacility>) => void;
};

export default function FacilitySelectButtons({ facilities, onChangeFacilities }:
  FacilitySelectProps): ReactElement {
  const {
    data, error, loading, refetch,
  } = useQuery(FACILITIES_QUERY);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />;
  }

  console.log('line 38', facilities);

  const isSelected = (facilityId: number) => facilities.some(
    (facility: ApiFacility) => facility.id === facilityId,
  );

  const updateSelected = (selectedFacility: ApiFacility, selected: boolean) => {
    let newFacilities: Array<ApiFacility>;

    if (selected) {
      newFacilities = facilities.slice(); // create a clone of facilities
      newFacilities.push(selectedFacility);
    } else {
      newFacilities = facilities.filter((facility) => facility !== selectedFacility);
    }
    console.log('THESE ARE NEW FACILITIES', newFacilities);
    onChangeFacilities(newFacilities);
  };

  return (
    <SafeAreaView style={Events.mainContainer}>
      <View style={Events.buttonContainer}>
        <FlatList
          data={data.facilities}
          horizontal
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => updateSelected(item, !isSelected(item.id))}
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
