import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Button, Platform, SafeAreaView } from 'react-native';


function AttendEventButton() {

  return (
    <SafeAreaView style={styles.container}>
      <Button icon="plus" color= "red" mode="contained">
        Attend
      </Button>
    </SafeAreaView>
  );
}

export default AttendEventButton;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
