import SHA256 from "crypto-js/sha256"

export function sign(data:string, privateKey:string){

 return SHA256(data + privateKey).toString()

}