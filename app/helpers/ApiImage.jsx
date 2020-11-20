import React, { useEffect, useState } from 'react';
import {
  StyleSheet, ActivityIndicator, SafeAreaView, Text, View, Button, Image
} from 'react-native';

import Request from './Request';
import logo from '../assets/images/logo.png';

export default function EventImage({eventId} = props) {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    new Request('GET', 'http://localhost:1337/images/uploads/new_event_1_1605873222416.jpeg').make()
      .then((json) => {
        setData(json);
        console.log(json);
        //console.log(`http://localhost:1337/images/uploads/${imageFileName}.jpeg`);
      })
      .catch((error) => console.error("EEERRROR", error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View>
      {isLoading ? <ActivityIndicator /> : (
        <View>
          <View>
            <Text>HELLO</Text>
            <Image source={logo} style={styles.logo} />
            <Image
              style={styles.tinyLogo}
              source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}
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
    width: 300,
  },
  logo: {
    height: 200,
    width: 300,
  },
});
