//Class2

// for(let i=5;i<=50;i=i+5){
//     console.log(i);
    
// }

//while loop
// let i=1;
// while(i<=10){
//     console.log("Hey Programs");
//     i++;
    
// }

// ACTIVITI
// let myMovie="Marvel";
// let guess=prompt("Guess my movie");

// while((guess!=myMovie) && (guess!="quit")){
//     guess=prompt("Wrong guess,Please try again");
    
// }
// if(guess==myMovie){
//     console.log("You are the right guess");
    
//}

//array with loop

// let arr=["Mira","Romy","Rishabh","Mona","Dev","Some","Raj","Priti","Priya","Vira"]

// for(let i=0;i<=arr.length-1;i++){
//     console.log(i,arr[i]);
    
// }

//for of loop

let arr1=["Mira","Romy","Rishabh","Mona","Dev","Some","Raj","Priti","Priya","Vira"];
for(nam of arr1 ){
    console.log(nam);
    
}

let str="HelloMarvel";
for(char of str){
    console.log(char);
    
}

//nasted for of loop
let arr2=[[1,2,3,4,5],[6,7,8,9,10]];

for(num of arr2){
    for(num1 of num){
        console.log(num1);
        
    }
    
}