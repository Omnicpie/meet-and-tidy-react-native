import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, Button, Platform,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import NextPreviousButtons from './NextPreviousButtons';
import Events from '../../assets/stylesheets/Events';

export default function EventImage({
  image, onChangeImage, onNext, onPrevious,
} = props) {
  const [imageSelect, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    onChangeImage(result.uri);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  // TODO call onChangeImage and make it equal to imageSelect
  return (
    <View style={Events.mainContainer}>
      <ProgressBar style={styles.progressBar} progress={0.875} color={Colors.green500} />
      <Text style={styles.centeredText}>7 of 8</Text>
      <Text style={styles.primaryHeading}>Upload an event image</Text>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {imageSelect && <Image source={{ uri: imageSelect }} style={styles.imageSelected} />}
      <NextPreviousButtons
        onNext={onNext}
        onPrevious={onPrevious}
      />
    </View>
  );
}

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
  primaryHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 50,
    marginBottom: 50,
  },
  centeredText: {
    textAlign: 'center',
    marginTop: 5,
  },
  imageSelected: {
    width: '100%',
    height: 200,
  },
});
