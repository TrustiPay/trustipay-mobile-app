import SHA256 from "crypto-js/sha256"

export function verify(data:string,signature:string,privateKey:string){

 const expected = SHA256(data + privateKey).toString()

 return expected === signature

}