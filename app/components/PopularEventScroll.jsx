import React, { useEffect, useState } from 'react';
import {
  StyleSheet, ActivityIndicator, FlatList, Text, View, ScrollView,
} from 'react-native';
import Request from '../helpers/Request';
import ApiImage from '../helpers/ApiImage';

export default function PopularEventScroll({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    new Request('GET', 'http://192.168.1.139:1337/events/').make()
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
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Popular events</Text>
      <View>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            horizontal
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <View style={styles.tile}>
                <ApiImage eventId={item.id} eventImage={item.image} />
                <Text
                  onPress={() => navigation.navigate('Event', item.id)}
                >
                  {item.title}
                </Text>
                <Text>
                  {item.description}
                </Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: '#fff',
    marginBottom: 100,
    height: 300,
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
    paddingHorizontal: 10,
  },
});
