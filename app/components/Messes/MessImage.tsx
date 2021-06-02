import React, { ReactElement, useState, useEffect } from 'react';
import { Button, Image, Platform, SafeAreaView, Text } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import Events from '../../assets/stylesheets/Events';

// import Request from './request';

type MessImageProps = {
  image: string;
  onChangeImage: (image: string) => void;
};

export default function MessImage({ image, onChangeImage }: MessImageProps): ReactElement {
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
        <ProgressBar style={Events.progressBar} progress={0.5} color={Colors.green500} />
        <Text style={Events.centeredText} >3 of 6</Text>
        <Text style={Events.primaryHeading}>Upload a mess image</Text>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {imageSelect && <Image source={{ uri: imageSelect }} style={Events.imageSelected} />}
      </ScrollView>
    </SafeAreaView>
  );
}
