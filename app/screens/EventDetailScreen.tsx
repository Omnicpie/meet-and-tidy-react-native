import React, { ReactElement, useEffect, useState } from 'react';
import {
  ActivityIndicator, SafeAreaView, Text, View, ScrollView, Pressable, Linking,
} from 'react-native';
import { gql, useQuery } from '@apollo/client';
import ApiImage from '../helpers/ApiImage';
import Events from '../assets/stylesheets/Events';
import ErrorPanel from '../components/ErrorPanel';
import { ApiEvent } from '../../ApiTypes';
import AttendButton from '../components/AttendButton';

type EventDetailScreenProps = {
  navigation: any;
  route: any;
}

const EVENT_QUERY = gql`
  query Event($id: ID!) {
    event(id: $id) {
      id
      title
      description
      startsAt
      imageUrls
      url
    }
  }
`;

function EventDetailScreen({ navigation, route } : EventDetailScreenProps): ReactElement {
  const { id } = route.params;
  const {
    data, error, loading, refetch,
  } = useQuery(EVENT_QUERY, { variables: { id } });

  const [attend, setAttend] = useState<boolean>(false);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />;
  }

  function firstImage(event: ApiEvent) {
    if (event.imageUrls.length) {
      return <ApiImage imageUrl={event.imageUrls[0]} />;
    }
    return null;
  }

  const { event } = data;

  return (
    <SafeAreaView style={Events.container}>
      <ScrollView>
        <View>
          <View>
            {firstImage(event)}
            <View>
              <Pressable onPress={() => navigation.navigate('Registration')}>
                <AttendButton
                  attend={attend}
                  setAttend={setAttend}
                />
              </Pressable>
            </View>
          </View>
          <View>
            <Text style={Events.detailPrimaryHeading}>{event.title}</Text>
            <Text style={Events.detailSecondaryHeading}>{event.eventType}</Text>
          </View>
          <View>
            <Text style={Events.description}>{event.description}</Text>
          </View>
          <View>
            <Text style={Events.subheading}>
              Date:
              {event.startsAt}
            </Text>
          </View>
          <View>
            <Text style={Events.subheading}>Facilities available</Text>
            <Text style={Events.paragraph}>{event.facilityType}</Text>
          </View>
          <View>
            <Text style={Events.subheading}>Event URL</Text>
            <Pressable onPress={() => Linking.openURL(event.url)}>
              <View>
                <Text style={Events.paragraph}>{event.url}</Text>
              </View>
            </Pressable>
          </View>
          <View>
            <Text style={Events.subheading}>Location</Text>
            <Text style={Events.infoTile}>{event.location}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EventDetailScreen;
