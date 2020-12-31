import React, { useState, useEffect } from 'react';
import {
  Text, Image, Button, Platform, SafeAreaView
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import NextPreviousButtons from './NextPreviousButtons';
import Events from '../../assets/stylesheets/Events';

export default function EventImage({ onChangeImage, onChangeImagePreview, onNext, onPrevious } = props) {
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
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      base64: true,
      aspect: [4, 3],
      quality: 1,
    });
    onChangeImage(result.base64);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  console.warn(imageSelect);
  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.875} color={Colors.green500} />
        <Text style={Events.centeredText}>7 of 8</Text>
        <Text style={Events.primaryHeading}>Upload an event image</Text>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {imageSelect && <Image source={{ uri: imageSelect }} style={Events.imageSelected} />}
        <NextPreviousButtons onPrevious={onPrevious} onNext={onNext} />
      </ScrollView>
    </SafeAreaView>
  );
}