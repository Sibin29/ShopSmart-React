// screens/LogInPartnerScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter

const LogInPartnerScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [storenum, setStorenum] = useState('');
  const router = useRouter(); // Use the router hook

  const handleLogin = () => {
    // Navigate to the HomeScreen
    router.push('/HomeScreen'); // Use router.push to navigate
  };
  const handleSignup = () => {
    // Navigate to the SignupScreen
    router.push('/SignupScreen'); // Use router.push to navigate
  };


  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Login to your ShopSmart Partner Account!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Store Number"
        value={storenum}
        onChangeText={setStorenum}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(handleSignup)}>
        <Text style={styles.linkText}>Sign Up as Partner</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif', // Replace with your custom font if needed
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007BFF',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LogInPartnerScreen;
