
import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function MoodPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8 }}>
      {[1,2,3,4,5].map(n => (
        <Pressable key={n} onPress={() => onChange(n)} style={{ padding: 12, borderRadius: 12, borderWidth: value===n?2:1 }}>
          <Text style={{ fontSize: 18 }}>{n}</Text>
        </Pressable>
      ))}
    </View>
  );
}
