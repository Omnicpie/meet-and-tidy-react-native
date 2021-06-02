import React from 'react';
import { Text, SafeAreaView, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressBar, Colors } from 'react-native-paper';
import Messes from '../../assets/stylesheets/Messes';

export default function MessDescription({
  description, onChangeDescription,
} = props) {
  return (
    <SafeAreaView style={Messes.mainContainer}>
      <ScrollView>
      <ProgressBar style={Messes.progressBar} progress={0.8} color={Colors.green500} />
        <Text style={Messes.centeredText}>4 of 5</Text>
        <Text style={Messes.primaryHeading}>Description</Text>
        <TextInput
          style={Messes.descInput}
          onChangeText={(text) => onChangeDescription(text)}
          multiline
          description={description}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
