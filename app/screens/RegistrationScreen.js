import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, View, Button } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import Main from '../assets/stylesheets/Main';

function RegistrationScreen({ navigation }) {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <Text style={Main.regHeading}>Registration</Text>
      <Text style={Main.regSubheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
      <View>
        <Text style={Main.regSecondaryHeading}>Username</Text>
        <TextInput
          style={Main.regTextInput}
        />
      </View>
      <View>
        <Text style={Main.regSecondaryHeading}>Email</Text>
        <TextInput
          style={Main.textInput}
        />
      </View>
      <View style={Main.regButtonStyle}>
        <Button
          title="Submit"
          onPress={() => navigation.navigate('SafetyDisclaimer')}
        />
      </View>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default RegistrationScreen;
