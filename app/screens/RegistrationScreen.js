import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

function RegistrationScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.primaryHeading}>Registration</Text>
      <Text style={styles.subheading}>Explanation of why we need this info and how we use it.</Text>
      <View>
        <Text style={styles.subheading}>Name</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>
      <View>
        <Text style={styles.subheading}>Email</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>
      <View style={styles.buttonStyle}>
          <Button
            title="Submit"
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
  primaryHeading: {
    textAlign: 'center',
    fontSize: 23,
    paddingTop: 10,
  },
  subheading: {
    textAlign: 'center',
    width: '100%',
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 15,
  },
  buttonStyle: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

