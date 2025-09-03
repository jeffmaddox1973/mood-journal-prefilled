
import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme, Platform } from 'react-native';
import Today from './screens/Today';
import History from './screens/History';
import Settings from './screens/Settings';
import Paywall from './screens/Paywall';
import { initDB } from './lib/db';
import Purchases, { LOG_LEVEL } from 'react-native-purchases';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function TabsNav() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Today" component={Today} />
      <Tabs.Screen name="History" component={History} />
      <Tabs.Screen name="Settings" component={Settings} />
      <Tabs.Screen name="Paywall" component={Paywall} />
    </Tabs.Navigator>
  );
}

export default function App() {
  const scheme = useColorScheme();
  useEffect(() => {
    initDB();
    Purchases.setLogLevel(LOG_LEVEL.WARN);
    if (Platform.OS === 'ios') {
      Purchases.configure({ apiKey: 'YOUR_REVENUECAT_APPLE_API_KEY' });
    } else {
      Purchases.configure({ apiKey: 'YOUR_REVENUECAT_GOOGLE_API_KEY' });
    }
  }, []);

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={TabsNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
