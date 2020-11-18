import React, { useEffect, useState } from 'react';
import {
  StyleSheet, ActivityIndicator, SafeAreaView, Text, View,
} from 'react-native';
import Request from '../helpers/Request';

function EventScreen(props) {
  const eventId = props.route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    new Request('GET', `http://localhost:1337/events/${eventId}`).make()
      .then((response) => response.json())
      .then((json) => {
        setData(json[0]);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <SafeAreaView style={styles.eventContainer}>
      {isLoading ? <ActivityIndicator /> : (
        <View>
          <Text style={styles.primaryHeading}>{data.title}</Text>
          <Text style={styles.paragraph}>{data.description}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default EventScreen;

const styles = StyleSheet.create({
  eventContainer: {
    flex: 1,
    backgroundColor: '#fff',

  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 20,
  },
  paragraph: {
    textAlign: 'center',
    width: '100%',
  },
});
