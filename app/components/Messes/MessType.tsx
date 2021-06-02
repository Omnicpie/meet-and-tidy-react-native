import React, { ReactElement } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import MessTypeSelectButtons from './MessTypeSelectButtons';
import Events from '../../assets/stylesheets/Events';

type MessTypeProps = {
  messType: string;
  onChangeMessType: (messType: string) => void;
  onNext: () => void;
};

export default function MessType({ messType, onChangeMessType, onNext }: MessTypeProps): ReactElement {
  function validateInput() {
    if (messType.length > 3 && typeof messType === 'string') {
      onNext();
    } else {
      alert('Please select a mess type.');
    }
  }

  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.333} color={Colors.green500} />
        <Text style={Events.centeredText}>2 of 6</Text>
        <Text style={Events.primaryHeading}>What type of mess is it?</Text>
        <MessTypeSelectButtons
          messTypes={messType}
          onChangeMessTypes={onChangeMessType}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
