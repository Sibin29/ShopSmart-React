// app/WelcomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to ShopSmart!</Text>
      <Button title="Go to Login" onPress={() => router.push('/LoginScreen')} />
    </View>
  );
}
