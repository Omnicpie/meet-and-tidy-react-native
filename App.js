import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.titleText}>MeetAndTidy</Text>
        <Text style = {styles.italicText}>Search | Find | Tidy</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    color: 'black'
  },
  italicText: {
    color: '#41cdf4',
    fontStyle: 'italic'
  },
});
