import {openDB} from "./db"

export async function initDB(){

 const db = await openDB()

 await db.executeSql(`
 CREATE TABLE IF NOT EXISTS pending_tx(
  id TEXT PRIMARY KEY,
  payload TEXT,
  status TEXT,
  created_at INTEGER
 )
 `)

 await db.executeSql(`
 CREATE TABLE IF NOT EXISTS ledger(
  idx INTEGER PRIMARY KEY AUTOINCREMENT,
  tx_id TEXT,
  prev_hash TEXT,
  tx_hash TEXT,
  created_at INTEGER
 )
 `)

}