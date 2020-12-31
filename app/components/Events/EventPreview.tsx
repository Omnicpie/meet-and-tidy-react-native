import React, { ReactElement } from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressBar, Colors } from 'react-native-paper';
import Events from '../../assets/stylesheets/Events';
// Preview event before saving

export default function EventPreview({
  location, title, description, url, eventType, image, date, facilityType,
} = props): ReactElement {
  return (
    <SafeAreaView>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={1} color={Colors.green500} />
        <Text style={Events.centeredText}>8 of 8</Text>
        <Text style={Events.previewHeading}>Preview event</Text>
        {image !== '' && <Image source={{ uri: `data:image/jpeg;base64,${image}` }} style={Events.imageSelected} />}
        <Text style={Events.primaryHeading}>{title}</Text>
        <Text style={Events.centeredText}>{eventType}</Text>
        <View>
          <Text style={Events.subheading}>Date</Text>
          <Text style={Events.paragraph}>{date}</Text>
        </View>
        <View>
          <Text style={Events.subheading}>Facilities</Text>
          <Text style={Events.paragraph}>{facilityType}</Text>
        </View>
        <View>
          <Text style={Events.subheading}>Description</Text>
          <Text style={Events.paragraph}>{description}</Text>
          <Text style={Events.subheading}>Event URL</Text>
          <Text style={Events.paragraph}>{url}</Text>
        </View>
        <View>
          <Text style={Events.subheading}>Location</Text>
          <Text style={Events.mapPreviewTile}>{location}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
