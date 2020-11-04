import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <input type="text" /*value={this.state.search}*/ />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25
  }
});
