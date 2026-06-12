/*
Create a faulty calculator using JavaScript

1. This Faulty calculator does following it takes two number as input from user
1. It performs wrong operation as follow :
     +.......> -
     *.......> +
     -.......> /
     /.......> %

It performa wrong operation 10 % of the time

*/


let random = Math.random()
let a = prompt("Enter first Number ")
let b = prompt("Enter Second Number ")
let c = prompt("Enter Operation ")

let obj = {
     "+": "-",
     "*": "+",
     "-": "/",
     "/": "%",
}

if (random > 0.1) {
     // Perform Correct Calculation
     
     console.log(`The result is ${`${a} ${c} ${b}`}`) 
     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)   // Eval Function calculate the value  





}
else {
     //Perform Incorrect Calculation
     c = obj[c]
     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)



}