import React from 'react';
import { Text, SafeAreaView, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressBar, Colors } from 'react-native-paper';
import Flags from '../../assets/stylesheets/Flags';
import NextPreviousFlagButtons from './NextPreviousFlagButtons';
// import Request from './request';

export default function FlagDescription({
  description, onChangeDescription, onNext, onPrevious,
} = props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <ProgressBar style={Flags.progressBar} progress={0.8} color={Colors.green500} />
        <Text style={Flags.centeredText}>4 of 5</Text>
        <Text style={Flags.primaryHeading}>Description</Text>
        <TextInput
          style={Flags.descInput}
          onChangeText={(text) => onChangeDescription(text)}
          multiline={true}
          description={description}
        />
        <View style={Flags.buttonContianer}>
          <NextPreviousFlagButtons
            onNext={onNext}
            onPrevious={onPrevious}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
