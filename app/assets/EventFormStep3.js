import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import EventTypeSelectButtons from '../assets/EventTypeSelectButtons';

import Request from './request';

export default function EventFormStep3({
  eventType, onChangeEventType, onNext,
} = props) {
  console.log(eventType);
  function validateInput() {
    console.log(eventType);
    if (eventType.length > 3 && typeof eventType === "string") {
      onNext();
    } else {
      alert(`Please select an event type.`);
    }
  }
  return (
    <View>
      <Text>Create an event</Text>
      <Text>Event Type</Text>
      <EventTypeSelectButtons
        eventType={eventType} onChangeEventType={onChangeEventType}
      />
      <Button
        onPress={validateInput}
        title="Next"
      />
      <ProgressBar style={styles.progressBar} progress={0.375} color={Colors.green500} />
      <Text>3 of 8</Text>
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
