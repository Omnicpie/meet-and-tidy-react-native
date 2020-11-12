import React from 'react';
import BottomNavBar from '../assets/BottomNavBar'
import { StyleSheet, Text, SafeAreaView } from 'react-native';


function CreateEventScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>A 'Create an event' form will be here </Text>
      <BottomNavBar/>
    </SafeAreaView> 
  );
}

export default CreateEventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25
  }
});