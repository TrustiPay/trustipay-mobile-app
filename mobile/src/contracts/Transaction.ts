export type Transaction = {
 id: string
 fromDeviceId: string
 toDeviceId: string
 amount: number
 currency: "LKR"
 nonce: number
 timestamp: number
 prev_hash: string
 tx_hash: string
 signature: string
}