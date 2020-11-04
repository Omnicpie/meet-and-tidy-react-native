import React from 'react';
import Bullets from '../assets/Bullets'

import { StyleSheet, Button, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';


function CreateEventScreen(props) {
    return (
        <SafeAreaView>
 
        <View>
            CREATE EVENT SCREEN
          <Button
        title="Go to CreateEvent"
        onPress={() =>
          navigation.navigate('CreateEvent', { name: 'CreateEvent' })
        }
      />
        </View>
   
      </SafeAreaView> 
    );
}

export default CreateEventScreen;