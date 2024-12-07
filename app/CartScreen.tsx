import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';  // Import useRouter for navigation

const CartScreen: React.FC = () => {
  // Initialize router
  const router = useRouter();

  // Hardcoded cart items
  const cartItems = [
    {
      itemName: 'Apple',
      quantity: 3,
      price: 1.5, // price per item in USD
    },
    {
      itemName: 'Orange',
      quantity: 2,
      price: 2.0,
    },
    {
      itemName: 'Shampoo',
      quantity: 1,
      price: 5.0,
    },
    {
      itemName: 'Toothpaste',
      quantity: 4,
      price: 2.5,
    },
    {
      itemName: 'Detergent',
      quantity: 2,
      price: 3.0,
    },
    {
      itemName: 'Chocolates',
      quantity: 5,
      price: 1.0,
    },
  ];

  // Define image URLs based on item name
  const itemImages: { [key: string]: string } = {
    Apple: 'https://placehold.co/1000x200/B3D9FF/007BFF/png?text=A',
    Orange: 'https://placehold.co/1000x200/B3D9FF/007BFF/png?text=O',
    Shampoo: 'https://placehold.co/1000x200/B3D9FF/007BFF/png?text=S',
    Toothpaste: 'https://placehold.co/1000x200/B3D9FF/007BFF/png?text=T',
    Detergent: 'https://placehold.co/1000x200/B3D9FF/007BFF/png?text=D',
    Chocolates: 'https://placehold.co/1000x200/B3D9FF/007BFF/png?text=C',
  };

  // Calculate total price
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  // Handle checkout
  const handleCheckout = () => {
    Alert.alert('Order placed!', 'Your order will be available to pick-up in 30 minutes.', [
      {
        text: 'OK',
        onPress: () => {
          // Navigate to CustomerHomeScreen after alert is closed
          router.push('/CustomerHomeScreen');  // Replace '/home' with the correct path for CustomerHomeScreen
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>

      {/* Display all cart items */}
      {cartItems.map((item, index) => (
        <View key={index} style={styles.cartItem}>
          <Image
            source={{
              uri: itemImages[item.itemName],
            }}
            style={styles.itemImage}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.itemName}</Text>
            <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
            <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
            <Text style={styles.total}>Total: ${(item.quantity * item.price).toFixed(2)}</Text>
          </View>
        </View>
      ))}

      {/* Total Amount */}
      <Text style={styles.totalAmount}>Total Amount: ${totalAmount.toFixed(2)}</Text>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    color: '#555',
  },
  price: {
    fontSize: 16,
    color: '#555',
  },
  total: {
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  checkoutButton: {
    backgroundColor: '#007BFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 40,
  },
  checkoutButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
