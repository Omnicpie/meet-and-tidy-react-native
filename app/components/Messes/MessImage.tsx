import React, { useEffect, ReactElement } from 'react';
import {
  Text, Image, Button, Platform, SafeAreaView, View,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import NextPreviousButtons from '../NextPreviousButtons';
import Events from '../../assets/stylesheets/Events';
import Main from '../../assets/stylesheets/Main';

export default function EventImage({
  image, onChangeImage, onChangeImagePreview, onNext, onPrevious,
} = props): ReactElement {
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

    if (!result.cancelled) {
      onChangeImage(result.base64);
    }
  };

  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.833} color={Colors.green500} />
        <Text style={Events.centeredText}>5 of 6</Text>
        <View>
          <Text style={Events.primaryHeading}>Upload a mess image</Text>
          <Text style={Main.tellUsMore}>Upload an image so the mess is easier to spot!</Text>
        </View>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image !== '' && <Image source={{ uri: `data:image/jpeg;base64,${image}` }} style={Events.imageSelected} />}
        <NextPreviousButtons onPrevious={onPrevious} onNext={onNext} />
      </ScrollView>
    </SafeAreaView>
  );
}
