import React from 'react';
import { Button, SafeAreaView, View } from 'react-native';
import PopularEventScroll from '../components/PopularEventScroll';
import Logo from '../components/Logo';
import SearchBar from '../components/SearchBar';
import BottomNavBar from '../components/BottomNavBar';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
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
        title="Go to event details"
        onPress={() => navigation.navigate('EventDetail')}
      />
      <Button
        title="Go to Safety disclaimer screen"
        onPress={() => navigation.navigate('SafetyDisclaimer', { name: 'SafetyDisclaimer' })}
      />
      <Button
        title="Go to Registration screen"
        onPress={() => navigation.navigate('Registration')}
      />
      <View>
        <BottomNavBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
