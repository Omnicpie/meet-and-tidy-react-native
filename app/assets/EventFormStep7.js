import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Request from './request';

export default function EventFormStep7({
  image, onChangeImage, onNext,
} = props) {
  return (
    <View>
      <Text>Create an event</Text>
      <Text>Images</Text>

      <TextInput
        style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeImage(text)}
        image={image}
      />
      <Button
        onPress={onNext}
        title="Next"
      />
      <ProgressBar style={styles.progressBar} progress={0.875} color={Colors.green500} />
      <Text>7 of 8</Text>
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
