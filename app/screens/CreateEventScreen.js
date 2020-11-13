import React, { useState } from 'react';
import {
  View, StyleSheet, Text, SafeAreaView,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import BottomNavBar from '../assets/BottomNavBar';
import EventFormStep1 from '../assets/EventFormStep1';
import EventFormStep2 from '../assets/EventFormStep2';
import Request from '../assets/request';

function CreateEventScreen({ navigation }) {
  const [title, onChangeTitle] = useState('');
  const [description, onChangeDescription] = useState('');
  const [screen, setScreen] = useState(1);

  async function saveEvent() {
    const event = {
      title,
      description,
    };

       new Request("POST", "http://localhost:1337/events/").make(event);
   }

   function onNext() {
     console.log('next tapped by a child component');

     //saveEvent();

     //validate the inputs so far! DONE BUT MORE TO DO
     if (validateInput()) {
      //check if you've reached the last screen!
      setScreen(screen + 1);
     } else {
       console.log("validations not met!")
     }

     // on the final screen save the event to the backend
     // and navigate out of this screen/component....
   }


   function validateInput() {
    switch(screen) {
      case 1:
        let validationRules = {
          minLength: 6,
          type: "string"
      }

      if (typeof title !== validationRules.type) {
          return false;
      }
      if (typeof description !== validationRules.type) {
        return false;
      }
      if (title.length < validationRules.minLength ) {
          return false;
      }
      if (description.length < validationRules.minLength ) {
        return false;
      }
      return true;

      case 2:
        console.log("Screen 1 validations for" + title + description);
      break;
   }
  }

   function currentScreen() {
     switch(screen) {
     case 1:
      return (
        <EventFormStep1
          title={title} onChangeTitle={onChangeTitle}
          description={description} onChangeDescription={onChangeDescription}
          onNext={onNext}
        />
       )

     case 2:
      return (
        <EventFormStep2
          title={title} onChangeTitle={onChangeTitle}
          description={description} onChangeDescription={onChangeDescription}
          onNext={onNext}
        />
       )
     }
   }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {currentScreen()}
      </View>
      <BottomNavBar navigation={navigation} />
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
    paddingVertical: 25,
  },
  progressBar: {
    marginTop: 50,
  },
});
