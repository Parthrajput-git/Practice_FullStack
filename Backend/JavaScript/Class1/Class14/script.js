let btn=document.querySelector("button");


let url="https://catfact.ninja/fact";

// console.log(url);

btn.addEventListener("click", async ()=>{
    let fact= await catFact();
    console.log(fact);
    let p=document.querySelector("p");
    p.innerText=fact;
    
});



async function catFact(){
    try{
    let result= await axios.get(url); 
    return result.data.fact; 

    }
    catch(err){
        console.error("Error please check",err);
        return "/";
    }
    
}


