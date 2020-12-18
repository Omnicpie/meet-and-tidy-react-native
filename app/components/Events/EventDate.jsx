import React from 'react';
import {
  Text, View, TextInput, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import NextPreviousButtons from './NextPreviousButtons';
import Events from '../../assets/stylesheets/Events';

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
    <View style={Events.mainContainer}>
      <ProgressBar style={Events.progressBar} progress={0.25} color={Colors.green500} />
      <Text style={Events.centeredText} >2 of 8</Text>
      <Text style={Events.primaryHeading} >When is your event?</Text>
      <TextInput
        defaultValue={date}
        style={Events.textInput}
        onChangeText={(text) => onChangeDate(text)}
        date={date}
      />
      <NextPreviousButtons
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </View>
  );
};
