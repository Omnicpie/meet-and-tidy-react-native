import React from 'react';
import {
  SafeAreaView, TouchableOpacity, Text, View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PopularEventScroll from '../components/PopularEventScroll';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import BottomNavBar from '../components/BottomNavBar';
import Main from '../assets/stylesheets/Main';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('CreateEvent')} style={Main.createButton}>
          <Text style={Main.createButtonText}>+ CREATE</Text>
        </TouchableOpacity>
        <Logo />
        <SearchBar navigation={navigation} />
        <PopularEventScroll navigation={navigation} />
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default HomeScreen;
