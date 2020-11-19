import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Button } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';


function SafetyDisclaimerScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.primaryHeading}>Safety Disclaimer</Text>
        <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
      </View>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default SafetyDisclaimerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  primaryHeading: {
    textAlign: 'Left',
    fontSize: 23,
    paddingTop: 10,
  },
  paragraph: {
    textAlign: 'left',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
});
