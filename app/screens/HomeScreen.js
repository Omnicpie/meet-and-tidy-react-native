import React from 'react';
import { Button, StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

import Bullets from '../assets/Bullets.js'
import PopularEventScroll from '../assets/PopularEventScroll.js'
import Create from '../assets/Create.js'
import Logo from '../assets/Logo.js'
import { useDimensions } from '@react-native-community/hooks';
// import SearchBar from './SearchBar.js'
// import BottomNavBar from './BottomNavBar.js'

function HomeScreen(props) {
    return (
    <SafeAreaView>
      <Create />
      <Logo />
      <View>
        {/* <SearchBar /> */}
        <PopularEventScroll />
        <Bullets/>
      </View>
      {/* <BottomNavBar /> */}
    </SafeAreaView> 
    );
}

export default HomeScreen;