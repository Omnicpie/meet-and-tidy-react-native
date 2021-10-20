import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import logo from '../assets/images/logo.png';
import Main from '../assets/stylesheets/Main';

export default function Logo() {
  return (
    <SafeAreaView>
      <View style={Main.mainContainer}>
        <TouchableOpacity>
          <Image source={logo} style={Main.logo} />
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
