import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const UserProfileScreen = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/LoginScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={{ uri: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg' }} // Placeholder image URL
          style={styles.profileImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.label}>User Name:</Text>
          <View style={styles.textBox}>
            <Text style={styles.textBoxText}>Shop Smart</Text>
          </View>

          <Text style={styles.label}>Email:</Text>
          <View style={styles.textBox}>
            <Text style={styles.textBoxText}>ShopSmart@example.com</Text>
          </View>

          <Text style={styles.label}>Address:</Text>
          <View style={styles.textBox}>
            <Text style={styles.textBoxText}>123 Main St, Barrie</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light background for a clean look
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Darker text for readability
  },
  textBox: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2, // Shadow for a subtle 3D effect
  },
  textBoxText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#007BFF', // Consistent button color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    alignSelf: 'stretch',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
