import React from 'react';
import MapView from 'react-native-maps';
import { Button, Text, View, TextInput, SafeAreaView } from 'react-native';
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
      alert(`Please enter a location name that is at least 3 characters long.`);
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
          value={location}
          clearButtonMode="while-editing"
        />
        <View style={Events.container}>
          <MapView
            style={Events.map}
            region={{
              latitude: 54.3781,
              longitude: -3,
              latitudeDelta: 9,
              longitudeDelta: 9,

            }}
            // onRegionChange={(region) => {
            //   console.warn(region);
            //   onChangeLocation(region);
            // }}
          />
        </View>
        <View style={Events.buttonContianer} marginBottom={75}>
          <Button
            onPress={validateInput}
            title="Next"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
