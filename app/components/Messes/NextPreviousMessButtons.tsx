import React, { ReactElement } from 'react';
import { View, Button } from 'react-native';
import Messes from '../../assets/stylesheets/Messes';

type NextPreviousButtonsProps = {
  onNext: () => void;
  onPrevious: () => void;
};

export default function NextPreviousButtons({
  onNext, onPrevious,
}: NextPreviousButtonsProps): ReactElement {
  return (
    <View style={Messes.buttonContainer}>
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
  );
}
