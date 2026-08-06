// //function
// function rollDice(){
//     let num=Math.floor(Math.random()*6)+1;
//     console.log(num);

// }
// rollDice();

// //function2

// function sum(n1,n2){
//     console.log(n1+n2);

// }
// sum(5,5);
// sum(5,15);
// sum(52,5);
// console.log(sum);

// return ket word

// function mul(a,b){
//     return a*b;
// }
// // console.log(mul(2,8));

// function table(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         // sum=sum+i;sum+=i;
//         sum+=i;
//     }
//     return sum;
// }
// console.log(table(5));


let str = ["Hi", "Hello", "Bye", "!"];

function concat(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i]
    }
    return result;
}
console.log(concat(str));

// Function Expresstions
let sum = function (a, b) {
    return a + b;
}
console.log(sum(5, 4));

//Higher order function 

function Outerfunction(func, count) {
    for (let i = 0; i < count; i++) {
        func();
    }
}

let inner = function () {
    console.log("Hey Programers");

}
Outerfunction(inner, 10);



