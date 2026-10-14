// Arrays 

const myArr = [0,1,2,3,4,5,6,7]
const myHeros = ["Imran Khan","Quaid Azam","Allama Iqbal"]
// console.log(myArr[1])
// console.log(myHeros[1])

const myArr2 = new Array(1,2,3,"Imran Darwaish",false)

// console.log(myArr2[4]);

//  Array Methods

// myArr.push(10) // add value to array
// myArr.push(20)
// myArr.push(30)
// myArr.pop()
// myArr.pop() // remove the last value of array

// myArr.unshift(40)
// myArr.shift()

// console.log(myArr.includes(2))
// console.log(myArr.indexOf(4))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

// console.log(typeof newArr)

//  Slice & Splice Concept in Array

const myN1Arr = myArr.slice(2,5) // just print you slice copy of original Arr
console.log("A", myArr);
console.log(myN1Arr);

const myN2Arr = myArr.splice(1,4) //Splice remove the portion from orginal Arr
console.log("B", myArr);
console.log(myN2Arr);
