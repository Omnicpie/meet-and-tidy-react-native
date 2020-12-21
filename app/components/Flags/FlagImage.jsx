import React from 'react';
<<<<<<< Updated upstream
import { ScrollView, Text, SafeAreaView, TextInput, View } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Flags from '../../assets/stylesheets/Flags';
import NextPreviousFlagButtons from './NextPreviousFlagButtons';

=======
import { ScrollView, Text, SafeAreaView, TextInput, Button, View } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Flags from '../../assets/stylesheets/Flags';
>>>>>>> Stashed changes
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
