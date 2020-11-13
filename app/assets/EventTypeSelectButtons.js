import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';

export default function EventTypeSelectButtons({
  onChangeEventType
} = props) {

  return (

    <View>
      <Button
      onPress={onChangeEventType("Park")}
      eventType="Park"
      title="Park"
      />
      <Button
        onPress={onChangeEventType("Canal")}
        eventType="Canal"
        title="Canal"
      />
      <Button
        onPress={onChangeEventType("Beach")}
        eventType="Beach"
        title="Beach"
      />
      <Button
        onPress={onChangeEventType("Street")}
        eventType="Street"
        title="Street"
      />
      <Button
        onPress={onChangeEventType("Woodland")}
        eventType="Woodland"
        title="Woodland"
      />
      <Button
        onPress={onChangeEventType("Cemetery")}
        eventType="Cemetery"
        title="Cemetery"
      />
      <Button
        onPress={onChangeEventType("Other")}
        eventType="Other"
        title="Other"
      />
    </View>
  )
}
