// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);

// }

// three();

let h1=document.querySelector("h1");

function colorChange(color,delay){
    return new Promise((resolve,rejected)=>{
         setTimeout(()=>{
              h1.style.color=color;  
              resolve("color changed"); 
         },delay);
    });
}

colorChange("red",1000)
.then(()=>{
    console.log("red color was completed");
    return colorChange("orange",1000);
})
.then(()=>{
    console.log("orange clor was completed");
    return colorChange("green",1000);
})
.then(()=>{
    console.log("green color was completed");
    
})
.catch(()=>{
    console.log("Some problem in color change oparation");
    
});