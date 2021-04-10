import React from 'react';
import {
  View, Text, SafeAreaView, ScrollView,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import EventTypeSelectButtons from '../Events/EventTypeSelectButtons';
import Flags from '../../assets/stylesheets/Flags';

export default function FlagType({
  eventTypes, onChangeEventTypes, onNext,
} = props) {
  function validateInput() {
    if (flagType.length > 3 && typeof flagType === 'string') {
      onNext();
    } else {
      alert('Please select a flag type.');
    }
  }
  return (
    <SafeAreaView style={Flags.mainContainer}>
      <ScrollView>
        <ProgressBar style={Flags.progressBar} progress={0.4} color={Colors.green500} />
        <Text style={Flags.centeredText}>2 of 5</Text>
        <Text style={Flags.primaryHeading}>Flag Type</Text>
        <View style={Flags.buttonContianer}>
          <EventTypeSelectButtons
            eventTypes={eventTypes}
            onChangeEventType={onChangeEventTypes}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
