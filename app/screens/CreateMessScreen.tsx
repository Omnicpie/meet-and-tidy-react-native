import React, { ReactElement, useState } from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import BottomNavBar from '../components/BottomNavBar';
import MessLocation from '../components/Messes/MessLocation';
import MessType from '../components/Messes/MessType';
import MessTitle from '../components/Messes/MessTitle';
import MessImage from '../components/Messes/MessImage';
import MessDescription from '../components/Messes/MessDescription';
import MessPreview from '../components/Messes/MessPreview';
import Request from '../helpers/Request';
import Events from '../assets/stylesheets/Events';

type CreateMessScreenProps = {
  navigation: any;
};

function CreateMessScreen({ navigation }: CreateMessScreenProps): ReactElement {
  const [location, onChangeLocation] = useState('');
  const [messType, onChangeMessType] = useState('');
  const [image, onChangeImage] = useState('');
  const [imagePreview, onChangeImagePreview] = useState('');
  const [title, onChangeTitle] = useState('');
  const [description, onChangeDescription] = useState('');
  const [screen, setScreen] = useState(1);

  async function saveMess() {
    const mess = {
      title,
      description,
      location,
      messType,
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
            <View style={Events.buttonContainer}>
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
              messType={messType}
              onChangeMessType={onChangeMessType}
              onNext={onNext}
            />
            <View style={Events.buttonContainer}>
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
            <View>
              <MessImage
                image={image}
                onChangeImage={onChangeImage}
                onChangeImagePreview={onChangeImagePreview}
                onNext={onNext}
                onPrevious={onPrevious}
              />
            </View>
            <View style={Events.buttonContainer}>
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
          <View>
            <MessTitle
              title={title}
              onChangeTitle={onChangeTitle}
              onNext={onNext}
              onPrevious={onPrevious}
              location={location}
              messType={messType}
            />
          </View>
          <View style={Events.buttonContainer}>
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
            <MessDescription
              description={description}
              onChangeDescription={onChangeDescription}
              onNext={onNext}
            />
            <View style={Events.buttonContainer}>
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
      case 6:
        return (
          <View>
            <MessPreview
              description={description}
              location={location}
              messTypes={messType}
              image={image}
            />
            <View style={Events.buttonContainer}>
              <Button
                onPress={onPrevious}
                title="Previous"
              />
            </View>
            <View style={Events.buttonContainer}>
              <Button
                onPress={saveMess}
                title="Publish"
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

  console.log('saveMess')

  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        {currentScreen()}
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default CreateMessScreen;
