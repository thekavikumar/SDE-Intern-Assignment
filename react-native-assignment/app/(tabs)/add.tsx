import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Add() {
  return (
    <View style={styles.container}>
      <Text>Add Screen</Text>
    </View>
  );
}

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
