//Polymorphismj
class Animal{
    makeSound(){
        return "The animal makes a noise";
    }
}

class Dog extends Animal {
    makeSound(){
        return super.makeSound() + ", the dog barks.";
    }
}

class Cat extends Animal {
    makeSound(){
        return super.makeSound() + ", the cat meowww.";
    }
}

const dog = new Dog();
console.log(dog.makeSound());

const cat = new Cat();
console.log(cat.makeSound());