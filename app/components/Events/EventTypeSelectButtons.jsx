import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, View, FlatList, SafeAreaView, Text, TouchableOpacity,
} from 'react-native';
import Events from '../../assets/stylesheets/Events';
import Request from '../../helpers/Request';

export default function EventTypeSelectButtons({
  eventType, onChangeEventType,
} = props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    new Request('GET', 'http://192.168.1.139:1337/eventtype/').make()
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={Events.flagTypeContainer}>
      {isLoading ? <ActivityIndicator /> : (
        <View style={Events.buttonContianer}>
          <FlatList
            data={data}
            horizontal
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={onChangeEventType(item.title)}
                eventType={item.title}
                style={Events.eventTypeButton}
              >
                <Text style={Events.eventTypeButtonText}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
