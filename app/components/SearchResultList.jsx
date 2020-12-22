import React, { useEffect, useState } from 'react';
import {
  StyleSheet, ActivityIndicator, FlatList, Text, View, ScrollView, SafeAreaView,
} from 'react-native';
import Request from '../helpers/Request';

export default function SearchResultList({ navigation, props}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // const searchQuery = props.route.params;
  console.log(props)

  useEffect(() => {
    new Request('GET', 'http://192.168.0.7:1337/event-search/bu').make()
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
              <View >
                <Text style={styles.subHeading}>
                  {item.title}
                </Text>
                <Text style={styles.paragraph}>
                  {item.description}
                </Text>
                <Text style={styles.tile} onPress ={() => navigation.navigate('Event', item.id)} >
                  {item.image}
                </Text>
              </View>
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
    width: '100%',
    backgroundColor: '#fff',
  },
  subHeading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  paragraph: {
    width: '85%',
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 5,
  },
  tile: {
    width: '85%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#54AE33',
  },
});
