import {openDB} from "../storage/db"
import {Transaction} from "../contracts/Transaction"

export async function appendLedger(tx:Transaction){

 const db = await openDB()

 await db.executeSql(
  "INSERT INTO ledger(tx_id,prev_hash,tx_hash,created_at) VALUES(?,?,?,?)",
  [
   tx.id,
   tx.prev_hash,
   tx.tx_hash,
   Date.now()
  ]
 )

}