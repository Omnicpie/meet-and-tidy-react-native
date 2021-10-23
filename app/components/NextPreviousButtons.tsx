import React, { ReactElement } from 'react'
import { View, Button } from 'react-native'
import Events from '../assets/stylesheets/Events'

type NextPreviousButtonsProps = {
  onNext: () => void;
  onPrevious: () => void;
};

export default function NextPreviousButtons ({
  onNext, onPrevious
}: NextPreviousButtonsProps): ReactElement {
  return (
    <View style={Events.buttonContainer}>
      <View style={Events.buttonElement}>
        <Button
          onPress={onPrevious}
          title="Previous"
        />
      </View>
      <View style={Events.buttonElement}>
        <Button
          onPress={onNext}
          title="Next"
        />
      </View>
    </View>
  )
}
