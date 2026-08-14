let div=document.querySelector("div");
let ul=document.querySelector("ul");
let li=document.querySelector("li");

div.addEventListener("click",()=>{
    console.log("Div was click");
    
});

ul.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("ul was click");
    
});

li.addEventListener("click",(event)=>{
        event.stopPropagation();

    console.log("li was click");
    
});