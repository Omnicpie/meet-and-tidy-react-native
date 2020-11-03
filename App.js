import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import logo from './assets/images/logo.png';
import Bullets from './Bullets.js'
import PopularEvents from './PopularEvents.js'
import Header from './Header.js'

export default function App() {
  return (
    <View>
      <Header />
      <PopularEvents />
      <Bullets/>
    </View>
  )
}

const styles = StyleSheet.create({

});
