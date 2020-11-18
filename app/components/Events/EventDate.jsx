import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
// import Request from './request';

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
      <Text>2 of 8</Text>
      <Text style={styles.primaryHeading}>When is your event?</Text>
      <TextInput
        defaultValue={date}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeDate(text)}
        date={date}
      />
      <Button
        onPress={onPrevious}
        title="Previous"
      />
      <Button
        onPress={validateInput}
        title="Next"
      />

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
