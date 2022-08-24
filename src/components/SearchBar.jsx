import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';
import Main from '../assets/stylesheets/Main';

const SearchBar = ({ navigation }) => {
  const [query, setQuery] = useState('');

  const onChangeSearch = newQuery => {
    setQuery(newQuery);
  };

  const onSubmitSearch = () => {
    navigation.navigate('EventSearchResultScreen', { query });
  };

  return (
    <View style={Main.searchArea}>
      <Searchbar
        placeholder="Find an event..."
        onChangeText={onChangeSearch}
        onSubmitEditing={onSubmitSearch}
        style={{ backgroundColor: 'white', borderRadius: 23, maxWidth: '90%', width: 350 }}
        value={query}
      />
    </View>
  );
};

export default SearchBar;
