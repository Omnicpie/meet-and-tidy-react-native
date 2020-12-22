import React from 'react';
import { Button, SafeAreaView, Platform, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PopularEventScroll from '../components/PopularEventScroll';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import BottomNavBar from '../components/BottomNavBar';
import Main from '../assets/stylesheets/Main';

//const headerStyle = {
//  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
//};

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('CreateEvent')} style={Main.createButton}>
          <Text style={Main.createButtonText}>+ CREATE</Text>
        </TouchableOpacity>
        <Logo />
        <SearchBar />

        <PopularEventScroll navigation={navigation} />

        <Button
          title="Go to Search results screen"
          onPress={() => navigation.navigate('EventSearchResult', { name: 'EventSearchResult' })}
        />
      </ScrollView>
        <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default HomeScreen;
