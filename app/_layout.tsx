// app/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Welcome' }} />
      <Stack.Screen name="LoginScreen" options={{ title: 'Login' }} />
      <Stack.Screen name="SignUp" options={{ title: 'SignUp' }} />
      <Stack.Screen name="HomeScreen" options={{ title: 'Shops' }} />
      <Stack.Screen name="UserProfileScreen" options={{ title: 'Profile' }} />
    </Stack>
  );
}
