
import { create } from 'zustand';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import { upsertEntry, listEntries } from './db';

export type Entry = { id: string; date: string; mood: number; note?: string; tags?: string[] };

type State = {
  entries: Entry[];
  loadEntries: () => Promise<void>;
  addEntry: (e: Omit<Entry, 'id'>) => Promise<void>;
};

export const useStore = create<State>((set) => ({
  entries: [],
  loadEntries: async () => {
    const data = await listEntries();
    set({ entries: data.map((r: any) => ({ id: r.id, date: r.date, mood: r.mood, note: r.note, tags: JSON.parse(r.tags || '[]') })) });
  },
  addEntry: async (e) => {
    const entry = { id: uuid(), ...e };
    await upsertEntry(entry);
    const data = await listEntries();
    set({ entries: data.map((r: any) => ({ id: r.id, date: r.date, mood: r.mood, note: r.note, tags: JSON.parse(r.tags || '[]') })) });
  }
}));
