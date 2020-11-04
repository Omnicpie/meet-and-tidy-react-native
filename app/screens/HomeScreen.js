import React, { useEffect, useState } from 'react';

import Bullets from '../assets/Bullets'
import PopularEventScroll from '../assets/PopularEventScroll'
import CreateEventButton from '../assets/CreateEventButton'
import Logo from '../assets/Logo'
import SearchBar from '../assets/SearchBar'
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
      <CreateEventButton />
      <Logo />
      <View>
      { events }
        <SearchBar />
        <PopularEventScroll />
        <Bullets/>
        <Button 
          title="Go to Event"
          onPress={() =>
            navigation.navigate('Event', { name: 'Event' })
          }
        />
        <Button 
          title="Go to create an event"
          onPress={() =>
            navigation.navigate('CreateEvent', { name: 'CreateEvent' })
          }
        />
      </View>
    </SafeAreaView> 
    );
}

export default HomeScreen;