import React, { useEffect, useState } from 'react';
import {
  StyleSheet, ActivityIndicator, FlatList, Text, View, ScrollView,
} from 'react-native';
import Request from '../helpers/Request';

export default function PopularEventScroll({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    new Request('GET', 'http://localhost:1337/events/').make()
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.scrollContainer}>

      <Text style={styles.subHeading}>Popular events</Text>
      <ScrollView style={styles.popScroll}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            horizontal
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <Text
                onPress={() => navigation.navigate('Event', item.id)}
                style={styles.tile}
              >
                {item.title}
                ,
                {item.description}
              </Text>
            )}
          />
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    width: '95%',
    backgroundColor: '#fff',
  },
  subHeading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingTop: 10,
  },
  tile: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: '#54ae33',
  },
});
