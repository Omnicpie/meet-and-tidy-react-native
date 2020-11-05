import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View, ScrollView, SafeAreaView} from 'react-native';
import Request from '../assets/request'

export default function PopularEventScroll() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    new Request("GET", "http://localhost:1337/events/").make()
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
          {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.description}</Text>
          )}
        />
      )}
      <Text style={styles.subHeading}>Popular events</Text>
      <ScrollView style={styles.popScroll} horizontal>
          <View style={styles.tile} />
          <View style={styles.tile} />
          <View style={styles.tile} />
          <View style={styles.tile} />
          <View style={styles.tile} />
      </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeading: {
    color: 'black', 
    fontSize: 20,
    fontWeight: 'bold'
  },
  scrollContainer: {
    paddingTop: 40,
    padding: 10
  },
  popScroll: {
    paddingTop: 20
  },
  tile: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'rgb(84, 174, 51)' ,
  },
});
