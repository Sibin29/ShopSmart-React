// app/WelcomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleLogInPartner = () => {
    // Navigate to the LogInPartnerScreen
    router.push('/LogInPartnerScreen'); // Use router.push to navigate
  };

  const handleSignupPartner = () => {
    // Navigate to the SignupScreen
    router.push('/SignupPartnerScreen'); // Use router.push to navigate
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to ShopSmart!</Text>
      <Text style={styles.loginPrompt}>Already have an account?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/LoginScreen')}
      >
        <Text style={styles.buttonText}>Login to continue</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(handleLogInPartner)}>
        <Text style={styles.linkText}>Login as Partner</Text>
      </TouchableOpacity>
      <Text style={styles.signupPrompt}>New to the app?</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/SignupScreen')}>
        <Text style={styles.buttonText}>Signup to get started</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(handleSignupPartner)}>
        <Text style={styles.linkText}>Sign Up as Partner</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  welcomeText: {
    fontSize: 46,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif', // Replace with your custom font if needed
  },
  loginPrompt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  signupPrompt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
    backgroundColor: '#007BFF',
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'sans-serif',
  },
  linkText: {
    color: '#007BFF',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
