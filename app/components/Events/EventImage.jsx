import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import NextPreviousButtons from './NextPreviousButtons';

export default function EventImage({
  image, onChangeImage, onNext, onPrevious
} = props) {
  return (
    <View>
      <ProgressBar style={styles.progressBar} progress={0.875} color={Colors.green500} />
      <Text style={styles.centeredText}>7 of 8</Text>
      <Text style={styles.primaryHeading}>Upload an event image</Text>

      <TextInput
        style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeImage(text)}
        image={image}
      />
      <NextPreviousButtons
        onNext={onNext}
        onPrevious={onPrevious}
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
