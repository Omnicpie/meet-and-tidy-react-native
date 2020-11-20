import React from 'react';
import { Button, SafeAreaView, Platform } from 'react-native';
import PopularEventScroll from '../components/PopularEventScroll';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import BottomNavBar from '../components/BottomNavBar';
import HomeScreenStyle from '../assets/stylesheets/HomeScreenStyle';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={HomeScreenStyle.container}>
      <Button
        title="+ Create"
        color="rgb(84, 174, 51)"
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
      {/* <Button
        title="Go to Safety disclaimer screen"
        onPress={() => navigation.navigate('SafetyDisclaimer', { name: 'SafetyDisclaimer' })}
      /> */}
      {/* <Button
        title="Go to Registration screen"
        onPress={() => navigation.navigate('Registration')}
      /> */}

        <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default HomeScreen;
