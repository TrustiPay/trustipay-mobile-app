import {openDB} from "./db"
import {Transaction} from "../contracts/Transaction"

export async function savePending(tx:Transaction){

 const db = await openDB()

 await db.executeSql(
  "INSERT INTO pending_tx(id,payload,status,created_at) VALUES(?,?,?,?)",
  [
   tx.id,
   JSON.stringify(tx),
   "pending",
   Date.now()
  ]
 )

}