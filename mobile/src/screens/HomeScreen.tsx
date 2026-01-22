import React from "react"
import {View,Text,Button} from "react-native"

import {createTransaction} from "../ledger/createTransaction"
import {savePending} from "../storage/pendingRepo"
import {appendLedger} from "../ledger/appendLedger"

export default function HomeScreen(){

 async function createTx(){

  const tx = await createTransaction(
   "device_A",
   "device_B",
   100
  )

  await savePending(tx)

  await appendLedger(tx)

  console.log("TX:",tx)

 }

 return(

  <View style={{padding:20}}>

   <Text style={{fontSize:22}}>TrustiPay</Text>

   <Button
    title="Create Transaction"
    onPress={createTx}
   />

  </View>

 )

}