import React from 'react';
import { View, Button, SafeAreaView } from 'react-native';
import Events from '../../assets/stylesheets/Events'

export default function EventTypeSelectButtons({
  eventType, onChangeEventType,
} = props) {
  return (
    // TODO this currently only selects the last one from the list
    <SafeAreaView style={Events.flagTypeContainer}>
      <View style={Events.buttonContianer}>
        <Button
          color="#54ae33"
          onPress={onChangeEventType(eventType)}
          eventType="Park"
          title="Park"
        />
        <Button
          color="#54ae33"
          onPress={onChangeEventType('Canal')}
          eventType="Canal"
          title="Canal"
        />
        <Button
          color="#54ae33"
          onPress={onChangeEventType('Beach')}
          eventType="Beach"
          title="Beach"
        />
      </View>
      <View style={Events.buttonContianer}>
        <Button
          color="#54ae33"
          onPress={onChangeEventType('Street')}
          eventType="Street"
          title="Street"
        />
        <Button
          color="#54ae33"
          onPress={onChangeEventType('Woodland')}
          eventType="Woodland"
          title="Woodland"
        />
        <Button
          color="#54ae33"
          onPress={onChangeEventType('Cemetery')}
          eventType="Cemetery"
          title="Cemetery"
        />
      </View>
    </SafeAreaView>
  );
}
