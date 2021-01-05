import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Image } from 'react-native';
import Request from './Request';
import Main from '../assets/stylesheets/Main';

export default function EventImage({eventId, eventImage} = props) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const imageUrl = eventImage[0].fileName;
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
              style={Main.apiImage}
              source={{ uri: data.url }}
            />
          </View>
        </View>
      )}
    </View>
  );
}
