import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();
  const shops = [
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Orange' },
    { id: '3', name: 'Shampoo' },
    { id: '4', name: 'Toothpaste' },
    { id: '5', name: 'Detergent' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput style={styles.searchBar} placeholder="Search Inventory..." />
        <TouchableOpacity onPress={() => router.push('/UserProfileScreen')}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Items</Text>
      <FlatList
        data={shops}
        renderItem={({ item }) => (
          <View style={styles.shopItemContainer}>
            <View style={styles.shopItem}>
              <Image
                source={{ uri: 'https://placehold.co/1000x200/B3D9FF/007BFF/png?text='+ item.name }} // Updated placeholder image URL
                style={styles.shopImage}
              />
            </View>
            <Text style={styles.shopName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2} // Adjusting for larger items per row
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
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
  shopItemContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  shopItem: {
    width: '90%', // Horizontal size
    height: 150, // Vertical size
    backgroundColor: '#B3D9FF', // Lighter shade of #007BFF that is used for buttons
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Shadow for the rectangles
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  shopImage: {
    width: 190,
    height: 230,
    resizeMode: 'contain',
  },
  shopName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;
