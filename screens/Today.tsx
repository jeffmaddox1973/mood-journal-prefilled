
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import MoodPicker from '../components/MoodPicker';
import { useStore } from '../lib/store';

export default function Today() {
  const addEntry = useStore(s=>s.addEntry);
  const [mood, setMood] = useState(3);
  const [note, setNote] = useState('');
  return (
    <View style={{ padding: 20, gap: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '600' }}>How are you today?</Text>
      <MoodPicker value={mood} onChange={setMood} />
      <TextInput placeholder="Add a note" value={note} onChangeText={setNote} style={{ borderWidth:1, padding:12, borderRadius:12 }} />
      <Button title="Save" onPress={() => addEntry({ date: new Date().toISOString(), mood, note })} />
    </View>
  );
}
