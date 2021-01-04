import React from 'react';
import { Text, SafeAreaView, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressBar, Colors } from 'react-native-paper';
import Flags from '../../assets/stylesheets/Flags';
// import Request from './request';

export default function FlagDescription({
  description, onChangeDescription,
} = props) {
  return (
    <SafeAreaView style={Flags.mainContainer}>
      <ScrollView>
      <ProgressBar style={Flags.progressBar} progress={0.8} color={Colors.green500} />
        <Text style={Flags.centeredText}>4 of 5</Text>
        <Text style={Flags.primaryHeading}>Description</Text>
        <TextInput
          style={Flags.descInput}
          onChangeText={(text) => onChangeDescription(text)}
          multiline
          description={description}
        />
      </ScrollView>
    </SafeAreaView>
  );
}