import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import FacilityTypeSelectButtons from './FacilityTypeSelectButtons';

export default function EventFormStep5({
  facilityType, onChangeFacilityType, onNext,
} = props) {
  return (
    <View>
      <Text>Create an event</Text>
      <Text>Facilities</Text>
      <FacilityTypeSelectButtons
        facilityType={facilityType}
        onChangeFacilityType={onChangeFacilityType}
      />
      <Button
        onPress={onNext}
        title="Next"
      />
      <ProgressBar style={styles.progressBar} progress={0.625} color={Colors.green500} />
      <Text>5 of 8</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  progressBar: {
    marginTop: 50,
  },
});
