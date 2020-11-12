import React from 'react';
import PopularEventScroll from '../assets/PopularEventScroll'
import Logo from '../assets/Logo'
import SearchBar from '../assets/SearchBar'
import BottomNavBar from '../assets/BottomNavBar'
import { Button, SafeAreaView, View } from 'react-native';

function HomeScreen({navigation}) {

    return (
    <SafeAreaView>
      <Button       
        title="+ Create" 
        color= "rgb(84, 174, 51)" 
        mode="contained"
        icon="plus"
        onPress={() =>
            navigation.navigate('CreateEvent')
          }/>
      <Logo />
      <SearchBar />

      <PopularEventScroll navigation={navigation}/>
         
      <Button 
        title="Go to event details"
        onPress={() =>
        navigation.navigate('EventDetail')
      }/>
      <Button 
        title="Go to Safety disclaimer screen"
        onPress={() =>
        navigation.navigate('SafetyDisclaimer', { name: 'SafetyDisclaimer' })
      }/>
      <Button 
        title="Go to Registration screen"
        onPress={() =>
        navigation.navigate('Registration')
      }></Button>
      <View>
        <BottomNavBar navigation={navigation}/>
      </View>
    </SafeAreaView> 
    );
}

export default HomeScreen;
