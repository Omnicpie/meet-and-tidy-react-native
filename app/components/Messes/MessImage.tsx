import React, { useState, useEffect } from 'react';
import { Button, Image, Platform, SafeAreaView, Text } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import Messes from '../../assets/stylesheets/Messes';

// import Request from './request';

export default function MessImage({
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

  return (
    <SafeAreaView>
      <ScrollView>
        <ProgressBar style={Messes.progressBar} progress={0.6} color={Colors.green500} />
        <Text style={Messes.centeredText} >3 of 5</Text>
        <Text style={Messes.primaryHeading}>Upload a mess image</Text>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {imageSelect && <Image source={{ uri: imageSelect }} style={Messes.imageSelected} />}
      </ScrollView>
    </SafeAreaView>
  );
}
