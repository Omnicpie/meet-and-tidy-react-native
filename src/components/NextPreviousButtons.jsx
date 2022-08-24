import React from 'react';
import { View, Button } from 'react-native';
import Events from '../assets/stylesheets/Events';

export default function NextPreviousButtons({ onNext, onPrevious }) {
  return (
    <View style={Events.buttonContainer}>
      <View style={Events.buttonElement}>
        <Button onPress={onPrevious} title="Previous" />
      </View>
      <View style={Events.buttonElement}>
        <Button onPress={onNext} title="Next" />
      </View>
    </View>
  );
}
