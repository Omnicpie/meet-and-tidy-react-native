import { ApolloError, gql, useMutation } from '@apollo/client';
import React, { ReactElement, useState } from 'react';
import {
  Alert, Button, SafeAreaView, ScrollView, TextInput,
} from 'react-native';
import { Text, View } from '../components/Themed';
import BottomNavBar from '../components/BottomNavBar';
import Main from '../assets/stylesheets/Main';

const CREATE_ACCOUNT = gql`
mutation CreateAccount($name: String, $email: String!, $password: String!) {
  createAccount(name: $name, email: $email, password: $password) {
    errors
  }
}
`;

type RegistrationScreenProps = {
  navigation: any;
};

export default function RegistrationScreen({ navigation }: RegistrationScreenProps): ReactElement {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const responses = {
    onCompleted() {
      navigation.navigate('SafetyDisclaimer');
    },
    onError(error: ApolloError) {
      console.log(error);
    },
  };

  const [createAccount, createAccountResult] = useMutation(CREATE_ACCOUNT, responses);

  function formValid(): boolean {
    return email.length >= 1 && name.length >= 1 && password.length >= 6;
  }

  let initialDisclaimerValues = {
    title: "Safety Disclaimer",
    message: "By agreeing to create an account, you confrim that you have read our safety disclaimer. If you have not done so, press cancel and click the link below before progressing forward.",
  }

  const confirmDisclaimer = () => {
    Alert.alert(
      initialDisclaimerValues.title,
      initialDisclaimerValues.message,
      [
        {
          text: "Cancel",
          onPress: () => {
            return; // else change props in window with a message to say "Please read full conditions to continue."
          }
        },
        {
          text: "I agree",
          onPress: () => {

          navigation.navigate('Event') && createAccount({ variables: { name, email, password } })
          }
        },
           /// trigger affialte window to trigger disclaimer (with a link to full details on homepage)}

      ],
      { cancelable: false }
    );
  }

//{id: item.product.id, title: item.product.name,}



  const onSubmit = () => {
    // if ok set agree to true in db then reeirect to a successful page (events?) and create user
    if (formValid()) {
      confirmDisclaimer();
    // set agree to true in db then reeirect to a successful page(events ?) and create user

    }
  };


  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <Text style={Main.regHeading}>Hello there!</Text>
        <Text style={Main.regSubheading}>
          Introduce yourself so the organiser and other attendees can see who is attending.
          Your email address is used to let you know about any changes to this event.
          We won’t share your details or send you any marketing without your permission.
        </Text>
        <View>
          <Text style={Main.regSecondaryHeading}>Your name</Text>
          <TextInput
            autoCompleteType="name"
            style={Main.regTextInput}
            textContentType="name"
            onChangeText={(t) => setName(t)}
            value={name}
          />
        </View>
        <View>
          <Text style={Main.regSecondaryHeading}>Your email</Text>
          <TextInput
            autoCompleteType="email"
            keyboardType="email-address"
            onChangeText={(t) => setEmail(t)}
            style={Main.regTextInput}
            textContentType="emailAddress"
            value={email}
          />
        </View>
        <View>
          <Text style={Main.regSecondaryHeading}>Password</Text>
          <TextInput
            onChangeText={(t) => setPassword(t)}
            secureTextEntry
            style={Main.regTextInput}
            textContentType="password"
            value={password}
          />
        </View>
        <View style={Main.regButtonStyle}>
          <Button
            disabled={!formValid()}
            title="Submit"
            onPress={onSubmit}
          />
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}
