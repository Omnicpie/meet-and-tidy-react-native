import React, { useEffect, useState } from 'react';
import {
  StyleSheet, ActivityIndicator, SafeAreaView, Text, View, Button
} from 'react-native';
import Request from '../helpers/Request';
import BottomNavBar from '../components/BottomNavBar';

function EventDetailScreen(props) {
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
            <Text style={styles.topTile}>Image</Text>
            <Button
              title="Attend"
              mode="contained"
            />
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
          <View>
            <Text style={styles.subheading}>Images:</Text>
            <Text style={styles.infoTile}>{data.image}</Text>
          </View>
          <View>
            <Text style={styles.subheading}>Location:</Text>
            <Text style={styles.infoTile}>{data.location}</Text>
          </View>
          <BottomNavBar navigation={navigation} />
        </View>
      )}
    </SafeAreaView>
  );
}

export default EventDetailScreen;

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
  topTile: {
    width: '100%',
    height: 150,
    backgroundColor: 'rgb(84, 174, 51)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  infoTile: {
    width: '85',
    height: 150,
    backgroundColor: 'rgb(84, 174, 51)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
  },
});
