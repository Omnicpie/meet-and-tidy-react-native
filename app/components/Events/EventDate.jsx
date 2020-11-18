import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import NextPreviousButtons from './NextPreviousButtons';

export default function EventDate({
  date, onChangeDate, onNext, onPrevious
} = props) {
  function validateInput() {
    if (date.length > 6 && typeof date === 'string') {
      onNext();
    } else {
      alert(`Please enter a valid date, "${date}" needs to be at least 5 characters long.`);
    }
  }

  return (
    <View>
      <ProgressBar style={styles.progressBar} progress={0.25} color={Colors.green500} />
      <Text style={styles.centeredText}>2 of 8</Text>
      <Text style={styles.primaryHeading}>When is your event?</Text>
      <TextInput
        defaultValue={date}
        style={styles.textInput}
        onChangeText={(text) => onChangeDate(text)}
        date={date}
      />
      <NextPreviousButtons
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    marginTop: 50,
  },
  textInput: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 50,
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 50,
    marginBottom: 50,
  },
  centeredText: {
    textAlign: 'center',
    marginTop: 5,
  },
});
