import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import ListItem from './ListItem';

const Section = ({
  title,
  data,
  type,
}: {
  title: string;
  data: { image: string; place: string }[];
  type: string;
}) => (
  <View>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAllText}>See all</Text>
      </TouchableOpacity>
    </View>
    <FlatList
      horizontal
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <ListItem item={item} type={type} />}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 22,
    color: '#648287',
    fontWeight: '700',
    marginVertical: 10,
  },
  seeAllText: {
    color: '#648287',
  },
});

export default Section;
