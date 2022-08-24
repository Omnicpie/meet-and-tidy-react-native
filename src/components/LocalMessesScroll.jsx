import React from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import ApiImage from '../helpers/ApiImage';
import { dayOfMonth, shortMonthName } from '../helpers/DateHelpers';
import Main from '../assets/stylesheets/Main';
import ErrorPanel from './ErrorPanel';

const LOCAL_MESSES_QUERY = gql`
  query LocalMesses {
    messes {
      id
      title
      description
      location
      imageUrls
      createdAt
    }
  }
`;

export default function LocalMessesScroll({ navigation }) {
  const { data, error, loading, refetch } = useQuery(LOCAL_MESSES_QUERY);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <ErrorPanel message={error.message} reload={refetch} />;
  }

  function firstImage(mess) {
    if (mess.imageUrls.length) {
      return <ApiImage imageUrl={mess.imageUrls[0]} />;
    }
    return null;
  }

  return (
    <View style={Main.scrollerContainer}>
      <Text style={Main.scrollerTitle}>Local messes</Text>
      <View>
        <FlatList
          data={data.messes}
          horizontal
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate('Mess', { id: item.id })}>
              <View style={Main.scrollerTile}>
                <View>{firstImage(item)}</View>
                <View style={Main.scrollerTileLower}>
                  <View style={Main.scrollerTileLeft}>
                    <Text style={Main.date}>{dayOfMonth(item.createdAt)}</Text>
                    <Text style={Main.month}>{shortMonthName(item.createdAt)}</Text>
                  </View>
                  <View style={Main.scrollerTileRight}>
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
