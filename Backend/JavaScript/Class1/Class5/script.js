// // This key word

// let obj={
//     hindi: 90,
//     eng: 85,
//     math: 83,
//     phy:89,
//     name:"Some",
//     op(){
//         let avg=(this.hindi+this.eng+this.math+this.phy)/4
//         console.log(avg);
        
//     }
// }

// //try & catch

// console.log("Hey");
// console.log("Wow");
// // let a=5;
// try{
// console.log(a);
// }
// catch(e){
//   console.log("Some error of in line");
//   console.log(e);
  
// }

// console.log("More");
// console.log("bye Progrmaers");


// // Arrow function 

// let sum=(a,b)=>{
//     return a+b;
// }
// console.log(sum(5,5));


// // Arrow function case2

// let cube= n =>{
//     return n*n*n;
// }
// console.log(cube(2));


// // Arrow function case3

// let pri= n =>{
//     console.log("Hello");
// }
// console.log(pri());

// //Case 4
// let sum=(a,b)=> a+b;
// console.log(sum(4,1));

// // setTimeou function
// console.log("Hi coder");

// setTimeout(()=>{
//     console.log("Hii, i am work with setTimeout");
    
// },3000);
// console.log("By,coder");

// setInterval
// console.log("Hii");
// let id=setInterval(()=>{
//     console.log("Again hii");
    
// },4000)
// console.log(id);

// console.log("okey");

// // Pracctice question

let id=setInterval(()=>{
    console.log("Hey Coder");
    
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("ClearIntervaal is run");
    
},10000)



