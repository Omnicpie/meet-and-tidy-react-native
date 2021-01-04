import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';
import Main from '../assets/stylesheets/Main';

type SearchBarProps = {
  navigation: any;
};

const SearchBar = ({ navigation       }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
    console.log(query);
  };

  const onSubmitSearch = () => {
    navigation.navigate('EventSearchResult', searchQuery);
  };

  return (
    <View style={Main.searchArea}>
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
