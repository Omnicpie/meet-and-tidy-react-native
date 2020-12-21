import React from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet, View, ScrollView } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Flags from '../../assets/stylesheets/Flags';
import MapView from 'react-native-maps';

export default function FlagLocation({
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
    <SafeAreaView style={Flags.mainContainer}>
      <ScrollView>
        <ProgressBar style={Flags.progressBar} progress={0.2} color={Colors.green500} />
        <Text style={Flags.centeredText}>1 of 5</Text>
        <Text style={Flags.primaryHeading}>Where is your flag?</Text>
        <TextInput
          style={Flags.textInput}
          onChangeText={(text) => onChangeLocation(text)}
          location={location}
        />
        <MapView />
      </ScrollView>
    </SafeAreaView>
  );
}
