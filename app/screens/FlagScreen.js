import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text, View, ScrollView} from 'react-native';
import Request from '../helpers/Request';
import Flags from '../assets/stylesheets/Flags';

function FlagScreen(props) {
  const flagId = props.route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    new Request('GET', `http://localhost:1337/flags/${flagId}`).make()
      .then((response) => response.json())
      .then((json) => {
        setData(json[0]);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {isLoading ? <ActivityIndicator /> : (
          <View>
            <Text style={Flags.primaryHeading}>{data.title}</Text>
            <Text style={Flags.paragraph}>{data.description}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
