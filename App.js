import React from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Bullets from './Bullets.js'
import PopularEvents from './PopularEvents.js'
import Create from './Create.js'
import Logo from './Logo.js'
import SearchBar from './SearchBar.js'

export default function App() {
  return (
    <View>
      <Create />
      <Logo />
      <SearchBar />
      <PopularEvents />
      <Bullets/>
    </View>
  )
}

const styles = StyleSheet.create({

});
