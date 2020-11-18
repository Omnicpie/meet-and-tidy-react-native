import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';

function MyActivitiesScreen(navigation) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.subheading}>Events I'm Attending</Text>
        <Text style={styles.paragraph}>You're not attending any events</Text>
      </View>
      <View>
        <Text style={styles.subheading}>Events I'm Organising</Text>
        <Text style={styles.paragraph}>You're not organising any events</Text>
      </View>
      <View>
        <Text style={styles.subheading}>Messes I've Flagged</Text>
        <Text style={styles.paragraph}>1</Text>
      </View>
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
  primaryHeading: {
    textAlign: 'center',
    fontSize: 23,
    paddingTop: 10,
  },
  paragraph: {
    textAlign: 'center',
    width: '100%',
    paddingLeft: 15,
  },
  subheading: {
    textAlign: 'center',
    width: '100%',
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 15,
  },
});
