import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import FlagTypeSelectButtons from './FlagTypeSelectButtons';
import Flags from '../../assets/stylesheets/Flags';
import NextPreviousFlagButtons from './NextPreviousFlagButtons';

export default function FlagType({
  flagType, onChangeFlagType, onNext, onPrevious,
} = props) {
  function validateInput() {
    if (flagType.length > 3 && typeof flagType === 'string') {
      onNext();
    } else {
      alert('Please select an flag type.');
    }
  }
  return (
    <SafeAreaView style={Flags.mainContainer}>
      <ScrollView>
        <ProgressBar style={Flags.progressBar} progress={0.4} color={Colors.green500} />
        <Text style={Flags.centeredText}>2 of 5</Text>
        <Text style={Flags.primaryHeading}>Flag Type</Text>
        <View style={Flags.buttonContianer}>
          <FlagTypeSelectButtons
            flagType={flagType}
            onChangeFlagType={onChangeFlagType}
          />
        </View>
        <View style={Flags.buttonContianer}>
          <NextPreviousFlagButtons
            onNext={onNext}
            onPrevious={onPrevious}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
