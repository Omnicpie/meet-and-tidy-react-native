import React, { useState } from 'react';
import {
  View, StyleSheet, SafeAreaView, Button,
} from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import EventLocation from '../components/Events/EventLocation';
import EventDate from '../components/Events/EventDate';
import EventType from '../components/Events/EventType';
import EventTitle from '../components/Events/EventTitle';
import EventFacility from '../components/Events/EventFacility';
import EventDescription from '../components/Events/EventDescription';
import EventImage from '../components/Events/EventImage';
import EventPreview from '../components/Events/EventPreview';
import Request from '../helpers/Request';
import CreateEvent from '../assets/stylesheets/CreateEvent';

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
      title,
      description,
      location,
      startsOn: date,
      eventType,
      facilityType,
      image,
    };

    new Request('POST', 'http://localhost:1337/events/').make(event);
  }

  function onNext() {
    setScreen(screen + 1);
    // saveEvent();

    // validate the inputs so far! DONE BUT MORE TO DO
    //  if (validateInput()) {
    // check if you've reached the last screen!

    // } else {
    //   console.log("validations not met!")
    // }

    // on the final screen save the event to the backend
    // and navigate out of this screen/component....
  }

  function onPrevious() {
    setScreen(screen - 1);
  }

  function currentScreen() {
    switch (screen) {
      case 1:
        return (
          <EventLocation
            location={location}
            onChangeLocation={onChangeLocation}
            onNext={onNext}
          />
        );
      case 2:
        return (
          <EventDate
            StyleSheets={CreateEvent}
            date={date}
            onChangeDate={onChangeDate}
            onNext={onNext}
            onPrevious={onPrevious}
          />
        );
      case 3:
        return (
          <View>
            <EventType
              eventType={eventType}
              onChangeEventType={onChangeEventType}
              onNext={onNext}
              onPrevious={onPrevious}
            />
          </View>
        );
      case 4:
        return (
          <View>
            <EventTitle
              title={title}
              onChangeTitle={onChangeTitle}
              onNext={onNext}
              onPrevious={onPrevious}
            />
          </View>
        );
      case 5:
        return (
          <View>
            <EventFacility
              facilityType={facilityType}
              onChangeFacilityType={onChangeFacilityType}
              onNext={onNext}
              onPrevious={onPrevious}
            />
          </View>
        );
      case 6:
        return (
          <View>
            <EventDescription
              description={description}
              onChangeDescription={onChangeDescription}
              onNext={onNext}
              onPrevious={onPrevious}
            />
          </View>
        );
      case 7:
        return (
          <View>
            <EventImage
              image={image}
              onChangeImage={onChangeImage}
              onNext={onNext}
              onPrevious={onPrevious}

            />
          </View>
        );
      case 8:
        return (
          <View>
            <EventPreview
              title={title}
              date={date}
              description={description}
              location={location}
              eventType={eventType}
              image={image}
              onPrevious={onPrevious}
            />
            <Button
              onPress={saveEvent}
              title="Save"
            />
          </View>
        );
      default:
        return (<> </>);
    }
  }

  return (
    <SafeAreaView style={CreateEvent.mainContainer}>
      <View>
        {currentScreen()}
      </View>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default CreateEventScreen;
