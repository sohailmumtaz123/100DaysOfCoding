console.log("Hello Sohail");
// we can call it Factory function
function personmaker(name, age){
    const person={
        name: name,
        age: age, 
        talk(){
            console.log(`Hi, My name is ${this.name}. I'm ${this.age} years old.`);
        }
    }
    return person;
}

// Create the above function as a constructor
function Person(name, age){
    this.name=name;
    this.age=age;
}
Person.prototype.talk=function(){
    console.log(`Hi, My name is ${this.name}. I'm ${this.age} years old.`);
}
let p1=new Person("sohail", 25);
let p2=new Person("Mumtaz", 55);

//Let's make the above things using class
class makePerson{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    talk() {
        console.log(`Hi, My name is ${this.name}. I'm ${this.age} years old.`);
    }
}
let person1=new makePerson("Class1", 25);
let person2=new makePerson("class2", 26);

//Now let's implement inheritance
class student extends makePerson{
    constructor(name, age, marks){
        super(name, age);//Parent class constructor is being called
        this.marks=marks
    }
}
let student1=new student("Fahad", 18, 950);
let student2=new student("Sohail", 25, 941);
