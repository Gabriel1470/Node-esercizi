function Sum(a, b){
  return a+b
}

console.log(Sum(5,6))


const crypto = require("crypto");

const id = crypto.randomBytes(10).toString("hex");

console.log(id)