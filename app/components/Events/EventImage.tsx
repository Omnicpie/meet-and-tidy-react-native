import React, { useEffect, ReactElement } from 'react';
import {
  Text, Image, Button, Platform, SafeAreaView, View
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import NextPreviousButtons from '../NextPreviousButtons';
import Events from '../../assets/stylesheets/Events';
import Main from '../../assets/stylesheets/Main';

export default function EventImage({
  image, onChangeImage, onChangeImagePreview, onNext, onPrevious
} = props): ReactElement {

  /* const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      base64: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(Object.keys(result));
      onChangeImage()
    }
  }; */

  /*"height",
  "uri",
  "base64",
  "type",
  "cancelled",
  "width",*/

  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={0.875} color={Colors.green500} />
        <Text style={Events.centeredText}>7 of 8</Text>
        <View>
          <Text style={Events.primaryHeading}>Upload a event image</Text>
          <Text style={Main.tellUsMore}>Upload an image for you event.</Text>
        </View>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image !== '' && <Image source={{ uri: `data:image/jpeg;base64,${image}` }} style={Events.imageSelected} />}
        <NextPreviousButtons onPrevious={onPrevious} onNext={onNext} />
      </ScrollView>
    </SafeAreaView>
  );
}
