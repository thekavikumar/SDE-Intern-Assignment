import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = () => (
  <TextInput
    style={styles.searchInput}
    placeholder="Search"
    placeholderTextColor="#888"
  />
);

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
});

export default SearchBar;
