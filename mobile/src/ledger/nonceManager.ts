let currentNonce = 0

export function getNextNonce(){

 currentNonce += 1

 return currentNonce

}