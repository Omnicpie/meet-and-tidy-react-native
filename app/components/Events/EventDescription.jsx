import React from 'react';
import {  Text, View, TextInput, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressBar, Colors } from 'react-native-paper';
import Events from '../../assets/stylesheets/Events';

export default function EventDescription({
  description, onChangeDescription, onNext, onPrevious
} = props) {
  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.5} color={Colors.green500} />
        <Text style={Events.centeredText}>6 of 8</Text>
        <Text style={Events.primaryHeading}>Tell us about your event</Text>
        <TextInput
          onChangeText={(text) => onChangeDescription(text)}
          multiline={true}
          style={Events.descInput}
          description={description}
        />
        <View>
          <Text style={Events.urlHeading}>Do you have a website? (optional)</Text>
          <TextInput style={Events.textInput}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
