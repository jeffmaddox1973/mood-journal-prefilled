cat > screens/Paywall.tsx <<'TSX'
import React from 'react';
import { View, Text } from 'react-native';

export default function Paywall() {
  return (
    <View style={{ padding: 20, gap: 12 }}>
      <Text style={{ fontSize: 24, fontWeight: '700' }}>Pro Coming Soon</Text>
      <Text>Subscriptions will be enabled after App Store products and RevenueCat are configured.</Text>
    </View>
  );
}
TSX

