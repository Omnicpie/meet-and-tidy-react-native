import React, { useState, useEffect } from 'react';
import { Text, Image, Button, Platform, SafeAreaView } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import Events from '../../assets/stylesheets/Events';
import { ScrollView } from 'react-native-gesture-handler';

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
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.875} color={Colors.green500} />
        <Text style={Events.centeredText}>7 of 8</Text>
        <Text style={Events.primaryHeading}>Upload an event image</Text>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {imageSelect && <Image source={{ uri: imageSelect }} style={Events.imageSelected} />}
      </ScrollView>
    </SafeAreaView>
  );
}
