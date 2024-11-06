// Объявление класса Animal
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return console.log(`${this.name} makes a noise`);
    }
}

class Predator extends Animal {
    constructor(name) {
        super(name);
    }

    hunt() {
        return console.log(`${this.name} is hunting`)
    }
}

// Создание экземпляра класса Predator
let predator = new Predator("Lion");

// Вызов методов speak и hunt для экземпляра класса Predator
predator.speak(); // Вывод: Lion makes a noise.
predator.hunt();  // Вывод: Lion is hunting.