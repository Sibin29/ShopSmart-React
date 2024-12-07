// app/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: '' }} />
      <Stack.Screen name="LoginScreen" options={{ title: 'Login to continue' }} />
      <Stack.Screen name="SignupScreen" options={{ title: 'Create a new account' }} />
      <Stack.Screen name="LogInPartnerScreen" options={{ title: 'Login as Partner' }} />
      <Stack.Screen name="SignupPartnerScreen" options={{ title: 'Create a new account as Partner' }} />
      <Stack.Screen name="ManagerHomeScreen" options={{ title: 'Inventory' }} />
      <Stack.Screen name="CustomerHomeScreen" options={{ title: 'All Shops' }} />
      <Stack.Screen name="UserProfileScreen" options={{ title: 'My Profile' }} />
      <Stack.Screen name="InventoryScreen" options={{ title: 'Shop for items' }} />
    </Stack>
  );
}
