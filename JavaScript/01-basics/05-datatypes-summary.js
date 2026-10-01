                            // Datatypes in javaScript 
// Primitive dataTypes 
// Numeric 1) Number 2) bigint
// Non Numeric String, Boolean,Null,undefined,Symbol

// Non Primitive OR Referrence 
// Array, Objects,Functions 

let score = 100 //Number 
let Gpa = 3.9 //Number 
let sunDistance = 100000000000n

let myName = "Muhammad Imran"
let idVerify = true
let semester;
let university = undefined
let todayTemerature = null
let id = Symbol('12345') //if we want to uniquely represent something 
let anotherId = Symbol('12345') // even if its value is same they are diffrent

// console.log(id === anotherId)

                            //  Non-Primitive 
let arrStudent = ["M.Imran Full Stack", "M.Haseeb","Mehran Ahmad "]                 //Array

let myObject = {       // this is object represent by curly braces
    name: "Imran",
    age: 22,
    student: "CS",
    Expert:"Full Stack Developer",
    // here function,object,array or anything can come 
    // value are mostly in key value pair
}

// function(){} this is function notation
let myFunction = function(){
    console.log("Hello World!"); 
}

// console.log(typeof semester)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory (Primative Datatype), Heap(Non-Primitive)

let userOneEmail = "imran@google.com"

let userTwoEmail = userOneEmail
userTwoEmail = "imran@microsoft.com"

console.log(userOneEmail,userTwoEmail)

let myProfile = {
    name: "Imran",
    age : 18
}

let myFriendProfile = myProfile
myFriendProfile.name = "haseeb"
myFriendProfile.age = 22

console.table([myProfile,myFriendProfile])