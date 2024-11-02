// app/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: '' }} />
      <Stack.Screen name="LoginScreen" options={{ title: 'Login to continue' }} />
      <Stack.Screen name="SignupScreen" options={{ title: 'Create a new account as Partner' }} />
      <Stack.Screen name="LogInPartnerScreen" options={{ title: 'Login as Partner' }} />
      <Stack.Screen name="SignupScreenPartner" options={{ title: 'Create a new account' }} />
      <Stack.Screen name="HomeScreen" options={{ title: 'Shops' }} />
      <Stack.Screen name="UserProfileScreen" options={{ title: 'My Profile' }} />
    </Stack>
  );
}
