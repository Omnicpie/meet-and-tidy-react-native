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
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    new Request('GET', '/eventtype/').make()
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  const isSelected = (eventTypeId : number) => selectedTypes.some(x => x === eventTypeId);

  const updateSelected = (selectedType : any) => {
    if (isSelected(selectedType.id)) {
      setSelectedTypes(selectedTypes.filter(x => x !== selectedType.id));
    } else {
      selectedTypes.push(selectedType.id);
    }
    onChangeEventType(selectedType.title);
  };

  return (
    <SafeAreaView style={Events.mainContainer}>
      {isLoading ? <ActivityIndicator /> : (
        <View style={Events.buttonContainer}>
          <FlatList
            data={data}
            horizontal
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => updateSelected(item)}
                style={isSelected(item.id)
                  ? Events.eventTypeButtonSelected : Events.eventTypeButton}
              >
                <Text
                  style={isSelected(item.id)
                    ? Events.eventTypeButtonTextSelected : Events.eventTypeButtonText}
                >
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
