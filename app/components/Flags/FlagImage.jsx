import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import Flags from '../../assets/stylesheets/Flags';
import { ScrollView } from 'react-native-gesture-handler';

// import Request from './request';

export default function FlagImage({
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
        <ProgressBar style={Flags.progressBar} progress={0.6} color={Colors.green500} />
        <Text style={Flags.centeredText} >3 of 5</Text>
        <Text style={Flags.primaryHeading}>Upload an event image</Text>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {/* {imageSelect && <Image source={{ uri: imageSelect }} style={Flags.imageSelected} />} */}
      </ScrollView>
    </SafeAreaView>
  );
}
