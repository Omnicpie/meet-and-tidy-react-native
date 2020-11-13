import React, {useState} from 'react';
import BottomNavBar from '../assets/BottomNavBar'
import EventFormStep1 from '../assets/EventFormStep1'
import EventFormStep2 from '../assets/EventFormStep2'
import Request from '../assets/request'
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';


function CreateEventScreen({navigation}) {
  const [title, onChangeTitle ] = useState('');
  const [description, onChangeDescription ] = useState('');
  const [screen, setScreen] = useState(1);

   async function saveEvent() {
       const event = {
           title: title,
           description: description
       }

       new Request("POST", "http://localhost:1337/events/").make(event);
   }
   
   function onNext() {
     console.log('next tapped by a child component');
     //saveEvent();
     //validate the inputs so far!
     //check if you've reached the last screen!
     setScreen(screen + 1);
     // on the final screen save the event to the backend
     // and navigate out of this screen/component....
   }

   function currentScreen() {
     // case statement is more appropriate
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
     /*
     if (screen === 1) {
       return (
        <EventFormStep1
          title={title} onChangeTitle={onChangeTitle}
          description={description} onChangeDescription={onChangeDescription}
          onNext={onNext}
        />
       )
     } else if (screen === 2) {
      return (
        <EventFormStep2
          title={title} onChangeTitle={onChangeTitle}
          description={description} onChangeDescription={onChangeDescription}
          onNext={onNext}
        />
       )
     } */
   }

   return (
    <SafeAreaView style={styles.container}>
      <View>
        {currentScreen()}
      </View>
      <BottomNavBar navigation={navigation}/>
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