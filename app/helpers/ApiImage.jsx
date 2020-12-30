import React, { useEffect, useState } from 'react';
import {
  StyleSheet, ActivityIndicator, View, Image,
} from 'react-native';
import Request from './Request';

export default function EventImage({eventId, eventImage} = props) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const imageUrl = eventImage[0].fileName;
  useEffect(() => {
    new Request('GET', `http://192.168.0.7:1337/images/uploads/${imageUrl}.jpg`).make()
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
              style={styles.image}
              source={{ uri: data.url }}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
  },
  logo: {
    height: 200,
    width: 300,
  },
});
