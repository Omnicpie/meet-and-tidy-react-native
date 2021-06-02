import React, { ReactElement } from 'react';
import { Text, SafeAreaView, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressBar, Colors } from 'react-native-paper';
import Events from '../../assets/stylesheets/Events';

type MessDescriptionProps = {
  description: string;
  onChangeDescription: (description: string) => void;
};

export default function MessDescription({ description, onChangeDescription }: MessDescriptionProps): ReactElement {
  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
      <ProgressBar style={Events.progressBar} progress={0.833} color={Colors.green500} />
        <Text style={Events.centeredText}>5 of 6</Text>
        <Text style={Events.primaryHeading}>Description</Text>
        <TextInput
          style={Events.descInput}
          onChangeText={(text) => onChangeDescription(text)}
          multiline
          description={description}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
