import React from 'react';
import { Text, SafeAreaView, View, ScrollView} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Flags from '../../assets/stylesheets/Flags';

// Preview flag before saving

export default function FlagPreview({
  location, title, description, flagType, image, date,
} = props) {
  return (
    <SafeAreaView style={Flags.flagContainer}>
      <ScrollView>
        <ProgressBar style={Flags.progressBar} progress={1} color={Colors.green500} />
        <Text style={Flags.centeredText}>5 of 5</Text>
        <Text style={Flags.previewHeading}>Preview flag</Text>
        {/* <Image source={{ uri: image }} style={Events.imageSelected} /> */}
        <Text style={Flags.primaryHeading}>{title}</Text>
        <Text style={Flags.secondaryHeading}>{flagType}</Text>
        <View>
          <Text style={Flags.subheading}>Date</Text>
          <Text style={Flags.paragraph}>{date}</Text>
        </View>
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
