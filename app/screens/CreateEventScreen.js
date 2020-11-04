import React from 'react';
import { StyleSheet, Button, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';


function CreateEventScreen(props) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>A 'Create an event' form will be here </Text>
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