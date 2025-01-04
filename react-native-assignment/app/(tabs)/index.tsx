import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SearchBar from '../../components/SearchBar';
import Section from '../../components/Section';

const Index = () => {
  const [trendingHashtags, setTrendingHashtags] = useState<
    { image: string; place: string }[]
  >([]);
  const [topCommunity, setTopCommunity] = useState<
    { image: string; place: string }[]
  >([]);
  const [topNomads, setTopNomads] = useState<
    { image: string; place: string }[]
  >([]);

  useEffect(() => {
    const generateData = (count: number) => {
      const places = [
        'New York',
        'Paris',
        'Tokyo',
        'London',
        'Sydney',
        'Berlin',
        'Rome',
        'Barcelona',
        'Dubai',
        'Bangkok',
      ];
      return Array.from({ length: count }, (_, i) => ({
        image: `https://picsum.photos/200?random=${i}`,
        place: places[i % places.length],
      }));
    };

    setTrendingHashtags(generateData(10));
    setTopCommunity(generateData(8));
    setTopNomads(generateData(6));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.title}>Discover the World</Text>

      <SearchBar />

      <View style={styles.featuredImageWrapper}>
        <Image
          style={styles.featuredImage}
          source={{ uri: 'https://picsum.photos/600/300' }}
        />
        <Text style={styles.featuredText}>#Top search of the day</Text>
      </View>

      <Section
        title="Trending hashtags"
        data={trendingHashtags}
        type="trendingItem"
      />
      <Section title="Top community" data={topCommunity} type="communityItem" />
      <Section title="Top nomads" data={topNomads} type="nomadItem" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF2F5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 35,
    color: '#648287',
  },
  featuredImageWrapper: {
    position: 'relative',
    marginBottom: 10,
  },
  featuredImage: {
    width: '100%',
    height: 220,
    borderRadius: 10,
  },
  featuredText: {
    position: 'absolute',
    top: '83%',
    left: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },
});

export default Index;
