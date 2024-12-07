import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const ItemDetail = () => {
  const { itemName, itemImage } = useLocalSearchParams();

  // Ensure `itemImage` is a string
  const imageUri = Array.isArray(itemImage) ? itemImage[0] : itemImage;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.itemImage} />
      <Text style={styles.itemName}>{itemName}</Text>
      <Text style={styles.description}>Select quantity and add to cart.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  itemImage: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default ItemDetail;
