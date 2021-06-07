import React, { ReactElement } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Events from '../../assets/stylesheets/Events';
import { ScrollView } from 'react-native-gesture-handler';

type MessPreviewProps = {
  location: string;
  name: string;
  description: string;
  image: string;
  messType: string;
};

export default function MessPreview({
  location, name, description, messType, image,
}: MessPreviewProps): ReactElement {
  return (
    <SafeAreaView style={Events.mainContainer}>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={1} color={Colors.green500} />
        <Text style={Events.centeredText}>6 of 6</Text>
        <Text style={Events.previewHeading}>Preview mess</Text>
        <Image source={{ uri: image }} style={Events.imageSelected} />
        <Text style={Events.previewHeading}>{name}</Text>
        <Text style={Events.secondaryHeading}>{messType}</Text>
        <View>
          <Text style={Events.subheading}>Description</Text>
          <Text style={Events.paragraph}>{description}</Text>
        </View>
        <View>
          <Text style={Events.subheading}>Location</Text>
          <Text style={Events.infoTile}>{location}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
