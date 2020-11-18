import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

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
    <View>
      <View style={styles.locationContainer}>
        <ProgressBar style={styles.progressBar} progress={0.1} color={Colors.green500} />
        <Text style={styles.centeredText}>1 of 8</Text>
        <Text style={styles.primaryHeading}>Where is your event?</Text>
        <TextInput
          defaultValue={location}
          style={styles.textInput}
          onChangeText={(text) => onChangeLocation(text)}
          location={location}
        />
      </View>
      <View style={styles.nextButton}>
        <Button
          onPress={validateInput}
          title="Next"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  locationContainer: {
    flex: 1,
    backgroundColor: '#fff',

  },
  progressBar: {
    marginTop: 25,

  },
  centeredText: {
    textAlign: 'center',
    marginTop: 5,
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 50,
    marginBottom: 50,
  },
  textInput: {
    height: 40,
    width: '100%',
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 50,

  },
});
