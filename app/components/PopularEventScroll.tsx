import React, { ReactElement, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';
import Request from '../helpers/Request';
import ApiImage from '../helpers/ApiImage';
import { dayOfMonth, shortMonthName } from '../helpers/DateHelpers';
import Main from '../assets/stylesheets/Main';

import { ApiEvent } from '../../ApiTypes';

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

  function firstImage(item: ApiEvent) {
    if (item.images.length) {
      return <ApiImage eventId={item.id} eventImage={item.images[0]} />;
    }
    return null;
  }

  return (
    <View style={Main.popularEventsContainer}>
      <Text style={Main.popularEventsTitle}>Popular events</Text>
      <View>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList<ApiEvent>
            data={data}
            horizontal
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <Pressable onPress={() => navigation.navigate('Event', item.id)}>
                <View style={Main.popularEventsTile}>
                  {firstImage(item)}
                  <View style={Main.popularEventsTileLower}>
                    <View style={Main.popularEventsTileLeft}>
                      <Text style={Main.date}>{dayOfMonth(item.startsOn)}</Text>
                      <Text style={Main.month}>{shortMonthName(item.startsOn)}</Text>
                    </View>
                    <View style={Main.popularEventsTileRight}>
                      <Text style={Main.eventTitle}>
                        {item.title}
                      </Text>
                      <Text style={Main.eventDescription} numberOfLines={1}>
                        {item.description}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            )}
          />
        )}
      </View>
    </View>
  );
}
