// Conversion to Number
let score = "44abc"

let scoreNumber = Number(score)
// console.log(typeof scoreNumber)
// console.log(scoreNumber);


// when score "44abc" => NaN
// true => 1  false => 0

// Conversion to Boolean

let isLoggedIn = "imran"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn);

// when "imran" converted to boolean it will give you true, string is not empty
// "" =>  false 
// 0 => false 
// 231 =>  true -2424 =>  false 

// Conversion to String 

let someNumber = 45

let stringSomeNumber = String(someNumber)
// console.log(typeof stringSomeNumber)
// console.log(stringSomeNumber)

// number 33 =>  converted to string 
// boolean true/false => converted to string 

// *********************** Operations ***********************

let value = 10
let changeValue = -value 
// console.log(changeValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%3)

let str1 = "imran"
let str2 = " Developer"
let str3 = str1 + str2 
// console.log(str3);

// console.log("2" + 3);
// console.log(2 + "3");
// console.log("2" + 3 + 3);
// console.log(2 + 3 + "3");
// console.log("3" + "3");

console.log((4 + 3 )* 7 %2) // we have to write a code which is readable

let num1,num2, num3
num1 = num2 = num3 = 4+7 //this is not a good practice code must be readable 
// console.table([num1,num2,num3])

let gameCounter = 100
++gameCounter

console.log(gameCounter);






