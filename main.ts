// export const a = "Hifza"
// ek hi varibale ma 3o types 
let a : string | number | boolean = "hifza";

a = 10
a = "hifza"
a = true

// 

// let age: number = 22;

// console.log(age.toFixed(2))     // number ke sath zero lagana h 

let firstName: string = "hifza";

console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())


// norowing methods 
// let age: string | number ;

// age = 22

// age.toFixed(2);

// // age = "22"           // is tha bhi kr sakty hn 

// let age: string | Number = "22";

// console.log(typeof age)

// let age: string | Number = typeof ;
// wrronge method
// if(typeof age === "string"){
//     age.toUpperCase()
// } else {
//     age.
// }

// let newAge = Math.random() > 0.5 ? 22 : "Khan";
// console.log(newAge)

// if (typeof newAge === "string"){
//     newAge.toUpperCase()
// } else {
//     newAge.toFixed(2)
// }

//  litrial type wo hoti hn jis ke ander hum value likh rhy bhoty hn 

// let trafficLight: "red" | "green" | "Yellow" ="Yellow";

// trafficLight = "Yellow"; 


// OBJECTS
// let teacher: {
//     name: string,
//     salary: number,
//     "full-Name" : string
// } = {
//     name: "Hifza",
//     salary: 30000,
//     "full-Name" : "Hifza Zafar"
// }

// teacher.name // 
// console.log(teacher["full-Name"] )  // square [] is not means its connected to arrey
// teacher.salary


// OBJECT aliased  ( aliased means short )

type Student = string | boolean | number | undefined

// let a: string | boolean | number | undefined
// let b: string | boolean | number | undefined   // bad practices

// let a: Student;
// let b: Student;

// type Student =
//  {
//     name: string,
//     age: number
// }
// let student1: Student = {
//     name: "hifza",
//     age: 123123
// }
// let student2:Student = {
//     name: "hif",
//     age: 123321
// }

// Object

type Deal1 = {                    // type help krti hn object banane ke liya
    food: string,
    drink: string
}

type Deal2 = {
    food: string
}

let Order1: Deal2 = {
    food: "Biryani",
}
let Order2: Deal1 = {
    food: "Biryani",
    drink: "water"
}

Order1 = Order2;
// Order2 = Order1;    // 

// interface or type is same 


let student = { name: "hifza"}             // fresh Object
let student1=student     // stale Object
