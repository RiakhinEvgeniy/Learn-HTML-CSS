class Animal {
    makeSound() {
        console.log("Something say")
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal{
    makeSound() {
        console.log("Meow! Meow!");
    }
}

function playWithAnimal(animal) {
    animal.makeSound();
}

let myDog = new Dog();
let myCat = new Cat();

playWithAnimal(myDog);
playWithAnimal(myCat);