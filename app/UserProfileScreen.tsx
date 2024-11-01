import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const UserProfileScreen = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutButton}>Logout</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image URL
        style={styles.profileImage}
      />
      <Text style={styles.infoText}>User Name: Shop Smart</Text>
      <Text style={styles.infoText}>Email: ShopSmart@example.com</Text>
      <Text style={styles.infoText}>Address: 123 Main St, Barrie</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  header: {
    width: '100%',
    alignItems: 'flex-end',
  },
  logoutButton: {
    color: '#007BFF',
    fontSize: 16,
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default UserProfileScreen;
