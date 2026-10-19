const myHeroes = ["Imran Khan", "Hitesh Choudhary","Imran Darwaish"]
const favBooks = ["The Alchemist","Atomic Habit","Think and Grow Rich"]

myHeroes.push(favBooks);
// console.log(myHeroes);

const myAll = myHeroes.concat(favBooks);
// console.log(myHeroes);

const my_All_Heroes = [...myHeroes,...favBooks]
// console.log(my_All_Heroes)

const numbers = [1, 2, 3, 4, [5, 6], 7, [8, 9, [10, 11, 12]]]

const allNumbers = numbers.flat(Infinity);
// console.log(allNumbers)

console.log(Array.isArray("Imran", 1, 2 ,3, 4))
console.log(Array.from("Imran Darwaish"))

const num1 = 300
const num2 = 400
const num3 = 500
const num4 = 600
const num5 = 700

console.log(Array.of(num1, num2, num3, num4, num5))
