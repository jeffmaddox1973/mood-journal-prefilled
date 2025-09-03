
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { getOfferings, purchasePackage } from '../lib/purchases';

export default function Paywall() {
  const [pkg, setPkg] = useState<any>(null);
  useEffect(() => { (async() => {
    try {
      const offering = await getOfferings();
      const candidate = offering?.availablePackages?.[0];
      setPkg(candidate);
    } catch (e) { /* ignore */ }
  })(); }, []);

  return (
    <View style={{ padding: 20, gap: 12 }}>
      <Text style={{ fontSize: 24, fontWeight: '700' }}>Go Pro</Text>
      <Text>Unlock unlimited history, export, themes, and more.</Text>
      <Button title="Start Free Trial" onPress={async()=>{
        try {
          if (!pkg) return;
          const info = await purchasePackage(pkg);
          Alert.alert('Thanks!', 'Purchase successful.');
        } catch (e:any) {
          Alert.alert('Purchase failed', e?.message || 'Please try again.');
        }
      }} />
    </View>
  );
}
