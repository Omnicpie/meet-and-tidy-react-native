import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';

function MyActivitiesScreen(navigation) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>A profile of the users activite e.g. upcoming events will be listed here </Text>
      <BottomNavBar navigation={navigation} />
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
