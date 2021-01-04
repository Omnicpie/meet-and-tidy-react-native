import React, { ReactElement, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import Request from '../helpers/Request';
import ApiImage from '../helpers/ApiImage';
import { dayOfMonth, shortMonthName } from '../helpers/DateHelpers';
import Main from '../assets/stylesheets/Main';

export default function PopularEventScroll({ navigation }): ReactElement {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    new Request('GET', '/events/').make()
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={Main.popularEventsContainer}>
      <Text style={Main.popularEventsTitle}>Popular events</Text>
      <View>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
            data={data}
            horizontal
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <View style={Main.popularEventsTile}>
                <ApiImage eventId={item.id} eventImage={item.images} />
                <View style={Main.popularEventsTileLower}>
                  <View style={Main.popularEventsTileLeft}>
                    <Text style={Main.date}>{dayOfMonth(item.startsOn)}</Text>
                    <Text style={Main.month}>{shortMonthName(item.startsOn)}</Text>
                  </View>
                  <View style={Main.popularEventsTileRight}>
                    <Text
                      style={Main.eventTitle}
                      onPress={() => navigation.navigate('Event', item.id)}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={Main.eventDescription}
                      numberOfLines={1}
                    >
                      {item.description}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}
