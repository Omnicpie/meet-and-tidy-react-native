import React, { useEffect, useState } from 'react';
import {
  StyleSheet, ActivityIndicator, View, Image,
} from 'react-native';
import Request from './Request';

import { ApiEventImage } from '../../ApiTypes';

type EventImageProps = {
  eventId: number,
  eventImage: ApiEventImage
};

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

export default function EventImage({eventId, eventImage}: EventImageProps): JSX.Element {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const imageUrl = eventImage.fileName;
  useEffect(() => {
    new Request('GET', `/images/uploads/${imageUrl}.jpg`).make()
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
