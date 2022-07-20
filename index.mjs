/* esercizio 01 */
function Sum(a, b){
  return a+b
}

console.log(Sum(5,6))

/* esercizio 02  */
const crypto = require("crypto");

 module.exports= id = crypto.randomBytes(10).toString("hex");

/*  console.log(id) */

/* esercizio 04 */

module.exports= function Saluta(msg){
  return console.log(`${msg}`)
}

function Ciao(msg){
  console.log(`${msg}`)
}

export default {Ciao}