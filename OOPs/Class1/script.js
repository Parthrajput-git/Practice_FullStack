function PersonMaker(name,age){//factory function
    const person={
        name: name,
        age:age ,
        talk(){
            console.log(`Hi, my name is ${this.name}`);
            
        } ,
    };
    return person;
}