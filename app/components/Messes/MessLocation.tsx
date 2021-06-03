import React, { ReactElement } from 'react';
import { Button, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import PossibleMapView from '../PossibleMapView';
import Events from '../../assets/stylesheets/Events';

type MessLocationProps = {
  location: string;
  onNext: () => void;
  onChangeLocation: (location: string) => void;
};

export default function MessLocation({ location, onChangeLocation, onNext }: MessLocationProps): ReactElement {
  function validateInput() {
    if (location.length > 3) {
      onNext();
    } else {
      alert(`Please enter a valid location, "${location}" needs to be at least 5 characters long.`);
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
        <Text style={Events.primaryHeading}>Where is your mess?</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
}
