import { ApolloError, gql, useMutation } from '@apollo/client';
import React, { ReactElement, useState } from 'react';
import { Alert, Button, Pressable, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import BottomNavBar from '../components/BottomNavBar';
import Main from '../assets/stylesheets/Main';

type RegScreenProps = {
  navigation: any;
};

export default function RegistrationScreen({ navigation }: RegScreenProps): ReactElement {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mutationFailed, setMutationFailed] = useState(false);

  const CREATE_ACCOUNT = gql`
  mutation CreateAccount($name: String, $email: String!, $password: String!) {
    createAccount(name: $name, email: $email, password: $password) {
      errors
    }
  }
  `;

  const responses = {
    onCompleted(_data: any) {
      navigation.navigate('Home')
    },
    onError(_error: ApolloError) {
      setMutationFailed(true);
      setTimeout(() => {
        setMutationFailed(false);
      }, 3000);
    },
  };

  function formValid(): boolean {
    return email.length >= 10 && name.length >= 1 && password.length >= 6;
  }

  const [createAccount, _accountResult] = useMutation(CREATE_ACCOUNT, responses);

  function createAccountAndNavigate() {
    createAccount({variables: { name, email, password }})
  }

  const confirmSubmit = () => {
    if (formValid()) {
      Alert.alert(
        "Safety Disclaimer",
        "By agreeing to create an account, you confrim that you have read our safety disclaimer. If you have not done so, press cancel and click the link below before progressing forward.",
        [
          {
            text: "Cancel",
            onPress: () => {return;}
          },
          {
            text: "OK",
            onPress: createAccountAndNavigate
          }
        ],
        { cancelable: false }
      );
    }
  }

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
        <View>
          <Pressable onPress={() => navigation.navigate("SafetyDisclaimer")}>
            <Text style={Main.safetyDisText}>
              Please read Safety Disclaimer {"\n"}before continuing
            </Text>
          </Pressable>
        </View>
        <View style={Main.regButtonStyle}>
          <Button disabled={!formValid()} title="Submit" onPress={() => confirmSubmit()}/>
        </View>
        {mutationFailed && <View><Text style={Main.mutation}>Unable to create account, please try again.</Text></View>}
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}
