import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const InventoryScreen = () => {
  const router = useRouter();
  const shops = [
    { id: '1', name: 'Apple', image: 'https://placehold.co/200x200/B3D9FF/007BFF/png?text=Apple' },
    { id: '2', name: 'Orange', image: 'https://placehold.co/200x200/B3D9FF/007BFF/png?text=Orange' },
    { id: '3', name: 'Shampoo', image: 'https://placehold.co/200x200/B3D9FF/007BFF/png?text=Shampoo' },
    { id: '4', name: 'Toothpaste', image: 'https://placehold.co/200x200/B3D9FF/007BFF/png?text=Toothpaste' },
    { id: '5', name: 'Detergent', image: 'https://placehold.co/200x200/B3D9FF/007BFF/png?text=Detergent' },
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
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/ItemDetail',
                params: { itemName: item.name, itemImage: item.image },
              })
            }
            style={styles.shopItemContainer}
          >
            <View style={styles.shopItem}>
              <Image source={{ uri: item.image }} style={styles.shopImage} />
            </View>
            <Text style={styles.shopName}>{item.name}</Text>
          </TouchableOpacity>
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
    width: '90%',
    height: 150,
    backgroundColor: '#B3D9FF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
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

export default InventoryScreen;
