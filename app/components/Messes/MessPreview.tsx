import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Messes from '../../assets/stylesheets/Messes';
import { ScrollView } from 'react-native-gesture-handler';

export default function MessPreview({
  location, name, description, messType, image,
} = props) {
  return (
    <SafeAreaView style={Messes.mainContainer}>
      <ScrollView>
        <ProgressBar style={Messes.progressBar} progress={1} color={Colors.green500} />
        <Text style={Messes.centeredText}>5 of 5</Text>
        <Text style={Messes.previewHeading}>Preview mess</Text>
        <Image source={{ uri: image }} style={Messes.imageSelected} />
        <Text style={Messes.previewHeading}>{name}</Text>
        <Text style={Messes.secondaryHeading}>{messType}</Text>
        <View>
          <Text style={Messes.subheading}>Description</Text>
          <Text style={Messes.paragraph}>{description}</Text>
        </View>
        <View>
          <Text style={Messes.subheading}>Location</Text>
          <Text style={Messes.infoTile}>{location}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
