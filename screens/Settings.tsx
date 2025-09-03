
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { requestPerms, scheduleDaily } from '../lib/notifications';

export default function Settings() {
  const [hour, setHour] = useState(20);
  const [minute, setMinute] = useState(0);
  return (
    <View style={{ padding: 20, gap: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>Reminders</Text>
      <Text>Daily at {hour}:{minute.toString().padStart(2,'0')}</Text>
      <Button title="Enable Notifications" onPress={async()=>{ await requestPerms(); await scheduleDaily(hour,minute); }} />
    </View>
  );
}
