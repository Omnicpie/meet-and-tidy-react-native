import React, { useState } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import FacilityTypeSelectButtons from './FacilityTypeSelectButtons';
import NextPreviousButtons from './NextPreviousButtons';

export default function EventFacility({
  facilityType, onChangeFacilityType, onNext, onPrevious,
} = props) {
  return (
    <View>
      <ProgressBar style={styles.progressBar} progress={0.625} color={Colors.green500} />
      <Text>5 of 8</Text>
      <Text>What facilities are available?</Text>
      <FacilityTypeSelectButtons
        facilityType={facilityType}
        onChangeFacilityType={onChangeFacilityType}
      />
      <NextPreviousButtons
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    marginTop: 50,
  },
});
