// let url="https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//    console.log("Call API",res);
//    return res.json();
// })
// .then((data)=>{
//    console.log(data.fact);
   
// })
// .catch(()=>{
//    console.log("Some mistake");
   
// });

let url="https://catfact.ninja/fact2";

async function callApi(){
   try{
   let res= await fetch(url);
   let data= await res.json();
   console.log(data);
   }
   catch(err){
      console.log("Error",err);
   }
   console.log("Bye");
   
   
}

callApi();