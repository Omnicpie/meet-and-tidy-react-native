import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View, ScrollView, Pressable, Alert, Linking } from 'react-native';
import Request from '../helpers/Request';
import ApiImage from '../helpers/ApiImage';
import Events from '../assets/stylesheets/Events';

type EventDetailScreenProps = {
  navigation: any;
  route: any;
}

function EventDetailScreen(props : EventDetailScreenProps) {
  const eventId = props.route.params;

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const confirmRedirect = () => {
    Alert.alert(
      'Meet and Tidy affiliate link',
      'This link will take you to an affiliate / sponsored site. Doing so helps support Meet and Tidy!',
      [
        {
          text: 'Cancel',
          onPress: () => {return;}
        },
        { text: 'OK', onPress: () => Linking.openURL(`https://${data.url}`) },
      ],
      { cancelable: false },
    );
  };

  useEffect(() => {
    new Request('GET', `/events/${eventId}`).make()
      .then((response) => response.json())
      .then((json) => {
        setData(json[0]);
        console.warn(json[0]);
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
              <ApiImage eventId={data.id} eventImage={data.images} />
              <View style={Events.attendEventButtonContainer}>
                <Pressable onPress={() => props.navigation.navigate('Registration')}>
                  <Text style={Events.attendEventButton}>Attend</Text>
                </Pressable>
              </View>
            </View>
            <View>
              <Text style={Events.detailPrimaryHeading}>{data.title}</Text>
              <Text style={Events.detailSecondaryHeading}>{data.eventType}</Text>
            </View>
            <View>
              <Text style={Events.subheading}>Date: {data.startsOn}</Text>
            </View>
            <View>
              <Text style={Events.subheading}>Facilities available</Text>
              <Text style={Events.paragraph}>{data.facilityType}</Text>
            </View>
            <View>
              <Text style={Events.subheading}>Description</Text>
              <Text style={Events.paragraph}>{data.description}</Text>
            </View>
            <View>
              <Text style={Events.subheading}>Event URL</Text>
              <Pressable onPress={() => confirmRedirect()}>
                <View>
                  <Text style={Events.paragraph}>{data.url}</Text>
                </View>
              </Pressable>
            </View>
            <View>
              <Text style={Events.subheading}>Location</Text>
              <Text style={Events.infoTile}>{data.location}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default EventDetailScreen;
