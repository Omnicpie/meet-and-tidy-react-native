import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import EventTypeSelectButtons from '../assets/EventTypeSelectButtons';

import Request from './request';

export default function EventFormStep3({
  eventType, onChangeEventType, onNext,
} = props) {

  return (
    <View>
      <Text>Create an event</Text>
      <Text>Event Type</Text>
      <EventTypeSelectButtons
        eventType={eventType} onChangeEventType={onChangeEventType}
      />
      <Button
        onPress={onNext}
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
