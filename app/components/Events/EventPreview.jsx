import React from 'react';
import {
  StyleSheet, Text, View, Image, SafeAreaView, Button
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Events from '../../assets/stylesheets/Events';
// Preview event before saving

export default function EventPreview({
  location, title, description, eventType, image, date, facilityType, onPrevious
} = props) {
  return (
    <SafeAreaView style={Events.mainContainer}>
      <Text style={Events.previewHeading}>Preview event</Text>
        <Image source={{ uri: image }} style={Events.imageSelected} />
      <Text style={Events.primaryHeading}>{title}</Text>
      <Text style={Events.centeredText}>{eventType}</Text>
      <View>
        <Text style={Events.subheading}>Date:</Text>
        <Text style={Events.paragraph}>{date}</Text>
      </View>
      <View>
        <Text style={Events.subheading}>Facilities:</Text>
        <Text style={Events.paragraph}>{facilityType}</Text>
      </View>
      <View>
        <Text style={Events.subheading}>Description:</Text>
        <Text style={Events.paragraph}>{description}</Text>
      </View>
      <View>
        <Text style={Events.subheading}>Location:</Text>
        <Text style={Events.mapPreviewTile}>{location}</Text>
      </View>
      <ProgressBar style={Events.progressBar} progress={1} color={Colors.green500} />
      <Text>8 of 8</Text>
      <View style={Events.nextButton}>
        <Button
          onPress={onPrevious}
          title="Previous"
        />
      </View>
    </SafeAreaView>
  );
}
