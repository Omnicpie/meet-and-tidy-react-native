import React from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import NextPreviousButtons from './NextPreviousButtons';
import Events from '../../assets/stylesheets/Events';

export default function EventDescription({
  description, onChangeDescription, onNext, onPrevious
} = props) {
  return (
    <View style={Events.mainContainer}>
      <ProgressBar style={Events.progressBar} progress={0.5} color={Colors.green500} />
      <Text>6 of 8</Text>
      <Text style={Events.primaryHeading}>Tell us about your event</Text>

      <TextInput
        // style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => onChangeDescription(text)}
        multiline={true}
        style={Events.textInput}
        description={description}
      />
      <NextPreviousButtons
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </View>
  );
}
