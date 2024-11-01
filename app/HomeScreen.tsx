// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const shops = [
  { id: '1', name: 'Shop 1' },
  { id: '2', name: 'Shop 2' },
  { id: '3', name: 'Shop 3' },
  { id: '4', name: 'Shop 4' },
  { id: '5', name: 'Shop 5' },
  { id: '6', name: 'Shop 6' },
  { id: '7', name: 'Shop 7' },
  { id: '8', name: 'Shop 8' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shops</Text>
      <FlatList
        data={shops}
        renderItem={({ item }) => (
          <View style={styles.shopItem}>
            {/* Placeholder icon can be replaced with an actual icon later */}
            <Text style={styles.shopName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  shopItem: {
    flex: 1,
    margin: 8,
    height: 100, // Height of the square item
    borderRadius: 12,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopName: {
    fontSize: 18,
  },
});

export default HomeScreen;
