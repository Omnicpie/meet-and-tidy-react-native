import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import SearchResultList from '../components/SearchResultList';

function EventSearchResultScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.primaryHeading}>Search Results for _____</Text>
        <SearchResultList/>
      </View>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
}

export default EventSearchResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 25,
    marginTop: 25,
  },
  paragraph: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 50,
  },
});
