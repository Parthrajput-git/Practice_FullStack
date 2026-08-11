// // Array method oparations

// let arr = [1, 2, 3, 4, 5];

// arr.forEach((e) => {
//     console.log(e);

// })

// //case2 forEach m3ethod
// let arr2 = [{
//     name: "Dev",
//     marks: 89.5
// }, {
//     name: "some",
//     marks: 91.5
// }, {
//     name: "Sem",
//     marks: 84.6
// }];

// arr2.forEach((e) => {
//     console.log(e.name);

// });

// //map method
// let obj = [{
//     name: "Dev",
//     marks: 89.5
// }, {
//     name: "some",
//     marks: 91.5
// }, {
//     name: "Sem",
//     marks: 84.6
// }];

// obj.forEach((e) => {
//     // console.log(e);

// });

// // filter method

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22];

// let res=arr.filter((e) => {
//     return e % 2 == 0;
// });

// // console.log(res);

// // every method return true or false and result in one true ke all false then result is flase

// let arr=[1,2,3,4,5,6,8];
// let res=arr.every((e)=>{
//     return e%2==0;
// });
// console.log(res);

// let arr2=[2,4,6,8];
// let res1=arr2.every((e)=>{
//     return e%2==0;
// });
// console.log(res1);

// //reduce
// let arr3=[1,2,3,4];
// let pri=arr3.reduce((res,el)=>{
//     return res+el;
// });
// console.log(pri);

//reduce case 2

// let arr4=[1,2,3,4];
// let ans=arr4.reduce((max,el)=>{
//     if(el>max){
//     return el;
//     }else{
//         return max;
//     }
// })
// console.log(ans);

// //spread 

// let arr = "HeyProgrmaers";

// // console.log(...arr);

// //case1
// let arr2 = "HeyProgrmaers";
// let copyArr = [...arr2];
// console.log(copyArr);
// //case2
// const data={
//     name:"Neel",
//     password: "abcdef"

// };
// let dataCopy={...data,id:555};
// console.log(dataCopy);


// //rest 
// function fun(...arg){
//   for(let i=0;i<=arg.length;i++){
//     console.log("fisrt argumnet",arg[i]);

//   }
// }
// fun(1,2,3,4,5);


//Destructuring

let names = ["Dev", "Raj", "Surbhi", "peter", "Mona", "Some", "Mini"];
let [firstStudent, secondStudent, ...other] = names;

console.log(firstStudent);
console.log(other);


// Object Destructuring
let student = {
    name: "Raghav",
    clas: "8th",
    roll_number: 223456,
    city: "indore",
    subject: ["math", "phy", "chem", "hindi"],
    gmail: "raghav@123gmail.com",
};

let { gmail,clas} = student;
