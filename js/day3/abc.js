// # # functions in js :--
// # # what is function ?
// # # function is reusable block of code that can be invoked when ever we want to call it

// # # syntax of function in js :-
// # # function fun_name(){
// # #     #code to execute
// # # }

// # # types of functions in js :--
// # # inbuilt :-- alert() prompt() confirm() setTimeout() setinterval() etc..
// # # userdefined :-- login() , register(), addToCart() etc..

// # # types of functions in terms synatx and types :-
// # 1. function definition  / function statement
// # nrml function with function keyword followed by function_name and ()
// # function login(){
// #     # code
// # }

// # 2.anonymus function
// # the function without anyname is called anonymus function
// # function (){

// # }

// # 3.function expression
// # assigning a anonymus function to a var is called as function expression

// # let a=function (){

// # }

// # 4.named function expression
// # assigning a function with name to a var is called as  named function expression
// # let xyz=function a(){

// # }

// # 5.arrow function
// # the function with arrow symbols and shorter form of nrml function
// # let login=()=>{

// # }

// # 6.closures

// let name="vamsi"
// let email="vamsi@gmail.com"
// let password="12345678"

// function login(){
//     const a=10
//     const b=20
//     var c=20
//     let d=30
// console.log("login function")
// }
// login()

// when i used to invoke r call the function
// function execution context ( FEC ) like GEc will create in callstack

// let email = "vamsi@gmail.com";
// let password = "12345678";

// function login(x, y) {
//   if (email == x && password == y) {
//     alert("login successful");
//   } else {
//     alert("invalid credentials");
//   }
// }
// login("Vamsi@gmail.com", "123456789");


// the process of checking vars present in local memeory r not and going to parent memory for cheking vars present over there is called as lexical scope


//  what will happen if i have more functions and call them one by one ?


//  function lopala unna vars ni outside of function access cheyyoccha ?


function mul(){
    let a=10
    let b=20
    let c=a*b
    console.log(c)
}
mul()
let c=10
console.log(c)

what is scope ? 
the space / area where i can access vars r functions that space is called as scope 