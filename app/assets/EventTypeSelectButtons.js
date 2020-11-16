import React from 'react';
import {
  View, Button
} from 'react-native';

export default function EventTypeSelectButtons({
  eventType, onChangeEventType,
} = props) {
  return (
    // TODO this currently only selects the last one from the list
    <View>
      <Button
        onPress={onChangeEventType(eventType)}
        eventType="Park"
        title="Park"
      />
      <Button
        onPress={onChangeEventType('Canal')}
        eventType="Canal"
        title="Canal"
      />
      <Button
        onPress={onChangeEventType('Beach')}
        eventType="Beach"
        title="Beach"
      />
      <Button
        onPress={onChangeEventType('Street')}
        eventType="Street"
        title="Street"
      />
      <Button
        onPress={onChangeEventType('Woodland')}
        eventType="Woodland"
        title="Woodland"
      />
      <Button
        onPress={onChangeEventType('Cemetery')}
        eventType="Cemetery"
        title="Cemetery"
      />
    </View>
  );
}
