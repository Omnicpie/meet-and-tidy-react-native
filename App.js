import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import logo from './assets/images/logo.png';

export default function App() {
// add event button
  return (
    <View style={styles.container}>
      <Button title={'+ Create'}/>
    </View>
  )
// logo and tagline
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} /> 
      <Text style={styles.tagLine}>Commit to clean up</Text>
      <StatusBar style="auto" />
    </View>
  )
// search bar

// scrollbar for popular events
  return (
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.subHeading}>Popular events</Text>
      <View style={styles.large} />
      <ScrollView horizontal>
        <View style={styles.small} />
        <View style={styles.small} />
        <View style={styles.small} />
      </ScrollView>
      <View style={styles.large} />
      <View style={styles.small} />
      <View style={styles.large} />
    </ScrollView>
  );
// bottompage navigation buttons

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {

  },
  tagLine: {
    color: '#888', 
    fontSize: 15
  },
  subHeading: {
    color: 'black', 
    fontSize: 20,
    fontWeight: bold
  },
  logo: {
    width: 250, 
    height: 125
  },
  small: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  large: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
});
