import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import logo from './assets/images/logo.png';

export default function Header() {
  return (
  <View>
    <View style={styles.container}>
      <Button style={styles.createButton} title={'+ Create'}/>
    </View>

    <View style={styles.container}>
      <Image source={logo} style={styles.logo} /> 
      <Text style={styles.tagLine}>Commit to clean up</Text>
      <StatusBar style="auto" />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButton: {
    alignItems: 'right',
    justifyContent: 'right',
  },
  tagLine: {
    color: '#888', 
    fontSize: 15
  },
  logo: {
    width: 250, 
    height: 125,
    marginTop: 25
  }
});
