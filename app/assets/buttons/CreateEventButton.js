import React from 'react';

import { StyleSheet, Button, Platform, SafeAreaView } from 'react-native';


function CreateEventButton() {

  return (
    <SafeAreaView style={styles.container}>
      <Button
      title="+ Creat=e" 
      color= "rgb(84, 174, 51)"

    />
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
