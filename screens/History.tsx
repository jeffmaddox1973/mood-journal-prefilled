
import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useStore } from '../lib/store';

export default function History() {
  const { entries, loadEntries } = useStore();
  useEffect(() => { loadEntries(); }, []);

  return (
    <FlatList
      contentContainerStyle={{ padding: 20, gap: 8 }}
      data={entries}
      keyExtractor={i => i.id}
      renderItem={({ item }) => (
        <View style={{ padding: 12, borderWidth:1, borderRadius:12, marginBottom:10 }}>
          <Text>{new Date(item.date).toDateString()} • Mood {item.mood}</Text>
          {item.note ? <Text>{item.note}</Text> : null}
        </View>
      )}
    />
  );
}
