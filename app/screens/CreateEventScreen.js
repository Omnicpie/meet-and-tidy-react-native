import React, { useState } from 'react';
import {
  View, StyleSheet, Text, SafeAreaView, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import BottomNavBar from '../assets/BottomNavBar';
import EventFormStep1 from '../assets/EventFormStep1';
import EventFormStep2 from '../assets/EventFormStep2';
import EventFormStep3 from '../assets/EventFormStep3';
import EventFormStep4 from '../assets/EventFormStep4';
import EventFormStep5 from '../assets/EventFormStep5';
import EventFormStep6 from '../assets/EventFormStep6';
import EventFormStep7 from '../assets/EventFormStep7';
import Request from '../assets/request';

function CreateEventScreen({ navigation }) {
  const [title, onChangeTitle] = useState('');
  const [description, onChangeDescription] = useState('');
  const [location, onChangeLocation] = useState('');
  const [date, onChangeDate] = useState('');
  const [eventType, onChangeEventType] = useState('');
  const [facilityType, onChangeFacilityType] = useState('');
  const [image, onChangeImage] = useState('');

  const [screen, setScreen] = useState(1);

  async function saveEvent() {
    const event = {
      title: title,
      description: description,
      location: location,
      startsOn: date,
      eventType: eventType,
      facilityType: facilityType,
      image: image
    };

    new Request("POST", "http://localhost:1337/events/").make(event);
  }

   function onNext() {
     console.log('next tapped by a child component');

     //saveEvent();

     //validate the inputs so far! DONE BUT MORE TO DO
   //  if (validateInput()) {
      //check if you've reached the last screen!
      setScreen(screen + 1);
    // } else {
    //   console.log("validations not met!")
    // }

     // on the final screen save the event to the backend
     // and navigate out of this screen/component....
   }

  function currentScreen() {
    switch(screen) {
      case 1:
        return (
          <EventFormStep1
            location={location} onChangeLocation={onChangeLocation}
            onNext={onNext}
          />
        )
     case 2:
       return (
         <EventFormStep2
            date={date} onChangeDate={onChangeDate}
            onNext={onNext}
          />
        )
        case 3:
          return (
            <View>
              <EventFormStep3
                eventType={eventType} onChangeEventType={onChangeEventType}
                onNext={onNext}
              />
           </View>
           )

     case 4:
       return (
         <View>
           <EventFormStep4
             title={title} onChangeTitle={onChangeTitle}
             onNext={onNext}
           />
        </View>
        )
      case 5:
        return (
          <View>
            <EventFormStep5
<<<<<<< Updated upstream
              title={title} onChangeFacilityType={onChangeFacilityType}
=======
              facilityType={facilityType} onChangeFacilityType={onChangeFacilityType}
>>>>>>> Stashed changes
              onNext={onNext}
            />
         </View>
        )
        case 6:
          return (
            <View>
              <EventFormStep6
                description={description} onChangeDescription={onChangeDescription}
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
                onNext={onNext}
              />
           </View>
          )
          case 7:
            return (
              <View>
                <EventFormStep7
                  image={image} onChangeImage={onChangeImage}

                  //onNext={onNext}
                />
               <Button
                 onPress={saveEvent}
                 title="Save"
               />
             </View>
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
