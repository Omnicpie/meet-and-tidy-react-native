import React, { ReactElement } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import FacilityTypeSelectButtons from './FacilityTypeSelectButtons';
import Events from '../../assets/stylesheets/Events';
import NextPreviousButtons from '../NextPreviousButtons';

type EventFacilityProps = {
  facilityType: string;
  onChangeFacilityType: (facilityType: string) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function EventFacility({
  facilityType, onChangeFacilityType, onNext, onPrevious,
}: EventFacilityProps): ReactElement {
  function validateInput() {
    if (facilityType.length > 3 && typeof facilityType === 'string') {
      onNext();
    } else {
      alert('Please select a facility type.');
    }
  }

  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.625} color={Colors.green500} />
        <Text style={Events.centeredText}>5 of 8</Text>
        <Text style={Events.primaryHeading}>What facilities are available?</Text>
        <FacilityTypeSelectButtons
          facilityType={facilityType}
          onChangeFacilityType={onChangeFacilityType}
        />
        <NextPreviousButtons onPrevious={onPrevious} onNext={validateInput} />
      </ScrollView>
    </SafeAreaView>
  );
}
