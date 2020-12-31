import React, { ReactElement, useEffect, useState } from 'react';
import {
  StyleSheet, ActivityIndicator, FlatList, Text, View,
} from 'react-native';
import Request from '../helpers/Request';
import ApiImage from '../helpers/ApiImage';
import { dayOfMonth, shortMonthName } from '../helpers/DateHelpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 100,
    height: 300,
  },
  date: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  month: {
    fontSize: 16,
    color: '#54ae33',
    textAlign: 'center',

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
  tile: {
    width: 250,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#efefef',
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

export default function PopularEventScroll({ navigation }): ReactElement {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    new Request('GET', '/events/').make()
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular events</Text>
      <View>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            horizontal
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <View style={styles.tile}>
                <ApiImage eventId={item.id} eventImage={item.image} />
                <View style={styles.tileLower}>
                  <View style={styles.tileLeft}>
                    <Text style={styles.date}>{dayOfMonth(item.startsOn)}</Text>
                    <Text style={styles.month}>{shortMonthName(item.startsOn)}</Text>
                  </View>
                  <View style={styles.tileRight}>
                    <Text
                      style={styles.eventTitle}
                      onPress={() => navigation.navigate('Event', item.id)}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={styles.eventDescription}
                      numberOfLines={1}
                    >
                      {item.description}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}
