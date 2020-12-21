import React from 'react';
import { Text, SafeAreaView, Image, View } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Flags from '../../assets/stylesheets/Flags';
import { ScrollView } from 'react-native-gesture-handler';

// Preview flag before saving

export default function FlagPreview({
  location, title, description, flagType, image,
} = props) {
  return (
    <SafeAreaView style={Flags.mainContainer}>
      <ScrollView>
        <ProgressBar style={Flags.progressBar} progress={1} color={Colors.green500} />
        <Text style={Flags.centeredText}>5 of 5</Text>
        <Text style={Flags.previewHeading}>Preview flag</Text>
        <Image source={{ uri: image }} style={Flags.imageSelected} />
        <Text style={Flags.previewHeading}>{title}</Text>
        <Text style={Flags.secondaryHeading}>{flagType}</Text>
        <View>
          <Text style={Flags.subheading}>Description</Text>
          <Text style={Flags.paragraph}>{description}</Text>
        </View>
        <View>
          <Text style={Flags.subheading}>Location</Text>
          <Text style={Flags.infoTile}>{location}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
