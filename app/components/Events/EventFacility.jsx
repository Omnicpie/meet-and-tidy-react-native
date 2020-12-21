import React, { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import FacilityTypeSelectButtons from './FacilityTypeSelectButtons';
import NextPreviousButtons from './NextPreviousButtons';
import Events from '../../assets/stylesheets/Events';
import { ScrollView } from 'react-native-gesture-handler';

export default function EventFacility({
  facilityType, onChangeFacilityType, onNext, onPrevious,
} = props) {
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
      </ScrollView>
    </SafeAreaView>
  );
}
