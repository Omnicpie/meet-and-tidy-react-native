import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import EventTypeSelectButtons from './EventTypeSelectButtons';
import NextPreviousButtons from './NextPreviousButtons';

export default function EventType({
  eventType, onChangeEventType, onNext, onPrevious,
} = props) {
  function validateInput() {
    if (eventType.length > 3 && typeof eventType === 'string') {
      onNext();
    } else {
      alert('Please select an event type.');
    }
  }
  return (
    <View>
      <ProgressBar style={styles.progressBar} progress={0.375} color={Colors.green500} />
      <Text>3 of 8</Text>
      <Text style={styles.primaryHeading}>What type of event is it?</Text>
      <EventTypeSelectButtons
        eventType={eventType}
        onChangeEventType={onChangeEventType}
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
