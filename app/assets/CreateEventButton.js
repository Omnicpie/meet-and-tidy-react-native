import React from 'react';
import EventButton from '../assets/EventButton'
import { StyleSheet, Button, SafeAreaView, Platform } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

// const Stack = createStackNavigator();

function CreateEventButton(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
      title="+ Create" 
      color= "rgb(84, 174, 51)"
      onPress={() =>
        navigation.navigate('CreateEvent', { name: 'CreateEvent' } )
      }
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
