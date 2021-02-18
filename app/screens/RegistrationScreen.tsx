import React, { ReactElement } from 'react';
import {
  Button, ScrollView, SafeAreaView, TextInput, Text, View,
} from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import Main from '../assets/stylesheets/Main';

type UserProps = {
  username: string;
  email: string;
  // onChangeUsername: (username: string) => void;
  // onChangeEmail: (email: string) => void;
  // onSubmit: () => void;
};

export default function RegistrationScreen({
  email, navigation, onChangeEmail, onChangeUsername, onSubmit, username }: UserProps): ReactElement {
    // function validateInput = (email) => {
    //   if (typeof email === 'string') {
    //     onNext();
    //   } else {
    //     alert('Please enter a valid email address.');
    //   }
    // }
  // };

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

