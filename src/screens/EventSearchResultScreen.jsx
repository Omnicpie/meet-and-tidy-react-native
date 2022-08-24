import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import SearchResultList from '../components/SearchResultList';

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

function EventSearchResultScreen({ navigation, route }) {
  const { query } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.primaryHeading}>{`Search Results for ${query}`}</Text>
        <SearchResultList navigation={navigation} route={route} />
      </View>
    </SafeAreaView>
  );
}

export default EventSearchResultScreen;
