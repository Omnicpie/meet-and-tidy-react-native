import React, { ReactElement } from 'react';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import Main from '../stylesheets/Main';

function AttendEventButton(): ReactElement {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <Button icon="plus" color= "red" mode="contained">
        Attend
      </Button>
    </SafeAreaView>
  );
}

export default AttendEventButton;
