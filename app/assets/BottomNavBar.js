import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { IconButton, Color } from 'react-native-paper';

function BottomNavBar({navigation}) {

    return (
    <SafeAreaView style={styles.container}>
      <IconButton style={styles.icon}
        icon="home"
        name="flag"
        size={30}
        onPress={() => navigation.navigate('Home')
      }/>
      <IconButton style={styles.icon}
        icon="flag-outline"
        name="flag"
        size={30}
        onPress={() => navigation.navigate('FlagCreate')
      }/>
      <IconButton style={styles.icon}
        icon="account"
        name="flag"
        size={30}
        onPress={() => navigation.navigate('MyActivities')
      }/>
    </SafeAreaView> 
    );
}

export default BottomNavBar;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    icon: {
       color: "rgb(84, 174, 51)" 
    }
  });