import React from 'react';
import { Button, StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';

export default function Create() {
  return (
    <SafeAreaView style={styles.container}>
      <Button style={styles.createButton} title={'+ Create'} color= "rgb(84, 174, 51)"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  tagLine: {
    color: '#888', 
    fontSize: 15
  },
  logo: {
    width: 250, 
    height: 125,
    marginTop: 25
  },
});
