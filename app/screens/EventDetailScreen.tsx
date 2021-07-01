import React, { ReactElement, useEffect, useState } from 'react';
import {
  ActivityIndicator, SafeAreaView, Text, View, ScrollView, Pressable, Linking,
} from 'react-native';
import { ApolloError, gql, useQuery, useMutation } from '@apollo/client';
import ApiImage from '../helpers/ApiImage';
import Events from '../assets/stylesheets/Events';
import ErrorPanel from '../components/ErrorPanel';
import { ApiAttendance, ApiEvent, ApiUser } from '../../ApiTypes';
import AttendButton from '../components/AttendButton';

import store from '../redux/Store';
import { setUser } from '../redux/slices/UserSlice';

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
      attendances {
        eventId
        userId
      }
    }
  }
`;

function EventDetailScreen(
  { navigation, route }: EventDetailScreenProps,
): ReactElement {
  const { id } = route.params;
  const {
    data, error, loading, refetch,
  } = useQuery(EVENT_QUERY, { variables: { id } });

  const { event } = data;

  const CREATE_ATTEND = gql`
  mutation CreateAttend($userId: ID!, $eventId: ID!) {
    createAttend(userId: $userId, eventId: $eventId) {
      errors
    }
  }
`;

  const responses = {
    onCompleted(data: any) {
      console.log(data);
      if (data.createAttend.errors.length) {
        console.log('completed with errors');
        console.log(data.createAttend.errors);
      } else {
        console.log('completed without errors');
      }
    },
    onError(_error: ApolloError) {
      console.log(_error);
    },
  };

  const [createAttend, _attendResult] = useMutation(CREATE_ATTEND, responses);

  const [attend, setAttend] = useState<boolean>(false);

  const [currentUser, setCurrentUser] = useState<ApiUser | null>(store.getState().value);

  if (currentUser !== null) {
    console.log('current user is: ', currentUser);
    console.log(data);
  }

  store.subscribe(() => {
    setCurrentUser(store.getState().value);
  });

  const addAttend = () => {
    if (currentUser !== null) {
      createAttend({
        variables: {
          userId: currentUser.id, eventId: event.id,
        },
      })
      refetch();
    } else {
      console.log('failed')
    }
  };

  const attending = (): boolean => currentUser !== null
    && data.event.attendances.some(
      (attendance: ApiAttendance) => attendance.userId == currentUser.id,
    );

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

  return (
    <SafeAreaView style={Events.container}>
      <ScrollView>
        <View>
          <View>
            {firstImage(event)}
            <View>
              <Pressable onPress={() => navigation.navigate('Registration')}>
                <AttendButton
                  attending={attending()}
                  addAttending={addAttend}
                  setAttending={setAttend}
                />
              </Pressable>
              <Pressable onPress={() => store.dispatch(setUser({ id: 2, name: 'Beth', email: 'beth@example.com' }))}>
                <Text>Yo!</Text>
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
