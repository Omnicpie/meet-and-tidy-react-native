import React, { ReactElement } from 'react';
import {
  Text, View, TextInput, SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressBar, Colors } from 'react-native-paper';
import Events from '../../assets/stylesheets/Events';
import Main from '../../assets/stylesheets/Main';
import NextPreviousButtons from '../NextPreviousButtons';

type MessDescriptionProps = {
  description: string;
  onChangeDescription: (text: string) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function EventDescription({
  description, onChangeDescription, onNext, onPrevious,
}: MessDescriptionProps): ReactElement {
  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
      <ProgressBar style={Events.progressBar} progress={0.833} color={Colors.green500} />
        <Text style={Events.centeredText}>5 of 6</Text>
        <View>
          <Text style={Events.primaryHeading}>Description</Text>
          <Text style={Main.tellUsMore}>Tell us a bit about the mess.</Text>
        </View>
        <TextInput
          style={Events.descInput}
          onChangeText={(text) => onChangeDescription(text)}
          multiline
          description={description}
        />
        <NextPreviousButtons onPrevious={onPrevious} onNext={onNext} />
      </ScrollView>
    </SafeAreaView>
  );
}
