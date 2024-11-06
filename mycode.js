class Person {
    #name;
    #age;

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    setName(name) {
        this.#name = name;
    }

    setAge(age) {
        this.#age = age;
    }
}

// Создаем экземпляр класса Person
let person = new Person();
person.setName("Evgeniy");
person.setAge(44);
console.log(person.getName());
console.log(person.getAge());

// Попытка доступа к приватным полям извне класса
// console.log(person.#name); // Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
// console.log(person.#age);  // Uncaught SyntaxError: Private field '#age' must be declared in an enclosing class