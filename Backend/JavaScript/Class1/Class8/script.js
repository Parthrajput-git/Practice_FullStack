// let btn=document.querySelector("button");

// btn.onclick=function hello(){
//     console.log("Hello i am cliked");

// }
// btn.onmouseenter=function hello(){
//     console.log("Hello i am onmouseenter");

// }

// btn.addEventListener("dblclick",()=>{
//     console.log("You are ");

// })

// let para=document.querySelector("p");
// btn.addEventListener("click",()=>{
//     para.innerText="Hey you are done this case";
// })
// let input=document.querySelector("input");
// input.addEventListener("keydown",(event)=>{
//     // console.log(event);

//     console.log("botton was cliked");

// });

// let form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//      event.preventDefault();
//     console.log("from are submited");
//     alert("From are success!");

// });
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     // let user = document.querySelector("#user"); case on the right a code but a next option is best
//     // let pass = document.querySelector("#pass");
//   console.dir(form.elements);
//     let user = form.elements[0] // there is sceond option
//     let pass = form.elements[1]

//     alert(`Hi ${user.value} and your password is ${pass.value}`)
//     console.log(user.value);
//     console.log(pass.value);



//     console.log("from are submited");
//     // alert("From are success!");
// })

let inp = document.querySelector("input");
let para = document.querySelector("p");

inp.addEventListener("input", () => {
    console.log(inp.value);
    para.innerText = inp.value;

});

