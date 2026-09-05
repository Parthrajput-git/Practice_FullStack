class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hii, is user name is ${this.name}`);
        
    }
}

let p1=new Person("Garv",22);
let p2=new Person("Sem",23);

// console.log(p1.talk());
