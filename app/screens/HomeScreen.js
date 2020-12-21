import React from 'react';
import { Button, SafeAreaView, Platform } from 'react-native';
import PopularEventScroll from '../components/PopularEventScroll';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import BottomNavBar from '../components/BottomNavBar';
import Main from '../assets/stylesheets/Main';
import { ScrollView } from 'react-native-gesture-handler';

const headerStyle = {
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

function HomeScreen({ navigation }) {
  return (
    headerStyle,
    <SafeAreaView style={Main.mainContainer}>
      <ScrollView>
        <Button
          title="+ Create"
          color="#54ae33"
          mode="contained"
          icon="plus"
          onPress={() => navigation.navigate('CreateEvent')}
        />
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
