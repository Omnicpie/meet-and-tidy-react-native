import React from 'react';
import {
  StyleSheet, SafeAreaView, Text, View, Button, ScrollView,
} from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import Main from '../assets/stylesheets/Main';

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
    fontSize: 25,
    marginBottom: 60,
  },
  paragraph: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 50,
  },
  buttonStyle: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 75,
  },
});

function SafetyDisclaimerScreen({ navigation }) {
  return (
    <SafeAreaView style={Main.container}>
      <ScrollView>
        <View>
          <Text style={Main.regHeading}>Safety Disclaimer</Text>
          <Text style={Main.regSubheading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>
        <View style={styles.buttonStyle}>
          <Button title="I Agree" onPress={() => undefined} />
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default SafetyDisclaimerScreen;
