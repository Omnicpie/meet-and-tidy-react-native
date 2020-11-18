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
      <Text>Create an event</Text>
      <Text>Where is your event?</Text>
      <TextInput
        defaultValue={location}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeLocation(text)}
        location={location}
      />
      <Button
        onPress={validateInput}
        title="Next"
      />
      <ProgressBar style={styles.progressBar} progress={0.1} color={Colors.green500} />
      <Text>1 of 8</Text>
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
