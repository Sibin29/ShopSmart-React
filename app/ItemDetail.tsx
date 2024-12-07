import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useLocalSearchParams, useRouter } from 'expo-router';  // Use useRouter for navigation

const ItemDetail: React.FC = () => {
  // Fetch query params using useLocalSearchParams hook
  const { itemName, itemImage } = useLocalSearchParams();

  // Hardcoded item costs for each item
  const itemCosts: { [key: string]: number } = {
    Apple: 1.5,
    Orange: 2.0,
    Shampoo: 5.0,
    Toothpaste: 2.5,
    Detergent: 3.0,
    Chocolates: 1.0,
  };

  const [quantity, setQuantity] = useState<number>(1);
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const router = useRouter(); // To handle navigation

  const handleToggleCart = () => {
    if (isInCart) {
      alert(`${itemName} removed from cart`);
    } else {
      alert(`${itemName} added to cart with quantity ${quantity}`);
    }
    setIsInCart(!isInCart);
  };

  // Navigate to Cart Screen
  const handleGoToCart = () => {
    router.push('/CartScreen');  // Navigate to CartScreen using expo-router
  };

  return (
    <View style={styles.container}>
      {/* Item Image */}
      <Image source={{ uri: Array.isArray(itemImage) ? itemImage[0] : itemImage }} style={styles.itemImage} />

      {/* Item Name */}
      <Text style={styles.itemName}>{itemName}</Text>

      {/* Item Cost */}
      <Text style={styles.itemCost}>Cost: ${itemCosts[itemName]?.toFixed(2)}</Text>

      {/* Quantity Picker */}
      <Text style={styles.label}>Select Quantity:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={quantity}
          onValueChange={(itemValue) => setQuantity(Number(itemValue))}
          style={styles.picker}>
          {[...Array(10)].map((_, index) => (
            <Picker.Item key={index + 1} label={`${index + 1}`} value={index + 1} />
          ))}
        </Picker>
      </View>

      {/* Toggle Button (Add to Cart / Remove from Cart) */}
      <TouchableOpacity style={styles.addButton} onPress={handleToggleCart}>
        <Text style={styles.addButtonText}>
          {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </Text>
      </TouchableOpacity>

      {/* Go to Cart Button (Visible when item is in the cart) */}
      {isInCart && (
        <TouchableOpacity style={styles.goToCartButton} onPress={handleGoToCart}>
          <Text style={styles.goToCartButtonText}>Go to Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  itemImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  itemCost: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  goToCartButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  goToCartButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ItemDetail;
