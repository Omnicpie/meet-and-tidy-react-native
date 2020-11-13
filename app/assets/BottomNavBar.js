import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

function BottomNavBar({ navigation }) {
  //console.log('******************');
  //console.log(navigation);
  return (
    <SafeAreaView style={styles.container}>
      <IconButton
        icon="home"
        name="flag"
        size={30}
        onPress={() => navigation.navigate('Home')}
      />
      <IconButton
        icon="flag-outline"
        name="flag"
        size={30}
        onPress={() => navigation.navigate('FlagCreate')}
      />
      <IconButton
        icon="account"
        name="flag"
        size={30}
        onPress={() => navigation.navigate('MyActivities')}
      />
    </SafeAreaView>
  );
}

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    width: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
