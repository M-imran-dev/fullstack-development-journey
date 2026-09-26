// Conversion to Number
let score = "44abc"

let scoreNumber = Number(score)
console.log(typeof scoreNumber)
console.log(scoreNumber);


// when score "44abc" => NaN
// true => 1  false => 0

// Conversion to Boolean

let isLoggedIn = "imran"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn);

// when "imran" converted to boolean it will give you true, string is not empty
// "" =>  false 
// 0 => false 
// 231 =>  true -2424 =>  false 

// Conversion to String 

let someNumber = 45

let stringSomeNumber = String(someNumber)
console.log(typeof stringSomeNumber)
console.log(stringSomeNumber)

// number 33 =>  converted to string 
// boolean true/false => converted to string 