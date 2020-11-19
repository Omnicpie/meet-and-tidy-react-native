import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, Text, View, Button } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';


function RegistrationScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.primaryHeading}>Registration</Text>
      <Text style={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
      <View>
        <Text style={styles.secondaryHeading}>Username</Text>
        <TextInput
          style={styles.textInput}
        />
      </View>
      <View>
        <Text style={styles.secondaryHeading}>Email</Text>
        <TextInput
          style={styles.textInput}
        />
      </View>
      <View style={styles.buttonStyle}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 28,
  },
  secondaryHeading: {
    textAlign: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
  },
  subheading: {
    textAlign: 'center',
    marginTop: 5,
    width: '100%',
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
    marginBottom: 25,
  },
  buttonStyle: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 75,
  },
});

