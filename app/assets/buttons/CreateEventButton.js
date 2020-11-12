import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Button, Platform, SafeAreaView } from 'react-native';


function CreateEventButton() {

  return (
    <SafeAreaView style={styles.container}>
      <Button icon="plus" color= "rgb(84, 174, 51)" mode="contained" onPress={() => console.log('Pressed')}>
        Create
      </Button>
    </SafeAreaView>
  );
}

export default CreateEventButton;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
