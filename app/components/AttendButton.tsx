import * as React from 'react';
import {
  Pressable, Text, View,
} from 'react-native';
import Events from '../assets/stylesheets/Events';

export default function AttendButton({ attend, setAttend}: {
  attend: boolean, setAttend: Function,
}) {
  return (
    <Pressable onPress={() => { setAttend(!attend); }}>
      <View style={Events.attendEventContainer}>
        { attend ?
          <View style={Events.attendingButtonContainer}><Text style={Events.attendingEventButton}>Attending</Text></View>
          :
          <View style={Events.attendButtonContainer}><Text style={Events.attendEventButton}>Attend</Text></View>
        }
      </View>
    </Pressable>
  );
}
