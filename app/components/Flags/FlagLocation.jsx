import React from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button, View } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Flags from '../../assets/stylesheets/Flags';

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
    <SafeAreaView style={Flags.container}>
      <View>
        <Text>Create a flag</Text>
        <Text>Where is your flag?</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => onChangeLocation(text)}
          location={location}
        />
        <Button
          onPress={validateInput}
          title="Next"
        />
        <ProgressBar style={Flags.progressBar} progress={0.2} color={Colors.green500} />
        <Text>1 of 5</Text>
      </View>
    </SafeAreaView>

  );
}
