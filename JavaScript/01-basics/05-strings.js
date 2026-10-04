const name = "Muhammad Imran"
const repoCount = 50

let funName = function(){
    let name="khan g"
    let age = 19
}

// console.log(name + repoCount + " LinkedIn") this is very outdated way 
console.log(`My name is ${name} Aspiring Full Stack Development and total rep ${repoCount} on github`) // we use it most in future

// second way of string declaring with object like

const hobbyName = new String('Full Stack Developer')

// console.log(hobbyName)
// console.log(hobbyName.toLowerCase)

// console.log(hobbyName.length)
// console.log(hobbyName.toUpperCase())
// console.log(hobbyName.toLowerCase())
// console.log(hobbyName.charAt(5))
// console.log(hobbyName.indexOf('D'))

const newString = hobbyName.substring(0, 4)
console.log(newString)

const anotherString = hobbyName.slice(-8, 4)
console.log(anotherString)

// const imranPsdOne = "     imrankhan"
// const imranPsdTwo = "     imran khan        "

// console.log(imranPsdOne)
// console.log(imranPsdOne.trim())
// console.log(imranPsdTwo)
// console.log(imranPsdTwo.trim())

// const url = "https://imran20%engineer.com"
// console.log(url.replace('20%', '-' ))
// console.log(url.includes('hitesh')) 

// Remember String are very important for any language 
const sentence = "what is your name"

console.log(sentence.split(' ')) // will split in array base on our choice