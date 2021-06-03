import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './app/screens/HomeScreen';
import EventDetailScreen from './app/screens/EventDetailScreen';
import CreateEventScreen from './app/screens/CreateEventScreen';
import SafetyDisclaimerScreen from './app/screens/SafetyDisclaimerScreen';
import CreateMessScreen from './app/screens/CreateMessScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';
import MyActivitiesScreen from './app/screens/MyActivitiesScreen';
import EventSearchResultScreen from './app/screens/EventSearchResultScreen';

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'http://192.168.1.117:3000/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
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
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
