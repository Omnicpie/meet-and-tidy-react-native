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

  console.log(facilities);

  const isSelected = (facilityId: number) => {
    data.facilities.some((facilityType) => facilities.id === facilityId);
  };

  const updateSelected = (selectedType: ApiFacility) => {
    onChangeFacilities(selectedType);
    console.log('THIS IS A', selectedType);
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
