import React from 'react';
import {
  StyleSheet, Text, SafeAreaView,
} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

// Preview flag before saving

export default function FlagPreview({
  location, title, description, flagType, image, date,
} = props) {
  return (
    <SafeAreaView>
      <Text>Preview flag</Text>
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
        {flagType}
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
      <Text>5 of 5</Text>
    </SafeAreaView>

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
