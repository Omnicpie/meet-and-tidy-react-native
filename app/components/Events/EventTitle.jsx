import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import NextPreviousButtons from './NextPreviousButtons';

export default function EventTitle({
  title, onChangeTitle, onNext, onPrevious,
} = props) {
  return (
    <View>
      <ProgressBar style={styles.progressBar} progress={0.5} color={Colors.green500} />
      <Text>4 of 8</Text>
      <Text style={styles.primaryHeading}>Name your event</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeTitle(text)}
        title={title}
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
});
