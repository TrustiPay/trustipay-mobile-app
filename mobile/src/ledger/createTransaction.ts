import {Transaction} from "../contracts/Transaction"
import {getNextNonce} from "./nonceManager"
import {getLastHash} from "./getLastHash"
import {hash} from "../crypto/hash"
import {sign} from "../crypto/sign"
import {v4 as uuidv4} from "uuid"
import 'react-native-get-random-values'

export async function createTransaction(
 fromDevice:string,
 toDevice:string,
 amount:number
):Promise<Transaction>{

 const nonce = getNextNonce()

 const prevHash = await getLastHash()

 const base = {
  id:uuidv4(),
  fromDeviceId:fromDevice,
  toDeviceId:toDevice,
  amount,
  currency: "LKR" as const,
  nonce,
  timestamp:Date.now(),
  prev_hash:prevHash
 }

 const txData =
  base.id +
  base.fromDeviceId +
  base.toDeviceId +
  base.amount +
  base.currency +
  base.nonce +
  base.timestamp +
  base.prev_hash

 const txHash = hash(txData)

 const signature = sign(txHash,"device_private_key")

 return {
  ...base,
  tx_hash:txHash,
  signature
 }

}