import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

function EventDetailScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>The details of the selected event will be here </Text>
    </SafeAreaView>
  );
}

export default EventDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
});
