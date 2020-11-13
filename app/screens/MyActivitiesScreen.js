import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

function MyActivitiesScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>A profile of the users activite e.g. upcoming events will be listed here </Text>
    </SafeAreaView>
  );
}

export default MyActivitiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
});
