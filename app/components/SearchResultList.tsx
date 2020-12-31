import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Request from '../helpers/Request';
import ApiImage from '../helpers/ApiImage';
import Events from '../assets/stylesheets/Events';

export default function SearchResultList({ navigation, route }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const searchQuery = props.route.params;

  useEffect(() => {
    new Request('GET', `/event-search/${searchQuery}`).make()
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
              <View style={styles.tile}>
                <ApiImage eventId={data.id} eventImage={data.image} />
                <View>
                  <Text style={styles.subHeading}>{item.title}</Text>
                  <Text style={Events.subHeading} numberOfLines={1}>{item.description}</Text>
                </View>
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
  paragraph: {
    width: '85%',
    marginLeft: 15,
    marginRight: 15,
    paddingBottom: 5,
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
    borderWidth: 1,
    borderColor: '#efefef',
  },
});
