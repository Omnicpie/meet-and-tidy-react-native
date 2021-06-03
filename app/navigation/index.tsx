import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import MessDetailScreen from '../screens/MessDetailScreen';
import CreateEventScreen from '../screens/CreateEventScreen';
import SafetyDisclaimerScreen from '../screens/SafetyDisclaimerScreen';
import CreateMessScreen from '../screens/CreateMessScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import MyActivitiesScreen from '../screens/MyActivitiesScreen';
import Attending from '../screens/Attending';
import Organising from '../screens/Organising';
import MyMesses from '../screens/MyMesses';
import EventSearchResultScreen from '../screens/EventSearchResultScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/*
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Welcome', headerShown: false }}
      />
      <Stack.Screen
        name="Event"
        component={EventDetailScreen}
        options={{ title: 'Event' }}
      />
      <Stack.Screen
        name="CreateEvent"
        component={CreateEventScreen}
        options={{ title: 'New Event' }}
      />
      <Stack.Screen
        name="EventSearchResult"
        component={EventSearchResultScreen}
        options={{ title: 'Search Results' }}
      />
      <Stack.Screen
        name="SafetyDisclaimer"
        component={SafetyDisclaimerScreen}
        options={{ title: 'Safety Disclaimer' }}
      />
      <Stack.Screen
        name="Mess"
        component={MessDetailScreen}
        options={{ title: 'Mess' }}
      />
      <Stack.Screen
        name="CreateMess"
        component={CreateMessScreen}
        options={{ title: 'Mess Create' }}
      />
      <Stack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ title: 'Registration Screen' }}
      />
      <Stack.Screen
        name="MyActivities"
        component={MyActivitiesScreen}
        options={{ title: 'My Activities' }}
      />
      <Stack.Screen
        name="MyMesses"
        component={MyMesses}
        options={{ title: 'My Messes' }}
      />
      <Stack.Screen
        name="Attending"
        component={Attending}
        options={{ title: 'Attending' }}
      />
      <Stack.Screen
        name="Organising"
        component={Organising}
        options={{ title: 'Organising' }}
      />

*/
