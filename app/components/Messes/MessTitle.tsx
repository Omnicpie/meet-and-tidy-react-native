import React, { ReactElement } from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Events from '../../assets/stylesheets/Events';
import NextPreviousButtons from './NextPreviousButtons';

type MessTitleProps = {
  title: string;
  onChangeTitle: (text: string) => void;
  onNext: () => void;
  eventType: string;
  location: string;
  messType: string;
};

export default function MessTitle({ title, onChangeTitle, onNext, messType, location }: MessTitleProps): ReactElement {
  const suggestedTitle = title === '' ? `${location} ${messType}Mess` : title;
  const [value, onChangeValue] = React.useState(suggestedTitle);

  function validateInput() {
    if (value.length > 3) {
      // Handle case of user never changing the title.
      onChangeTitle(value);
      onNext();
    } else {
      alert('Please enter a title for your mess that is at least four letters long.');
    }
  }

  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.666} color={Colors.green500} />
        <Text style={Events.centeredText}>4 of 6</Text>
        <Text style={Events.primaryHeading}>Name your mess</Text>
        <TextInput
          onChangeText={(text) => {
            onChangeTitle(text);
            onChangeValue(text);
          }}
          style={Events.textInput}
          value={value}
          clearButtonMode="while-editing"
          defaultValue="Something"
        />
        {/* <NextPreviousButtons onPrevious={onPrevious} onNext={validateInput} /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
