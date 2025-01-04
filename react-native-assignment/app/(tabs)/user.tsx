import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function User() {
  return (
    <View style={styles.container}>
      <Text>User Screen</Text>
    </View>
  );
}

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
