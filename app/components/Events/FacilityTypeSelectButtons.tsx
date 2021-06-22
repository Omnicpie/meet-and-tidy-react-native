import { gql, useQuery } from '@apollo/client';
import React, { ReactElement } from 'react';
import {
  ActivityIndicator, FlatList, SafeAreaView, Text, TouchableOpacity, View,
} from 'react-native';
import { ApiFacility } from '../../../ApiTypes';
import Events from '../../assets/stylesheets/Events';
import ErrorPanel from '../ErrorPanel';

const FACILITY_QUERY = gql`
  query Facilities {
    facilities {
      id
      name
    }
  }
`;

type FacilitySelectProps = {
  facility: any;
  onChangeFacility: (facility: ApiFacility) => void;
};

export default function FacilitySelectButtons({ facility, onChangeFacility }:
  FacilitySelectProps): ReactElement {
  const {
    data, error, loading, refetch,
  } = useQuery(FACILITY_QUERY);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />;
  }

  const isSelected = (facilityId : number) => facility.id === facilityId;

  const updateSelected = (selectedType : ApiFacility) => {
    onChangeFacility(selectedType);
    console.log(selectedType);
  };

  return (
    <SafeAreaView style={Events.mainContainer}>
      <View style={Events.buttonContainer}>
        <FlatList
          data={data?.facitlities}
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
