import React from 'react';
import {
  StyleSheet, Text, View, Image, SafeAreaView,
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
          <Image source={{ uri: image }} style={styles.imageSelected} />
        </Text>
        <Text style={styles.primaryHeading}>{title}</Text>
        <Text style={styles.paragraph}>{eventType}</Text>
        <View>
          <Text style={styles.subheading}>Date:</Text>
          <Text style={styles.paragraph}>{date}</Text>
        </View>
        <View>
          <Text style={styles.subheading}>Description:</Text>
          <Text style={styles.paragraph}>{description}</Text>
        </View>
        <View>
          <Text style={styles.subheading}>Images:</Text>
          <Text>{image}</Text>
        </View>
        <View>
          <Text style={styles.subheading}>Location:</Text>
          <Text style={styles.infoTile}>{location}</Text>
        </View>
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
  secondaryHeading: {
    textAlign: 'center',
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
  infoTile: {
    width: '100',
    height: 150,
    backgroundColor: 'rgb(84, 174, 51)',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 5,
  },
  imageSelected: {
    width: '100%',
    height: 200,
  },
});
