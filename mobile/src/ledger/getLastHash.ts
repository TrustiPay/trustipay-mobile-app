import {openDB} from "../storage/db"

export async function getLastHash(){

 const db = await openDB()

 const [res] = await db.executeSql(
  "SELECT tx_hash FROM ledger ORDER BY idx DESC LIMIT 1"
 )

 if(res.rows.length === 0){

  return "GENESIS"

 }

 return res.rows.item(0).tx_hash

}