import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native'
import { IconButton } from 'react-native-paper'
import Main from '../assets/stylesheets/Main'

type BottomNavBarProps = {
  navigation: any;
};

function BottomNavBar ({ navigation }: BottomNavBarProps): ReactElement {
  return (
    <SafeAreaView style={Main.navContainer}>
      <IconButton
        style={Main.navBarIcon}
        icon="delete-outline"
        accessibilityLabel="mess"
        size={35}
        onPress={() => navigation.navigate('CreateMess')}
      />
      <IconButton
        style={Main.navBarIcon}
        icon="home"
        accessibilityLabel="home"
        size={35}
        onPress={() => navigation.navigate('Home')}
      />
      <IconButton
        style={Main.navBarIcon}
        icon="account"
        accessibilityLabel="activities"
        size={35}
        onPress={() => navigation.navigate('MyActivities')}
      />
    </SafeAreaView>
  )
}

export default BottomNavBar
