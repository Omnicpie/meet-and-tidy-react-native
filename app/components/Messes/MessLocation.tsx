import React, { ReactElement } from 'react';
import {
  Button, Text, View, TextInput, SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressBar, Colors } from 'react-native-paper';
import Events from '../../assets/stylesheets/Events';
import Main from '../../assets/stylesheets/Main';
import PossibleMapView from '../PossibleMapView';

type MessLocationProps = {
  location: string;
  onChangeLocation: (location: string) => void;
  onNext: () => void;
};

export default function MessLocation({ location, onChangeLocation, onNext }:
  MessLocationProps): ReactElement {
  function validateInput() {
    if (location.length > 2) {
      onNext();
    } else {
      alert('Please enter a location name that is at least 3 characters long.');
    }
  }

  const region = {
    latitude: 54.3781,
    longitude: -3,
    latitudeDelta: 9,
    longitudeDelta: 9,
  };

  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.166} color={Colors.green500} />
        <Text style={Events.centeredText}>1 of 6</Text>
        <View>
          <Text style={Events.primaryHeading}>Where is the mess?</Text>
          <Text style={Main.tellUsMore}>Tell us where you found this mess</Text>
        </View>
        <TextInput
          defaultValue={location}
          style={Events.textInput}
          onChangeText={(text) => onChangeLocation(text)}
          location={location}
          value={location}
          clearButtonMode="while-editing"
        />
        <View style={Events.container}>
          <PossibleMapView region={region}></PossibleMapView>
        </View>
        <View style={Events.buttonContainer} marginBottom={75}>
          <Button
            onPress={validateInput}
            title="Next"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
