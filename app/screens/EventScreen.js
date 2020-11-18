import React, { useEffect, useState } from 'react';
import {
  StyleSheet, ActivityIndicator, SafeAreaView, Text, View
} from 'react-native';
import Request from '../helpers/Request';
// import BottomNavBar from '../components/BottomNavBar';

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
          <View>
            <Text style={styles.tile}>Image</Text>
          </View>
          <View>
            <Text style={styles.primaryHeading}>{data.title}</Text>
            <Text style={styles.secondaryHeading}>{data.eventType}</Text>
          </View>
          <View>
            <Text style={styles.subheading}>Date:</Text>
            <Text style={styles.paragraph}>{data.date}</Text>
          </View>
          <View>
            <Text style={styles.subheading}>Facilities available:</Text>
            <Text style={styles.paragraph}>{data.facilityType}</Text>
          </View>
          <View>
            <Text style={styles.subheading}>Description:</Text>
            <Text style={styles.paragraph}>{data.description}</Text>
          </View>
          {/* <BottomNavBar navigation={navigation} /> */}
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
    fontSize: 23,
    paddingTop: 10
  },
  secondaryHeading: {
    textAlign: 'center',
    width: '100%',
    paddingLeft: 15,
  },
  paragraph: {
    textAlign: 'left',
    width: '100%',
    paddingLeft: 15,
  },
  subheading: {
    textAlign: 'left',
    width: '100%',
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 15,
  },
  tile: {
    width: '100%',
    height: 150,
    backgroundColor: 'rgb(84, 174, 51)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
