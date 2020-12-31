import React from 'react';
import { ScrollView, SafeAreaView, TextInput, Text, View, Button } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import Main from '../assets/stylesheets/Main';

function RegistrationScreen({ navigation }) {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <Text style={Main.regHeading}>Registration</Text>
        <Text stle={Main.regSubheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
        <View>
          <Text style={Main.regSecondaryHeading}>Username</Text>
          <TextInput style={Main.regTextInput} />
        </View>
        <View>
          <Text style={Main.regSecondaryHeading}>Email</Text>
          <TextInput style={Main.regTextInput} />
        </View>
        <View style={Main.regButtonStyle}>
          <Button
            title="Submit"
            onPress={() => navigation.navigate('SafetyDisclaimer')}
          />
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default RegistrationScreen;
