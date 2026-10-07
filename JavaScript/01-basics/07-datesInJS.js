//  Dates 

const myDate = new Date()

// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())

let myCreateDate = new Date(1791396309490)
// let myCreateDate = new Date("09-23-2026")
// console.log(myCreateDate.toLocaleString())
// console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(myCreateDate.getTime()/1000))

// console.log(myCreateDate.toUTCString())
// console.log(Math.floor(myCreateDate.getTime()/1000))

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getMonth());

// let dateDescription =`today was ${newDate.getDate()}  and `

console.log(newDate.toLocaleDateString('default',{
    weekday:"long"
}))

