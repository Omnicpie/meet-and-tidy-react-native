import React, { ReactElement, useEffect, useState } from 'react';
import { ApolloError, gql, useMutation } from '@apollo/client';
import { View, SafeAreaView, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import EventLocation from '../components/Events/EventLocation';
import EventDate from '../components/Events/EventDate';
import EventType from '../components/Events/EventType';
import EventTitle from '../components/Events/EventTitle';
import EventFacility from '../components/Events/EventFacility';
import EventDescription from '../components/Events/EventDescription';
import EventImage from '../components/Events/EventImage';
import EventPreview from '../components/Events/EventPreview';
import Events from '../assets/stylesheets/Events';
import FacilitySelectButtons from '../components/Events/FacilityTypeSelectButtons';

function CreateEventScreen({ navigation, route }) {
  const [title, onChangeTitle] = useState('');
  const [description, onChangeDescription] = useState('');
  const [url, onChangeUrl] = useState('');
  const [location, onChangeLocation] = useState('');
  const [date, onChangeDate] = useState('');
  const [eventType, onChangeEventType] = useState('');
  const [facilities, onChangeFacilities] = useState([]);
  const [image, onChangeImage] = useState('');
  const [imagePreview, onChangeImagePreview] = useState('');
  const [screen, setScreen] = useState(1);

  const CREATE_EVENT = gql`
    mutation CreateEvent(
      $date: String
      $description: String
      $eventTypeId: ID!
      $facilityIds: [ID!]!
      $location: String
      $title: String!
      $url: String
    ) {
      createEvent(
        date: $date
        description: $description
        eventTypeId: $eventTypeId
        facilityIds: $facilityIds
        location: $location
        title: $title
        url: $url
      ) {
        errors
      }
    }
  `;

  const responses = {
    onCompleted(data) {
      console.log(data);
      if (data.createEvent.errors.length) {
        console.log('completed with errors');
        console.log(data.createEvent.errors);
      } else {
        console.log('completed without errors');
        navigation.navigate('HomeScreen');
      }
    },
    onError(_error) {
      console.log(_error);
    },
  };

  const [createEvent, _eventResult] = useMutation(CREATE_EVENT, responses);

  const facilityIdsArray = () => {
    const ids = [];
    if (facilities) {
      facilities.forEach(facility => ids.push(facility.id));
    }
    return ids;
  };

  function createEventAndProceed() {
    createEvent({
      variables: {
        date,
        description,
        eventTypeId: eventType.id,
        facilityIds: facilityIdsArray(),
        location,
        title,
        url,
      },
    });
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
          <View>
            <EventLocation
              location={location}
              onChangeLocation={onChangeLocation}
              onNext={onNext}
            />
          </View>
        );
      case 2:
        return (
          <View>
            <EventDate
              date={date}
              onChangeDate={onChangeDate}
              onPrevious={onPrevious}
              onNext={onNext}
            />
          </View>
        );
      case 3:
        return (
          <View>
            <EventType
              eventType={eventType}
              onChangeEventType={onChangeEventType}
              onNext={onNext}
              onPrevious={onPrevious}
              route={route}
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
              location={location}
              eventType={eventType}
            />
          </View>
        );
      case 5:
        return (
          <View>
            <EventFacility
              facilities={facilities}
              onChangeFacilities={onChangeFacilities}
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
              url={url}
              onChangeUrl={onChangeUrl}
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
              onChangeImagePreview={onChangeImagePreview}
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
              url={url}
              location={location}
              eventType={eventType}
              facilities={facilities}
              image={image}
              imagePreview={imagePreview}
              onPrevious={onPrevious}
              navigation={navigation}
            />
            <View style={Events.buttonContainer}>
              <View style={Events.buttonElement}>
                <Button onPress={onPrevious} title="Previous" />
                <Button onPress={createEventAndProceed()} title="Save" />
              </View>
            </View>
          </View>
        );
      default:
        return <> </>;
    }
  }
  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>{currentScreen()}</ScrollView>
    </SafeAreaView>
  );
}

export default CreateEventScreen;
