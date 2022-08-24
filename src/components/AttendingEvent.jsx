import React from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import ApiImage from '../helpers/ApiImage';
import { dayOfMonth, shortMonthName } from '../helpers/DateHelpers';
import Main from '../assets/stylesheets/Main';
import ErrorPanel from './ErrorPanel';

const ATTEND_EVENT_QUERY = gql`
  query AttendEvents {
    events {
      id
      title
      description
      imageUrls
      startsAt
      url
    }
  }
`;

export default function AttendEventList({ navigation }) {
  const { data, error, loading, refetch } = useQuery(ATTEND_EVENT_QUERY);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />;
  }

  function firstImage(event) {
    if (event.imageUrls.length) {
      return <ApiImage imageUrl={event.imageUrls[0]} />;
    }
    return null;
  }

  return (
    <View style={Main.attendingScrollerContainer}>
      <View>
        <FlatList
          data={data.events}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate('Event', { id: item.id })}>
              <View style={Main.attendingScrollerTile}>
                {firstImage(item)}
                <View style={Main.attendingScrollerTileLower}>
                  <View style={Main.attendingScrollerTileLeft}>
                    <Text style={Main.date}>{dayOfMonth(item.startsAt)}</Text>
                    <Text style={Main.month}>{shortMonthName(item.startsAt)}</Text>
                  </View>
                  <View style={Main.attendingScrollerTileRight}>
                    <Text style={Main.eventTitle} numberOfLines={2}>
                      {item.title}
                    </Text>
                    <Text style={Main.eventOrMessDescription} numberOfLines={1}>
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
