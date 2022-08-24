import React from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View, Pressable } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import ApiImage from '../helpers/ApiImage';
import { dayOfMonth, shortMonthName } from '../helpers/DateHelpers';
import Main from '../assets/stylesheets/Main';
import ErrorPanel from './ErrorPanel';

const SEARCH_QUERY = gql`
  query SearchQuery($query: String!) {
    searchEvents(query: $query) {
      id
      description
      startsAt
      title
      imageUrls
    }
  }
`;

export default function SearchResultList({ navigation, route }) {
  const { query } = route.params;

  const { data, error, loading, refetch } = useQuery(SEARCH_QUERY, { variables: { query } });

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
    <View style={styles.container}>
      <FlatList
        data={data.searchEvents}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('Event', { id: item.id })}>
            {firstImage(item)}
            <View style={styles.tileLower}>
              <View style={styles.tileLeft}>
                <Text style={Main.date}>{dayOfMonth(item.startsAt)}</Text>
                <Text style={Main.month}>{shortMonthName(item.startsAt)}</Text>
              </View>
              <View style={styles.tileRight}>
                <Text style={styles.eventTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.eventDescription} numberOfLines={2}>
                  {item.description}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 100,
  },
  date: {
    fontSize: 20,
    color: '#000',
    textAlign: 'left',
    marginLeft: 10,
  },
  month: {
    fontSize: 16,
    color: '#54ae33',
    textAlign: 'left',
    marginLeft: 10,
  },
  eventDescription: {
    fontWeight: '500',
    color: '#555',
  },
  eventTitle: {
    fontSize: 20,
  },
  subHeading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingTop: 10,
  },
  tileLeft: {
    width: '25%',
  },
  tileLower: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tileRight: {
    width: '70%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
