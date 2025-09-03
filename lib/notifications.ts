
import * as Notifications from 'expo-notifications';

export async function requestPerms() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
}

export async function scheduleDaily(hour = 20, minute = 0) {
  await Notifications.cancelAllScheduledNotificationsAsync();
  await Notifications.scheduleNotificationAsync({
    content: { title: 'How are you feeling?', body: "Log today's mood in 10 seconds." },
    trigger: { hour, minute, repeats: true },
  });
}
