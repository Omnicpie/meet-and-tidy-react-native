import React, { useState } from 'react';
import {
  View, StyleSheet, SafeAreaView, Button,
} from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import FlagLocation from '../components/Flags/FlagLocation';
import FlagType from '../components/Flags/FlagType';
import FlagDescription from '../components/Flags/FlagDescription';
import FlagImage from '../components/Flags/FlagImage';
import FlagPreview from '../components/Flags/FlagPreview';
import Request from '../helpers/Request';

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

    new Request('POST', 'http://localhost:1337/flags/').make(flag);
  }

  function onNext() {
    setScreen(screen + 1);
  }

  function currentScreen() {
    switch (screen) {
      case 1:
        return (
          <FlagLocation
            location={location}
            onChangeLocation={onChangeLocation}
            onNext={onNext}
          />
        );
      case 2:
        return (
          <View>
            <FlagType
              flagType={flagType}
              onChangeFlagType={onChangeFlagType}
              onNext={onNext}
            />
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
            <Button
              onPress={saveFlag}
              title="Save"
            />
          </View>
        );
      default:
        return (<> </>);
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

export default CreateFlagScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
});
