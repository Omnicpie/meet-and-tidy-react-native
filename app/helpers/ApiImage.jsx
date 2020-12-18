import React, { useEffect, useState } from 'react';
import {
  StyleSheet, ActivityIndicator, View, Image,
} from 'react-native';
import Request from './Request';

export default function EventImage({eventId} = props) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    new Request('GET', 'http://localhost:1337/images/uploads/new_event_1_1605873222416.jpeg').make()
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error('ERROR', error))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <View>
      {isLoading ? <ActivityIndicator /> : (
        <View>
          <View>
            <Image
              style={styles.eventImage}
              source={{ uri: data.url }}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  eventImage: {
    height: 200,
    width: '100%',
  },
  logo: {
    height: 200,
    width: 300,
  },
});
