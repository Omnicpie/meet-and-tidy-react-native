import React, { ReactElement } from 'react';
import {
  ActivityIndicator, FlatList, Pressable, Text, View,
} from 'react-native';
import { gql, useQuery } from '@apollo/client';
import ApiImage from '../helpers/ApiImage';
import { dayOfMonth, shortMonthName } from '../helpers/DateHelpers';
import Main from '../assets/stylesheets/Main';

import { ApiEvent } from '../../ApiTypes';
import ErrorPanel from './ErrorPanel';

type PopularEventScrollProps = {
  navigation: any;
};

const POPULAR_EVENTS_QUERY = gql`
  query PopularEvents {
    events {
      id
      title
      description
      startsOn
      imageUrls
    }
  }
`;

export default function PopularEventScroll({ navigation }: PopularEventScrollProps): ReactElement {
  const {
    data, error, loading, refetch,
  } = useQuery(POPULAR_EVENTS_QUERY);

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
    <View style={Main.popularEventsContainer}>
      <Text style={Main.popularEventsTitle}>Popular events</Text>
      <View>
        <FlatList<ApiEvent>
          data={data.events}
          horizontal
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate('Event', { id: item.id })}>
              <View style={Main.popularEventsTile}>
                {firstImage(item)}
                <View style={Main.popularEventsTileLower}>
                  <View style={Main.popularEventsTileLeft}>
                    <Text style={Main.date}>{dayOfMonth(item.startsOn)}</Text>
                    <Text style={Main.month}>{shortMonthName(item.startsOn)}</Text>
                  </View>
                  <View style={Main.popularEventsTileRight}>
                    <Text style={Main.eventTitle}>
                      {item.title}
                    </Text>
                    <Text style={Main.eventDescription} numberOfLines={1}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}
