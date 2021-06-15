import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';
import Main from '../assets/stylesheets/Main';

type SearchBarProps = {
  navigation: any;
};

const SearchBar = ({ navigation }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const onChangeSearch = (query: string) => {
    setQuery(query);
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
        style={{ backgroundColor: 'white', borderRadius: 23, width: 350 }}
        value={query}
      />
    </View>
  );
};

export default SearchBar;
