import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// import (useDimensions) from '@react-native-community/hooks';
import HomeScreen from "./app/screens/HomeScreen";
import EventScreen from "./app/screens/EventScreen";
import CreateEventScreen from "./app/screens/CreateEventScreen";


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="Event" 
          component={EventScreen} 
          options={{ title: 'Event Screen' }}

        />
        <Stack.Screen 
          name="CreateEvent" 
          component={CreateEventScreen} 
          options={{ title: 'Create Event Screen' }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
