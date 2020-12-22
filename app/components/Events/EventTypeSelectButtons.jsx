import React from 'react';
import { View, Button, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Events from '../../assets/stylesheets/Events'

export default function EventTypeSelectButtons({
  eventType, onChangeEventType,
} = props) {
  return (
    // TODO this currently only selects the last one from the list
    <SafeAreaView style={Events.flagTypeContainer}>
      <View style={Events.buttonContianer}>
        <TouchableOpacity
          onPress={onChangeEventType('Park')}
          eventType="Park"
          style={Events.eventTypeButton}>
            <Text style={Events.eventTypeButtonText}>Park</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onChangeEventType('Canal')}
          eventType="Canal"
          style={Events.eventTypeButton}>
            <Text style={Events.eventTypeButtonText}>Canal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onChangeEventType('Beach')}
          eventType="Beach"
          style={Events.eventTypeButton}>
            <Text style={Events.eventTypeButtonText}>Beach</Text>
        </TouchableOpacity>
      </View>
      <View style={Events.buttonContianer}>
        <TouchableOpacity
          onPress={onChangeEventType('Street')}
          eventType="Street"
          style={Events.eventTypeButton}>
            <Text style={Events.eventTypeButtonText}>Street</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onChangeEventType('Woodland')}
          eventType="Woodland"
          style={Events.eventTypeButton}>
            <Text style={Events.eventTypeButtonText}>Woodland</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onChangeEventType('Cemetery')}
          eventType="Cemetery"
          style={Events.eventTypeButton}>
            <Text style={Events.eventTypeButtonText}>Cemetery</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
