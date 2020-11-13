import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity,
} from 'react-native';
import logo from './images/logo.png';

export default function Logo() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={logo} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.tagLine}>Commit to clean up</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagLine: {
    color: '#888',
    fontSize: 15,
  },
  logo: {
    width: 250,
    height: 125,
    marginTop: 25,
  },
});
