const score = 300
// console.log(score)

const balance = new Number(200)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 332.83242
// console.log(otherNumber.toPrecision(5))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-PK'))

//++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(23))
// console.log(Math.round(7.7))
// console.log(Math.ceil(7.9))     // we not use mostly
// console.log(Math.floor(7.999)) // we not use mostly
// console.log(Math.min(2,45,42,4,9))
// console.log(Math.max(2,45,42,4,9))

console.log(Math.random()) // give random value between 0 and 1
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min + 1)) + min)
