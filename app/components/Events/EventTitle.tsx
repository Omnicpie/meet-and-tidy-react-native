import React, { ReactElement } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Events from '../../assets/stylesheets/Events';
import Main from '../../assets/stylesheets/Main';
import NextPreviousButtons from '../NextPreviousButtons';
import { ApiEventType } from '../../../ApiTypes';

type EventTitleProps = {
  title: string;
  onChangeTitle: (text: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  eventType: ApiEventType;
  location: string;
};

export default function EventTitle({
  title, onChangeTitle, onNext, onPrevious, eventType, location,
}: EventTitleProps): ReactElement {
  const suggestedTitle = title === '' ? `${location} ${eventType.name} Clean Up` : title;
  const [value, onChangeValue] = React.useState(suggestedTitle);

  function validateInput() {
    if (value.length > 3) {
      // Handle case of user never changing the title.
      onChangeTitle(value);
      onNext();
    } else {
      alert('Please enter a title for your event that is at least four letters long.');
    }
  }

  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.5} color={Colors.green500} />
        <Text style={Events.centeredText}>4 of 8</Text>
        <View>
          <Text style={Events.primaryHeading}>Add a title</Text>
          <Text style={Main.tellUsMore}>Add a title to help others find the event</Text>
        </View>
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
        <NextPreviousButtons onPrevious={onPrevious} onNext={validateInput} />
      </ScrollView>
    </SafeAreaView>
  );
}
