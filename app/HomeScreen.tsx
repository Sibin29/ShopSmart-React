import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();
  const shops = [
    { id: '1', name: 'Shoppers' },
    { id: '2', name: 'No Frills' },
    { id: '3', name: 'Rexall' },
    { id: '4', name: 'Circle K' },
    { id: '5', name: 'Dollarama' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.searchBar} placeholder="Search shops..." />
        <TouchableOpacity onPress={() => router.push('/UserProfileScreen')}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Shops</Text>
      <FlatList
        data={shops}
        renderItem={({ item }) => (
          <View style={styles.shopItem}>
            <Text style={styles.shopName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  profileIcon: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  shopItem: {
    flex: 1,
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  shopName: {
    fontSize: 16,
  },
});

export default HomeScreen;
