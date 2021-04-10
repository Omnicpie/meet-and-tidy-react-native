import React, { ReactElement } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import EventTypeSelectButtons from './EventTypeSelectButtons';
import Events from '../../assets/stylesheets/Events';
import NextPreviousButtons from './NextPreviousButtons';

type EventTypeProps = {
  eventType: string;
  onChangeEventType: (eventType: string) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function EventType({
  eventType, onChangeEventType, onNext, onPrevious,
}: EventTypeProps): ReactElement {
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
        <Text style={Events.centeredText}>3 of 8</Text>
        <Text style={Events.primaryHeading}>What type of event is it?</Text>
        <EventTypeSelectButtons
          eventTypes={eventTypes}
          onChangeEventTypes={onChangeEventType}
        />
        <NextPreviousButtons onPrevious={onPrevious} onNext={validateInput} />
      </ScrollView>
    </SafeAreaView>
  );
}
