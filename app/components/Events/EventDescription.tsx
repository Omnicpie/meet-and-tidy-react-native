import React, { ReactElement } from 'react';
import {
  Text, View, TextInput, SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressBar, Colors } from 'react-native-paper';
import Events from '../../assets/stylesheets/Events';
import NextPreviousButtons from './NextPreviousButtons';

type EventDescriptionProps = {
  description: string;
  url: string;
  onChangeDescription: (text: string) => void;
  onChangeUrl: (text: string) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function EventDescription({
  description, url, onChangeDescription, onChangeUrl, onNext, onPrevious,
}: EventDescriptionProps): ReactElement {
  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.75} color={Colors.green500} />
        <Text style={Events.centeredText}>6 of 8</Text>
        <Text style={Events.primaryHeading}>Tell us about your event</Text>
        <TextInput
          onChangeText={(text) => onChangeDescription(text)}
          multiline
          style={Events.descInput}
          value={description}
        />
        <View>
          <Text style={Events.urlHeading}>Do you have a website? (optional)</Text>
          <TextInput
            style={Events.textInput}
            onChangeText={(text) => onChangeUrl(text)}
            value={url}
          />
        </View>
        <NextPreviousButtons onPrevious={onPrevious} onNext={onNext} />
      </ScrollView>
    </SafeAreaView>
  );
}
