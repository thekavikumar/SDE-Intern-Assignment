import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function People() {
  return (
    <View style={styles.container}>
      <Text>People Screen</Text>
    </View>
  );
}

export default People;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
