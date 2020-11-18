import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/HomeScreen';
import EventScreen from './app/screens/EventScreen';
import CreateEventScreen from './app/screens/CreateEventScreen';
import EventDetailScreen from './app/screens/EventDetailScreen';
import SafetyDisclaimerScreen from './app/screens/SafetyDisclaimerScreen';
import CreateFlagScreen from './app/screens/CreateFlagScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import MyActivitiesScreen from './app/screens/MyActivitiesScreen';

const Stack = createStackNavigator();

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
        <Stack.Screen
          name="EventDetail"
          component={EventDetailScreen}
          options={{ title: 'Event Detail Screen' }}
        />
        <Stack.Screen
          name="SafetyDisclaimer"
          component={SafetyDisclaimerScreen}
          options={{ title: 'Safety Disclaimer Screen' }}
        />
        <Stack.Screen
          name="CreateFlag"
          component={CreateFlagScreen}
          options={{ title: 'Flag Create Screen' }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ title: 'Registration Screen' }}
        />
        <Stack.Screen
          name="MyActivities"
          component={MyActivitiesScreen}
          options={{ title: 'My Activities Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}