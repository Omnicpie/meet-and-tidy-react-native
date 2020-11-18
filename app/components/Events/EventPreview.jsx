import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

// Preview event before saving

export default function EventPreview({
  location, title, description, eventType, image, date,
} = props) {
  return (
    <SafeAreaView style={styles.eventContainer}>
      <View>
        <Text>Preview event</Text>
        <Text>
          Image:
          {image}
        </Text>
        <Text style={styles.primaryHeading}>
          Title:
          {title}
        </Text>
        <Text style={styles.paragraph}>
          Date:
          {date}
        </Text>
        <Text style={styles.paragraph}>
          Description:
          {description}
        </Text>
        <Text style={styles.paragraph}>
          Type:
          {eventType}
        </Text>
        <Text style={styles.paragraph}>
          Location:
          {location}
        </Text>
        <ProgressBar style={styles.progressBar} progress={1} color={Colors.green500} />
        <Text>8 of 8</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  eventContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  progressBar: {
    marginTop: 50,
  },
  paragraph: {
    textAlign: 'left',
    width: '100%',
    paddingLeft: 15,
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 23,
    paddingTop: 10
  },
});
