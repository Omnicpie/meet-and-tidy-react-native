import { ApolloError, gql, useMutation } from "@apollo/client";
import React, { ReactElement, useState } from "react";
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { Text, View } from "../components/Themed";
import BottomNavBar from "../components/BottomNavBar";
import Main from "../assets/stylesheets/Main";

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

export default function RegistrationScreen({
  navigation,
}: RegistrationScreenProps): ReactElement {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(true);

  const responses = {
    onError(error: ApolloError) {
      console.log(error);
    },
  };

  const [createAccount, createAccountResult] = useMutation(
    CREATE_ACCOUNT,
    responses
  );

  let initialDisclaimerValues = {
    title: "Safety Disclaimer",
    message:
      "By agreeing to create an account, you confrim that you have read our safety disclaimer. If you have not done so, press cancel and click the link below the form before progressing forward.",
  };

  const confirmDisclaimer = () => {
    Alert.alert(
      initialDisclaimerValues.title,
      initialDisclaimerValues.message,
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
        },
        {
          text: "I agree",
          onPress: () => {
            navigation.navigate("Event");
            createAccount({ variables: { name, email, password } });
          },
        },
      ],
      { cancelable: false }
    );
  };

  //function formValid(): boolean {
  //  return email.length >= 1 && name.length >= 1 && password.length >= 6;
  //}

  const handleValidation = () => {
    //Name
    if (!name || !name.match(/^[a-zA-Z]+$/) || !name.length >= 3) {
      setFormValid(false);
      return (<Text>Please enter your name with letters only</Text>);
    }

    //Email
    if (!email || !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/) || !email.length >= 8 ) {
      setFormValid(false);
      return (<Text>Please enter a valid email address</Text>);
    }

    //Password coming soon
    } else {
      return (<Text>Please enter your name with letters only</Text>);

  }

  const onSubmit = () => {
    if (formValid()) {
      confirmDisclaimer();
    }
  };

  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <Text style={Main.regHeading}>Hello there!</Text>
        <Text style={Main.regSubheading}>
          Introduce yourself so the organiser and other attendees can see who is
          attending. Your email address is used to let you know about any
          changes to this event. We won’t share your details or send you any
          marketing without your permission.
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
          <Button disabled={!formValid()} title="Submit" onPress={onSubmit} />
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}
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
          <Button disabled={!formValid()} title="Submit" onPress={onSubmit} />
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}
