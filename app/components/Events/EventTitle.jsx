import React from 'react';
import { SafeAreaView, Text, View, TextInput } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Events from '../../assets/stylesheets/Events';
import { ScrollView } from 'react-native-gesture-handler';

export default function EventTitle({
  title, onChangeTitle, onNext, eventType, location
} = props) {
  const suggestedTitle = `${location} ${eventType} Clean Up`;
  const [value, onChangeValue] = React.useState(suggestedTitle);
  onChangeTitle(value);

  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.5} color={Colors.green500} />
        <Text style={Events.centeredText}>4 of 8</Text>
        <Text style={Events.primaryHeading}>Name your event</Text>
        <TextInput
          onChangeText={(text) => {
            onChangeTitle(text);
            onChangeValue(text);
          }}
          style={Events.textInput}
          value={value}
          title={title}
          clearButtonMode
          defaultValue="Something"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
