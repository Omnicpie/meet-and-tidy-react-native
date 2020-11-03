import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import logo from './assets/images/logo.png';
import { SearchBar } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title={'+ Create'}/>
    </View>
  )

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} /> 
      <Text style={styles.tagLine}>Commit to clean up</Text>
      <StatusBar style="auto" />
      <Text style={styles.subHeading}>Commit to clean up</Text>
    </View>
  )
  
  return (
    <ScrollView style={styles.container}>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
