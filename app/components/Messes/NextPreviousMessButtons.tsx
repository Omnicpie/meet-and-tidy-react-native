import React from 'react';
import { View, Button } from 'react-native';
import Messes from '../../assets/stylesheets/Messes';

export default function NextPreviousButtons({
  onNext, onPrevious
} = props) {
  return (
    <View>
      <View style={Messes.buttonContianer}>
        <View style={Messes.buttonElement}>
          <Button
            onPress={onPrevious}
            title="Previous"
          />
        </View>
        <View style={Messes.buttonElement}>
          <Button
            onPress={onNext}
            title="Next"
          />
        </View>
      </View>
    </View>
  );
}
