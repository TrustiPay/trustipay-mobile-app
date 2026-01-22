import SHA256 from "crypto-js/sha256"

export function hash(data:string){

 return SHA256(data).toString()

}