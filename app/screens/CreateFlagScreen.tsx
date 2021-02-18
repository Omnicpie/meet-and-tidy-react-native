import React, { useState } from 'react';
import { View, SafeAreaView, Button, ScrollView } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import FlagLocation from '../components/Flags/FlagLocation';
import FlagType from '../components/Flags/FlagType';
import FlagDescription from '../components/Flags/FlagDescription';
import FlagImage from '../components/Flags/FlagImage';
import FlagPreview from '../components/Flags/FlagPreview';
import Request from '../helpers/Request';
import CreateFlag from '../assets/stylesheets/CreateFlag';
import Flags from '../assets/stylesheets/Flags';

function CreateFlagScreen({ navigation }) {
  const [description, onChangeDescription] = useState('');
  const [location, onChangeLocation] = useState('');
  const [flagType, onChangeFlagType] = useState('');
  const [image, onChangeImage] = useState('');

  const [screen, setScreen] = useState(1);

  async function saveFlag() {
    const flag = {
      description,
      location,
      flagType,
      image,
    };

    new Request('POST', '/flags/').createEventOrFlag(flag);
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
            <FlagLocation
              location={location}
              onChangeLocation={onChangeLocation}
              onNext={onNext}
            />
            <View style={Flags.buttonContianer}>
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
            <FlagType
              flagType={flagType}
              onChangeFlagType={onChangeFlagType}
              onNext={onNext}
            />
            <View style={Flags.buttonContianer}>
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
            <FlagImage
              image={image}
              onChangeImage={onChangeImage}
              onNext={onNext}
            />
            <View style={Flags.buttonContianer}>
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
            <FlagDescription
              description={description}
              onChangeDescription={onChangeDescription}
              onNext={onNext}
            />
            <View style={Flags.buttonContianer}>
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
            <FlagPreview
              description={description}
              location={location}
              flagType={flagType}
              image={image}
            />
            <View style={Flags.buttonContianer}>
              <Button
                onPress={onPrevious}
                title="Previous"
              />
            </View>
            <View style={Flags.buttonContianer}>
              <Button
                onPress={saveFlag}
                title="Publish flag"
              />
              <Button
                // onPress={claimFlag}
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
    <SafeAreaView style={CreateFlag.mainContainer}>
      <ScrollView>
        <View>
          {currentScreen()}
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default CreateFlagScreen;
