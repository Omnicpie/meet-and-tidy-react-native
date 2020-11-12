import React from 'react';
import { SafeAreaView } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

function BottomNavBar({navigation}) {

    return (
    <SafeAreaView>
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
    </SafeAreaView> 
    );
}

export default BottomNavBar;