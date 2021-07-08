import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Main from '../assets/stylesheets/Main';

import HomeScreen from '../screens/HomeScreen';
import CreateMessScreen from '../screens/CreateMessScreen';
import CreateEventScreen from '../screens/CreateEventScreen';
import MyActivitiesScreen from '../screens/MyActivitiesScreen';
import Attending from '../screens/Attending';
import Organising from '../screens/Organising';
import MyMesses from '../screens/MyMesses';
import EventDetailScreen from '../screens/EventDetailScreen';
import MessDetailScreen from '../screens/MessDetailScreen';
import EventSearchResultScreen from '../screens/EventSearchResultScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import SafetyDisclaimerScreen from '../screens/SafetyDisclaimerScreen';

import {
  BottomTabParamList, HomeParamList, CreateMessParamList, MyActivitiesParamList
} from '../../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string }) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home', headerShown: false }}
      />
      <HomeStack.Screen
        name="CreateEventScreen"
        component={CreateEventScreen}
        options={{ headerTitle: 'Create Event', headerShown: true }}
      />
      <HomeStack.Screen
        name="Event"
        component={EventDetailScreen}
        options={{ headerTitle: 'Event', headerShown: true }}
      />
      <HomeStack.Screen
        name="Mess"
        component={MessDetailScreen}
        options={{ headerTitle: 'Mess', headerShown: true }}
      />
      <HomeStack.Screen
        name="EventSearchResultScreen"
        component={EventSearchResultScreen}
        options={{ headerTitle: 'Search', headerShown: true }}
      />
      <HomeStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerTitle: 'Registration', headerShown: true }}
      />
      <HomeStack.Screen
        name="SafetyDisclaimer"
        component={SafetyDisclaimerScreen}
        options={{ headerTitle: 'SafetyDisclaimer', headerShown: true }}
      />
    </HomeStack.Navigator>
  );
}

const CreateMessStack = createStackNavigator<CreateMessParamList>();

function CreateMessNavigator() {
  return (
    <CreateMessStack.Navigator>
      <CreateMessStack.Screen
        name="CreateMessScreen"
        component={CreateMessScreen}
        options={{ headerTitle: 'Flag a Mess', headerShown: true }}
      />
    </CreateMessStack.Navigator>
  );
}

const MyActivitiesStack = createStackNavigator<MyActivitiesParamList>();

function MyActivitiesNavigator() {
  return (
    <MyActivitiesStack.Navigator>
      <MyActivitiesStack.Screen
        name="MyActivitiesScreen"
        component={MyActivitiesScreen}
        options={{ headerTitle: 'My Activities', headerShown: true }}
      />
      <MyActivitiesStack.Screen
        name="Attending"
        component={Attending}
        options={{ headerTitle: 'Attending', headerShown: true }}
      />
      <MyActivitiesStack.Screen
        name="Organising"
        component={Organising}
        options={{ headerTitle: 'Organising', headerShown: true }}
      />
      <MyActivitiesStack.Screen
        name="MyMesses"
        component={MyMesses}
        options={{ headerTitle: 'My Messes', headerShown: true }}
      />
    </MyActivitiesStack.Navigator>
  );
}

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
    >
      <BottomTab.Screen
        name="CreateMess"
        style={Main.navBarIcon}
        size={35}
        component={CreateMessNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name="delete-outline" />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        style={Main.navBarIcon}
        size={35}
        component={HomeNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name="home" />,
        }}
      />
      <BottomTab.Screen
        name="MyActivities"
        style={Main.navBarIcon}
        size={35}
        component={MyActivitiesNavigator}
        options={{
          tabBarIcon: () => <TabBarIcon name="person-outline" />,
        }}
      />
    </BottomTab.Navigator>
  );
}
