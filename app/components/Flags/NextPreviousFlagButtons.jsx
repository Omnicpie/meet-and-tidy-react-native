import React from 'react';
import {
  StyleSheet, View, Button,
} from 'react-native';
import Flags from '../../assets/stylesheets/Flags';

export default function NextPreviousButtons({
  onNext, onPrevious
} = props) {
  return (
    <View>
      <View style={Flags.buttonContianer}>
        <View style={Flags.buttonElement}>
          <Button
            onPress={onPrevious}
            title="Previous"
          />
        </View>
        <View style={Flags.buttonElement}>
          <Button
            onPress={onNext}
            title="Next"
          />
        </View>
      </View>
    </View>
  );
}
