import React, { ReactElement } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

type BottomNavBarProps = {
  navigation: any;
};

const styles = StyleSheet.create({
  navContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#efefef',
  },
  icon: {
    backgroundColor: '#54AE33',
  },
});

function BottomNavBar({ navigation }: BottomNavBarProps): ReactElement {
  return (
    <SafeAreaView style={styles.navContainer}>
      <IconButton
        style={styles.icon}
        icon="home"
        accessibilityLabel="home"
        size={35}
        onPress={() => navigation.navigate('Home')}
      />
      <IconButton
        style={styles.icon}
        icon="flag-outline"
        accessibilityLabel="flag"
        size={35}
        onPress={() => navigation.navigate('CreateFlag')}
      />
      <IconButton
        style={styles.icon}
        icon="account"
        accessibilityLabel="activities"
        size={35}
        onPress={() => navigation.navigate('MyActivities')}
      />
    </SafeAreaView>
  );
}

export default BottomNavBar;
