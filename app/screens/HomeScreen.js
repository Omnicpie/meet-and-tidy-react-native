import React, { useEffect, useState } from 'react';

import Bullets from '../assets/Bullets'
import PopularEventScroll from '../assets/PopularEventScroll'
import Create from '../assets/Create'
import Logo from '../assets/Logo'
import EventButton from '../assets/EventButton'
import { StyleSheet, Button, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Request from '../assets/request';

function HomeScreen({navigation}) {
    const [events, setEvents] = useState([]); 
    useEffect(() => { 
      new Request("GET", "http://localhost:1337/events/").make()
          .then(response => response.json())
          .then(json => setEvents(json) )
     }, []);
    return (
    <SafeAreaView>
      <Create />
      <Logo />
      <View>
      { events }
    
        <PopularEventScroll />
        <Bullets/>
        <Button
      title="Go to Event"
      onPress={() =>
        navigation.navigate('Event', { name: 'Event' })
      }
    />
      </View>
 
    </SafeAreaView> 
    );
}

export default HomeScreen;