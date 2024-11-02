// screens/SignUpScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter

const SignUpScreen = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');
  const router = useRouter(); // Use the router hook


  const handleSignUp = () => {
    // Navigate to the HomeScreen
    router.push('/HomeScreen'); // Use router.push to navigate
  };
  const handleLogin = () => {
    // Navigate to the LoginScreen
    router.push('/LoginScreen'); // Use router.push to navigate
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Create your ShopSmart account!</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={fname}
        onChangeText={setFname}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lname}
        onChangeText={setLname}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="default"
      />
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
        placeholder="Re-Enter Password"
        value={rpassword}
        onChangeText={setRpassword}
        keyboardType="visible-password"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Already Have Account?</Text>
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
    marginBottom: 12,
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

export default SignUpScreen;
