import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

function BottomNavBar({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <IconButton
        icon="home"
        name="home"
        size={30}
        onPress={() => navigation.navigate('Home')}
      />
      <IconButton
        icon="flag-outline"
        name="flag"
        size={30}
        onPress={() => navigation.navigate('CreateFlag')}
      />
      <IconButton
        icon="account"
        name="activities"
        size={30}
        onPress={() => navigation.navigate('MyActivities')}
      />
    </SafeAreaView>
  );
}

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    paddingLeft: 8,
    width: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
});
