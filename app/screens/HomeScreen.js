import React from 'react';

import Bullets from '../assets/Bullets'
import PopularEventScroll from '../assets/PopularEventScroll'
import Create from '../assets/Create'
import Logo from '../assets/Logo'
import EventButton from '../assets/EventButton'
import { StyleSheet, Button, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({navigation}) {
    return (
    <SafeAreaView>
      <Create />
      <Logo />
      <View>
        {/* <SearchBar /> */}
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