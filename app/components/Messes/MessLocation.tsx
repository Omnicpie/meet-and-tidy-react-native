import React from 'react';
import { SafeAreaView, ScrollView, Text, TextInput } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
//import MapView from 'react-native-maps';

import Messes from '../../assets/stylesheets/Messes';

export default function MessLocation({
  location, onChangeLocation, onNext,
} = props) {
  function validateInput() {
    if (location.length > 3) {
      onNext();
    } else {
      alert(`Please enter a valid location, "${location}" needs to be at least 5 characters long.`);
    }
  }

  return (
    <SafeAreaView style={Messes.mainContainer}>
      <ScrollView>
        <ProgressBar style={Messes.progressBar} progress={0.2} color={Colors.green500} />
        <Text style={Messes.centeredText}>1 of 5</Text>
        <Text style={Messes.primaryHeading}>Where is your mess?</Text>
        <TextInput
          defaultValue={location}
          style={Messes.textInput}
          onChangeText={(text) => onChangeLocation(text)}
          location={location}
        />

      </ScrollView>
    </SafeAreaView>
  );
}
