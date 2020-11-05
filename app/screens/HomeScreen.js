import React from 'react';
import Bullets from '../assets/Bullets'
import PopularEventScroll from '../assets/PopularEventScroll'
import Logo from '../assets/Logo'
import SearchBar from '../assets/SearchBar'
import { Button, SafeAreaView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

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
      <SearchBar />
      <Button 
        title="Go to Event"
        onPress={() =>
        navigation.navigate('Event', { name: 'Event' })
      }/>
      <PopularEventScroll />
      <Bullets/>       
      <Button 
        title="Go to event details"
        onPress={() =>
        navigation.navigate('EventDetail', { name: 'EventDetail' })
      }/>
      <Button 
        title="Go to Safety disclaimer screen"
        onPress={() =>
        navigation.navigate('SafetyDisclaimer', { name: 'SafetyDisclaimer' })
      }/>
      <FontAwesome.Button 
        name="flag"
        onPress={() =>
        navigation.navigate('FlagCreate', { name: 'FlagCreate' })
      }/>
      <Button 
        title="Go to Registration screen"
        onPress={() =>
        navigation.navigate('Registration', { name: 'Registration' })
      }/>
      <FontAwesome.Button 
        name="user"
        onPress={() =>
        navigation.navigate('MyActivities', { name: 'MyActivities' })
      }/>
    </SafeAreaView> 
    );
}

export default HomeScreen;