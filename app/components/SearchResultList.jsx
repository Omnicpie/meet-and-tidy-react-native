import React, { useEffect, useState } from 'react';
import {
  StyleSheet, ActivityIndicator, FlatList, Text, View, ScrollView, SafeAreaView,
} from 'react-native';
import Request from '../helpers/Request';

export default function SearchResultList({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    new Request('GET', 'http://192.168.0.6:1337/events/').make()
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.resultsContainer}>

      <ScrollView style={styles.resultList}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            verticle
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <Text
                onPress={() => navigation.navigate('Event', item.id)}
                style={styles.tile}
              >
                {item.title}
                ,
                {item.description}
                ,
                {item.image}
              </Text>
            )}
          />
        )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    width: '100',
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
    width: '100',
    height: 150,
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: '#54AE33',
  },
});
