class Mammal {
    constructor(name, age) {
        console.log("I am parent constructor");

        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`He is eating ${this.name}`);

    }
}

class Dog extends Mammal {
    constructor(name, age) {
        console.log("I am child constructor");
        
        super(name, age);//call the parent consturctor and this is no return

    }
    bork(){
        console.log("The dog was bork...");
        
    }

}
