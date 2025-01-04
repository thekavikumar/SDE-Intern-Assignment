import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Search() {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
