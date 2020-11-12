import React from 'react';
import PopularEventScroll from '../assets/PopularEventScroll'
import Logo from '../assets/Logo'
import SearchBar from '../assets/SearchBar'
import { Button, View, SafeAreaView, ActivityIndicator, FlatList, Text} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

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
        navigation.navigate('Registration', { name: 'Registration' })
      }/>
      <IconButton
        icon="home"
        color={Colors.green500}
        name="flag"
        size={30}
        onPress={() => navigation.navigate('Home')
      }/>
      <IconButton
        icon="flag-outline"
        color={Colors.green500}
        name="flag"
        size={30}
        onPress={() => navigation.navigate('FlagCreate')
      }/>
      <IconButton
        icon="account"
        color={Colors.green500}
        name="flag"
        size={30}
        onPress={() => navigation.navigate('MyActivities')
      }/>
      <BottomNavBar/>
    </SafeAreaView> 
    );
}

export default HomeScreen;