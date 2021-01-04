import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View } from 'react-native';
import Request from '../helpers/Request';
import ApiImage from '../helpers/ApiImage';
import { dayOfMonth, shortMonthName } from '../helpers/DateHelpers';

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

type SearchResultListProps = {
  navigation: any;
  route: any;
};

export default function SearchResultList({ navigation, route }: SearchResultListProps): ReactElement {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const searchQuery = route.params;

  useEffect(() => {
    new Request('GET', `/event-search/${searchQuery}`).make()
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.warn(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <View onPress ={() => navigation.navigate('Event', item.id)}>
                <ApiImage eventId={item.id} eventImage={item.image} />
                <View style={styles.tileLower}>
                  <View style={styles.tileLeft}>
                    <Text style={styles.date}>{dayOfMonth(item.startsOn)}</Text>
                    <Text style={styles.month}>{shortMonthName(item.startsOn)}</Text>
                  </View>
                  <View style={styles.tileRight}>
                    <Text style={styles.eventTitle}>
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
