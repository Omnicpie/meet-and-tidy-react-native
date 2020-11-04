import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';

export default function PopularEventScroll() {
  return (
  <View style={styles.scrollContainer}>
      <Text style={styles.subHeading}>Popular events</Text>
      <ScrollView style={styles.popScroll} horizontal>
          <View style={styles.tile} />
          <View style={styles.tile} />
          <View style={styles.tile} />
          <View style={styles.tile} />
          <View style={styles.tile} />
      </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeading: {
    color: 'black', 
    fontSize: 20,
    fontWeight: 'bold'
  },
  scrollContainer: {
    paddingTop: 40,
    padding: 10
  },
  popScroll: {
    paddingTop: 20
  },
  tile: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'rgb(84, 174, 51)' ,
  },
});
