import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = (query) => {
      setSearchQuery(query);
    }
  
    return (
    <View style={styles.searchArea}>
      <Searchbar
        placeholder="Find an event..."
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
    );
  };
  
  export default SearchBar;

  const styles = StyleSheet.create({
    searchArea: {
      alignItems: 'center',
      flex: 1,
      paddingTop: 35,
      paddingBottom: 25,
      backgroundColor: 'white'
    }
  });
  