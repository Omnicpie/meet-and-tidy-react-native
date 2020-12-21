import React from 'react';
import { ScrollView, Text, SafeAreaView, TextInput } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Flags from '../../assets/stylesheets/Flags';

// import Request from './request';

export default function FlagImage({
  image, onChangeImage, onNext, onPrevious,
} = props) {

  return (
    <SafeAreaView>
      <ScrollView>
        <ProgressBar style={Flags.progressBar} progress={0.6} color={Colors.green500} />
        <Text style={Flags.centeredText} >3 of 5</Text>
        <Text style={Flags.primaryHeading} >Images</Text>
        <TextInput
          onChangeText={(text) => onChangeImage(text)}
          image={image}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
