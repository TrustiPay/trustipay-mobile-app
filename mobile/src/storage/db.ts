import SQLite from "react-native-sqlite-storage"

SQLite.enablePromise(true)

export async function openDB(){

 return SQLite.openDatabase({
  name:"trustipay.db",
  location:"default"
 })

}