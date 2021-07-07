import React, { ReactElement } from 'react';
import {
  Text, View, Image, SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ProgressBar, Colors } from 'react-native-paper';
import { ApiEventType, ApiFacility } from '../../../ApiTypes';
import Events from '../../assets/stylesheets/Events';
import Main from '../../assets/stylesheets/Main';
import {
  dayOfMonth, shortMonthName, fullYear,
} from '../../helpers/DateHelpers';

// Preview event before saving

type EventPreviewProps = {
  location: string,
  title: string,
  description: string,
  url: string,
  eventType: ApiEventType,
  image: string,
  date: string,
  facilities: ApiFacility,
}

export default function EventPreview({
  location, title, description, url, eventType, image, date, facilities,
}: EventPreviewProps): ReactElement {
  return (
    <SafeAreaView>
      <ScrollView>
        <ProgressBar style={Events.progressBar} progress={1} color={Colors.green500} />
        <Text style={Events.centeredText}>8 of 8</Text>
        <Text style={Events.previewHeading}>Preview event</Text>
        {image !== '' && <Image source={{ uri: `data:image/jpeg;base64,${image}` }} style={Events.imageSelected} />}
        <Text style={Events.primaryHeading}>{title}</Text>
        <Text style={Events.centeredText}>{eventType.name}</Text>
        <View>
          <Text style={Events.subheading}>Date</Text>
          <Text style={Events.paragraph}>
            {dayOfMonth(date)} {shortMonthName(date)} {fullYear(date)}
          </Text>
        </View>
        <View>
          <Text style={Events.subheading}>Facilities</Text>
          <Text style={Events.paragraph}>{facilities.name}</Text>
        </View>
        <View>
          <Text style={Events.subheading}>Description</Text>
          <Text style={Events.paragraph}>{description}</Text>
          <Text style={Events.subheading}>Event URL</Text>
          <Text style={Events.paragraph}>{url}</Text>
        </View>
        <View>
          <Text style={Events.subheading}>Location</Text>
          <Text style={Main.mapPreviewTile}>{location}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
