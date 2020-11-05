import React from 'react';
import { StyleSheet, Button, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';


function CreateEventScreen({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
                <Button 
          title="Go to Event"
          onPress={() =>
            navigation.navigate('Event', { name: 'Event' })
          }
        />
        <Text>A 'Create an event' form will be here </Text>
      </SafeAreaView> 
    );
}

export default CreateEventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25
  }
});