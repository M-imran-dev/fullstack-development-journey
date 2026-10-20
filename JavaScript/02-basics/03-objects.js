// singleton
// Object.create
// object literals

const JsUser = {
    name: "Muhammad Imran",
    "full name": "Imran Darwaish",
    email: "imran@google.com",
    age: 18,
    alive: true,
    interest: ["Books Reading", "Coding", "Software Engineering", "Business","Travel"],
    greet: function(){
        console.log("Hello JsUser")
    },
    greetWithName: function(){
        console.log('Hello JsUser, ${this.name} ')
    },

    address: {
        city: "Dikhan",
        village: "girsal",
        zipcode: 29140
    }
}

// console.log(JsUser.name)
// console.log(JsUser.address)
// console.log(JsUser["full name"])
// console.log(JsUser["address"])

JsUser.email = "imran@chatgpt.com"
// console.log(JsUser["email"]);

// Locking Object Cannot modify object JsUser

// Object.freeze(JsUser)
// JsUser.email = "imran@metaAI.com"
console.log(JsUser["email"]);

JsUser.aliveStatus = function(){
    console.log(`Yes, ${this.name} is Alive `)
}

console.log(JsUser.aliveStatus())
console.log(JsUser.aliveStatus) // return function Anonymous 

console.log(JsUser.greetWithName());

