import React from 'react';
import { View, Button, SafeAreaView } from 'react-native';
import Events from '../../assets/stylesheets/Events';

export default function NextPreviousButtons({
  onNext, onPrevious
} = props) {
  return (
    <SafeAreaView>
      <View style={Events.buttonContianer}>
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
    </SafeAreaView>
  );
}
