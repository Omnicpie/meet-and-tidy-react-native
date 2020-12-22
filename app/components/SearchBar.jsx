import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const SearchBar = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    console.log(query);
  };

  const onSubmitSearch = () => {
    navigation.navigate('EventSearchResult', searchQuery)
  };

  return (
    <View style={styles.searchArea}>
      <Searchbar
        placeholder="Find an event..."
        onChangeText={onChangeSearch}
        onSubmitEditing={onSubmitSearch}
        style={{backgroundColor: 'white', borderRadius: 23, width: 375}}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchArea: {
    alignItems: 'center',
    paddingTop: 35,
    paddingBottom: 25,
    backgroundColor: 'white',
  },
});
