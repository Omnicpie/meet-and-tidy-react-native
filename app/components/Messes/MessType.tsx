import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import EventTypeSelectButtons from '../Events/EventTypeSelectButtons';
import Messes from '../../assets/stylesheets/Messes';

export default function MessType({
  messTypes, onChangeEventTypes, onNext,
} = props) {
  function validateInput() {
    if (messType.length > 3 && typeof messType === 'string') {
      onNext();
    } else {
      alert('Please select a flag type.');
    }
  }
  return (
    <SafeAreaView style={Messes.mainContainer}>
      <ScrollView>
        <ProgressBar style={Messes.progressBar} progress={0.4} color={Colors.green500} />
        <Text style={Messes.centeredText}>2 of 5</Text>
        <Text style={Messes.primaryHeading}>Mess Type</Text>
        <View style={Messes.buttonContianer}>
          <EventTypeSelectButtons
            messTypes={messTypes}
            onChangeEventType={onChangeEventTypes}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
