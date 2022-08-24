import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MessDetailScreen from '../screens/MessDetailScreen';
import EventDetailScreen from '../screens/EventDetailScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
      <Stack.Screen name="Event" component={EventDetailScreen} />
      <Stack.Screen name="Mess" component={MessDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
