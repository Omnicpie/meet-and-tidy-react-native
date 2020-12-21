import React from 'react';
import { Text, View, TextInput, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressBar, Colors } from 'react-native-paper';
import Events from '../../assets/stylesheets/Events';

export default function EventLocation({
  location, onChangeLocation, onNext,
} = props) {
  function validateInput() {
    if (location.length > 2) {
      onNext();
    } else {
      alert(`Please enter a valid location, "${location}" needs to be at least 3 characters long.`);
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.1} color={Colors.green500} />
        <Text style={Events.centeredText}>1 of 8</Text>
        <Text style={Events.primaryHeading}>Where is your event?</Text>
        <TextInput
          defaultValue={location}
          style={Events.textInput}
          onChangeText={(text) => onChangeLocation(text)}
          location={location}
        />
        <View style={Events.infoTile}><Text>Map</Text></View>
      </ScrollView>
    </SafeAreaView>
  );
}
