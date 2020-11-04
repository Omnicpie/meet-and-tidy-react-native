import React from 'react';
import { Button, StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
// import (useDimensions) from '@react-native-community/hooks';

import Bullets from './Bullets.js'
import PopularEventScroll from './PopularEventScroll.js'
import Create from './Create.js'
import Logo from './Logo.js'
import { useDimensions } from '@react-native-community/hooks';
// import SearchBar from './SearchBar.js'
// import BottomNavBar from './BottomNavBar.js'

export default function App() {
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
  )
}

const styles = StyleSheet.create({

});
