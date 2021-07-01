import * as React from 'react';
import {
  Pressable, Text, View,
} from 'react-native';
import Events from '../assets/stylesheets/Events';

export default function AttendButton({ attending, addAttending, setAttending }: {
  attending: boolean, addAttending: Function, setAttending: Function,
}) {
  console.log(attending);

  const onPressAttend = () => {
    addAttending();
    setAttending(!attending);
  }

  return (
    <Pressable onPress={onPressAttend}>
      <View style={Events.attendEventContainer}>
        { attending ?
          <View style={Events.attendingButtonContainer}><Text style={Events.attendingEventButton}>Attending</Text></View>
          :
          <View style={Events.attendButtonContainer}><Text style={Events.attendEventButton}>Attend</Text></View>
        }
      </View>
    </Pressable>
  );
}
