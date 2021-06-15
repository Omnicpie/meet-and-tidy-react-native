import React, { ReactElement, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Main from '../assets/stylesheets/Main';
import { HomeParamList } from '../../types';

type HomeScreenNavigationProp = StackNavigationProp<
  HomeParamList,
  'HomeScreen'
>;

type SearchBarProps = {
  navigation: HomeScreenNavigationProp;
};

const SearchBar = ({ navigation }: SearchBarProps): ReactElement => {
  const [query, setQuery] = useState('');

  const onChangeSearch = (newQuery: string) => {
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
        style={{ backgroundColor: 'white', borderRadius: 23, width: 350 }}
        value={query}
      />
    </View>
  );
};

export default SearchBar;
