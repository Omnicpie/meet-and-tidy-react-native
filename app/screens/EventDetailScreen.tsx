import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, ActivityIndicator, SafeAreaView, Text, View, Button, ScrollView } from 'react-native';
import Request from '../helpers/Request';
import ApiImage from '../helpers/ApiImage';
import Events from '../assets/stylesheets/Events';

function EventDetailScreen(props) {
  const eventId = props.route.params;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    new Request('GET', `http://localhost:1337/events/${eventId}`).make()
      .then((response) => response.json())
      .then((json) => {
        setData(json[0]);
        console.log(json[0].image[0].fileName);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <SafeAreaView style={Events.container}>
        <ScrollView>
        {isLoading ? <ActivityIndicator /> : (
          <View>
            <View>
              <ApiImage eventId={data.id}/>
              <Button
                title="Attend"
                mode="contained"
              />
            </View>
            <View>
              <Text style={Events.detailPrimaryHeading}>{data.title}</Text>
              <Text style={Events.detailSecondaryHeading}>{data.eventType}</Text>
            </View>
            <View>
              <Text style={Events.subheading}>Date:</Text>
              <Text style={Events.paragraph}>{data.date}</Text>
            </View>
            <View>
              <Text style={Events.subheading}>Facilities available:</Text>
              <Text style={Events.paragraph}>{data.facilityType}</Text>
            </View>
            <View>
              <Text style={Events.subheading}>Description:</Text>
              <Text style={Events.paragraph}>{data.description}</Text>
            </View>
            <View>
              <Text style={Events.subheading}>Images:</Text>
            </View>
            <View>
              <Text style={Events.subheading}>Location:</Text>
              <Text style={Events.infoTile}>{data.location}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default EventDetailScreen;
