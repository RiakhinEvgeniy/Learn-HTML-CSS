// let parent = {
//     greet: function() {
//         console.log("Hello from parent");
//     }
// };

// // Создание объекта child, который наследует от parent с использованием свойства __proto__
// let child = {
//      __proto__: parent
// };

// //  child.__proto__ = parent;
// child.greet();

// Создание объекта animal с методом speak
let animal = {
    speak: function() {
        console.log("Animal speaks");
    }
};

let dog = Object.create(animal);

dog.name = "Buddy";

dog.speak = function() {
    console.log(`${dog.name} speaks`);
}

dog.speak();  // Вывод: "Buddy speaks"