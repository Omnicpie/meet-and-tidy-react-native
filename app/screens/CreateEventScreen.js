import React from 'react';
import BottomNavBar from '../assets/BottomNavBar'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';


function CreateEventScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>A 'Create an event' form will be here </Text>
        <ProgressBar style={styles.progressBar} progress={0.1} color={Colors.green500} />
        <Text>1 of 8</Text>
      </View>
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
  },
  progressBar: {
    marginTop: 50
  }
});