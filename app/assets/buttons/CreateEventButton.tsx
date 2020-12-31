import React, { ReactElement } from 'react';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import Main from '../stylesheets/Main';

function CreateEventButton(): ReactElement {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <Button icon="plus" color= "#54ae33" mode="contained" onPress={() => console.log('Pressed')}>
        Create
      </Button>
    </SafeAreaView>
  );
}

export default CreateEventButton;
