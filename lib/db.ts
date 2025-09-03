
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mood.db');

export function initDB() {
  db.transaction(tx => {
    tx.executeSql(`CREATE TABLE IF NOT EXISTS entries (
      id TEXT PRIMARY KEY NOT NULL,
      date TEXT NOT NULL,
      mood INTEGER NOT NULL,
      note TEXT,
      tags TEXT
    );`);
    tx.executeSql(`CREATE TABLE IF NOT EXISTS meta (
      key TEXT PRIMARY KEY NOT NULL,
      value TEXT
    );`);
    tx.executeSql(`CREATE INDEX IF NOT EXISTS idx_entries_date ON entries(date);`);
  });
}

export function upsertEntry(e: { id: string; date: string; mood: number; note?: string; tags?: string[] }) {
  return new Promise<void>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT OR REPLACE INTO entries (id, date, mood, note, tags) VALUES (?,?,?,?,?)`,
        [e.id, e.date, e.mood, e.note ?? '', JSON.stringify(e.tags ?? [])],
        () => resolve(),
        (_, err) => { reject(err); return false; }
      );
    });
  });
}

export function listEntries(limit = 30, offset = 0): Promise<any[]> {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM entries ORDER BY date DESC LIMIT ? OFFSET ?`,
        [limit, offset],
        (_, { rows }) => resolve(rows._array || []),
        (_, err) => { reject(err); return false; }
      );
    });
  });
}
