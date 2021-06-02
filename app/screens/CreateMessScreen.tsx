import React, { useState } from 'react';
import {
  View, SafeAreaView, Button, ScrollView
} from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import MessLocation from '../components/Messes/MessLocation';
import MessType from '../components/Messes/MessType';
import MessDescription from '../components/Messes/MessDescription';
import MessImage from '../components/Messes/MessImage';
import MessPreview from '../components/Messes/MessPreview';
import Request from '../helpers/Request';
import CreateMess from '../assets/stylesheets/CreateMess';
import Messes from '../assets/stylesheets/Messes';

function CreateMessScreen({ navigation }) {
  const [description, onChangeDescription] = useState('');
  const [location, onChangeLocation] = useState('');
  const [eventTypes, onChangeEventTypes] = useState([]);
  const [image, onChangeImage] = useState('');

  const [screen, setScreen] = useState(1);

  async function saveMess() {
    const mess = {
      description,
      location,
      eventTypes,
      image,
    };

    new Request('POST', '/messes/').createEventOrMess(mess);
  }

  function onNext() {
    setScreen(screen + 1);
  }

  function onPrevious() {
    setScreen(screen - 1);
  }

  function currentScreen() {
    switch (screen) {
      case 1:
        return (
          <View>
            <MessLocation
              location={location}
              onChangeLocation={onChangeLocation}
              onNext={onNext}
            />
            <View style={Messes.buttonContianer}>
              <Button
                onPress={onNext}
                title="Next"
              />
            </View>
          </View>
        );
      case 2:
        return (
          <View>
            <MessType
              eventTypes={eventTypes}
              onChangeEventTypes={onChangeEventTypes}
              onNext={onNext}
            />
            <View style={Messes.buttonContianer}>
              <Button
                onPress={onPrevious}
                title="Previous"
              />
              <Button
                onPress={onNext}
                title="Next"
              />
            </View>
          </View>
        );
      case 3:
        return (
          <View>
            <MessImage
              image={image}
              onChangeImage={onChangeImage}
              onNext={onNext}
            />
            <View style={Messes.buttonContianer}>
              <Button
                onPress={onPrevious}
                title="Previous"
              />
              <Button
                onPress={onNext}
                title="Next"
              />
            </View>
          </View>
        );
      case 4:
        return (
          <View>
            <MessDescription
              description={description}
              onChangeDescription={onChangeDescription}
              onNext={onNext}
            />
            <View style={Messes.buttonContianer}>
              <Button
                onPress={onPrevious}
                title="Previous"
              />
              <Button
                onPress={onNext}
                title="Next"
              />
            </View>
          </View>
        );
      case 5:
        return (
          <View>
            <MessPreview
              description={description}
              location={location}
              eventTypes={eventTypes}
              image={image}
            />
            <View style={Messes.buttonContianer}>
              <Button
                onPress={onPrevious}
                title="Previous"
              />
            </View>
            <View style={Messes.buttonContianer}>
              <Button
                onPress={saveMess}
                title="Publish mess"
              />
              <Button
                // onPress={claimMess}
                title="Create Event"
              />
            </View>
          </View>
        );
      default:
        return (<> </>);
    }
  }

  return (
    <SafeAreaView style={CreateMess.mainContainer}>
      <ScrollView>
        <View>
          {currentScreen()}
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default CreateMessScreen;
