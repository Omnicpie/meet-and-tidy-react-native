import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

function BottomNavBar({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <IconButton style={styles.icon}
        icon="home"
        name="home"
        size={30}
        onPress={() => navigation.navigate('Home')}
      />
      <IconButton style={styles.icon}
        icon="flag-outline"
        name="flag"
        size={30}
        onPress={() => navigation.navigate('CreateFlag')}
      />
      <IconButton style={styles.icon}
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
    width: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom:0,
    left:0,
    right:0
  },
  icon: {
    // flex:,
    backgroundColor: '#54AE33',
  }
});
