import React, { useEffect, useState } from 'react';

import Bullets from '../assets/Bullets'
import PopularEventScroll from '../assets/PopularEventScroll'

import Logo from '../assets/Logo'
import SearchBar from '../assets/SearchBar'

import { Button, View, SafeAreaView} from 'react-native';

function HomeScreen({navigation}) {
/*    const [events, setEvents] = useState([]); 
    useEffect(() => { 
      new Request("GET", "http://localhost:1337/events/").make()
          .then(response => response.json())
          .then(json => setEvents(json) )
     }, []); */
     
    return (
    <SafeAreaView>
      <Button       
        title="+ Create" 
        color= "rgb(84, 174, 51)" 
        onPress={() =>
            navigation.navigate('CreateEvent')
          }/>
      <Logo />
      <View>

        <SearchBar />
        <PopularEventScroll />
        <Bullets/>
        <Button 
          title="Go to Event"
          onPress={() =>
            navigation.navigate('Event', { name: 'Event' })
          }
        />
      </View>
    </SafeAreaView> 
    );
}

export default HomeScreen;