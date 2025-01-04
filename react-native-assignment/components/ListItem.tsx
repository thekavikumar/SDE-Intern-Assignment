import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListItem = ({
  item,
  type,
}: {
  item: { image: string; place: string };
  type: string;
}) => (
  <View style={styles[type]}>
    <Image
      style={type === 'nomadItem' ? styles.nomadImage : styles.horizontalImage}
      source={{ uri: item.image }}
    />
    <Text
      style={type === 'nomadItem' ? styles.nomadPlaceName : styles.placeName}
    >
      {item.place}
    </Text>
  </View>
);

const styles: { [key: string]: any } = StyleSheet.create({
  horizontalImage: {
    width: 120,
    height: 140,
    borderRadius: 8,
    marginRight: 10,
  },
  trendingItem: {
    alignItems: 'center',
    position: 'relative',
  },
  communityItem: {
    alignItems: 'center',
    position: 'relative',
  },
  nomadItem: {
    alignItems: 'center',
    position: 'relative',
    marginTop: 10,
    marginBottom: 20,
  },
  placeName: {
    position: 'absolute',
    bottom: 5,
    left: 7,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    padding: 5,
    borderRadius: 5,
  },
  nomadImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginRight: 10,
  },
  nomadPlaceName: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
});

export default ListItem;
