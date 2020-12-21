import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import EventTypeSelectButtons from './EventTypeSelectButtons';
import Events from '../../assets/stylesheets/Events';
import { ScrollView } from 'react-native-gesture-handler';

export default function EventType({
  eventType, onChangeEventType, onNext,
} = props) {
  function validateInput() {
    if (eventType.length > 3 && typeof eventType === 'string') {
      onNext();
    } else {
      alert('Please select an event type.');
    }
  }
  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.375} color={Colors.green500} />
        <Text>3 of 8</Text>
        <Text style={Events.primaryHeading}>What type of event is it?</Text>
        <EventTypeSelectButtons
          eventType={eventType}
          onChangeEventType={onChangeEventType}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
