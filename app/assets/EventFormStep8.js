import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

// Preview event before saving

export default function EventFormStep8({
  location, title, description, eventType, image, date,
} = props) {
  return (
    <View>
      <Text>Preview event</Text>
      <Text>
        Title:
        {title}
      </Text>
      <Text>
        Date:
        {date}
      </Text>
      <Text>
        Description:
        {description}
      </Text>
      <Text>
        Type:
        {eventType}
      </Text>
      <Text>
        Location:
        {location}
      </Text>
      <Text>
        Image:
        {image}
      </Text>

      <ProgressBar style={styles.progressBar} progress={1} color={Colors.green500} />
      <Text>8 of 8</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  progressBar: {
    marginTop: 50,
  },
});
