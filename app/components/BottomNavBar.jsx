import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

function BottomNavBar({ navigation }) {
  return (
    <SafeAreaView style={styles.navContainer}>
      <IconButton style={styles.icon}
        icon="home"
        name="home"
        size={35}
        onPress={() => navigation.navigate('Home')}
      />
      <IconButton style={styles.icon}
        icon="flag-outline"
        name="flag"
        size={35}
        onPress={() => navigation.navigate('CreateFlag')}
      />
      <IconButton style={styles.icon}
        icon="account"
        name="activities"
        size={35}
        onPress={() => navigation.navigate('MyActivities')}
      />
    </SafeAreaView>
  );
}

export default BottomNavBar;

const styles = StyleSheet.create({
  navContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    position: 'absolute',
    bottom: 0,
  },
  icon: {
    backgroundColor: '#54AE33',
    marginLeft: '7%',
    marginRight: '7%',
  },
});
