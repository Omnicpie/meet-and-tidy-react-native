import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function PopularEvents() {
  return (
  <View>
    <ScrollView style={styles.scrollContainer}>
        <Text style={styles.subHeading}>Popular events</Text>
        <View style={styles.large} />
        <ScrollView horizontal>
            <View style={styles.small} />
            <View style={styles.small} />
            <View style={styles.small} />
        </ScrollView>
            <View style={styles.large} />
            <View style={styles.small} />
            <View style={styles.large} />
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
  small: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  large: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
});
