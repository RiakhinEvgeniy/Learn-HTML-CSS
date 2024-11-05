// function updateTime() {
//     let timeNow = new Date();
//     let hour = timeNow.getHours();
//     let min = timeNow.getMinutes();
//     let hourMin = `${hour}:${min}`;
//     document.getElementById("clock").textContent = hourMin;
//     }
    
//     function startClock() {
//        setInterval(updateTime, 1000);    
//     }

//     startClock();

// function mul(a) {
//    return function(b) {
//       return a * b;
//    };
// }

// let res = mul(5);
// console.log(res(5));

// function createGreeting(greeting) {
//    //TODO:
//    return function(name) {
//       console.log(`${greeting}, ${name}!`);
//    }
// }
   
//    // Пример использования:
//    const greetInEnglish = createGreeting("Hello");
//    greetInEnglish("Alice"); // Выведет: "Hello, Alice!"
   
//    const greetInSpanish = createGreeting("Hola");
//    greetInSpanish("Carlos"); // Выведет: "Hola, Carlos!"

// function createCounter() {
   
//       let count = 0;
//       return function() {
//          return ++count;
//       };
//    }
   
//    const counter1 = createCounter();
//    const counter2 = createCounter();
   
//    console.log(counter1()); // 1
//    console.log(counter1()); // 2
//    console.log(counter1()); // 3
   
//    console.log(counter2()); 
//    console.log(counter2()); 
//    console.log(counter2());


// let fruits = ["apple", "banana", "cherry", "date", "fig"];
// let arrFruits = fruits.slice(1, 4);
// console.log(arrFruits);

// const array = [10, 20, 30, 40, 50, 20];
// let arr1 = array.indexOf(20, 1);
// let arr2 = array.indexOf(20, 3);
// console.log(arr1);
// console.log(arr2);

// const students = [
//     { name: 'Alice', age: 20 },
//     { name: 'Bob', age: 22 },
//     { name: 'Charlie', age: 23 }
//   ];
  
//   students.forEach((student) => {
//     console.log(`Имя: ${[student.name]}, Возраст: ${[student.age]}`);
//   });

// const numbers = [1, 2, 3, 4, 5];
// let numbersSqrt = numbers.map((num) => num * num);
// console.log(numbersSqrt);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArray = numbers.filter((even) => even % 2 === 0);
// console.log(evenArray);

// const numbers = [10, 20, 30, 40, 50];
// let sumArray = numbers.reduce((sum, res) => sum + res, 0);
// console.log(sumArray);

// const numbers = [5, -1, 8, 12, -7];
// let isNegativ = numbers.some(num => num < 0);
// console.log(isNegativ);

// const numbers = [2, 4, 6, 8, 10];
// let hasEven = numbers.every(num => num % 2 === 0);
// console.log(hasEven);

// const numbers = [1, 2, -3, 4, -5];
// let negativNumber = numbers.find(num => num < 0);
// console.log(negativNumber);

const numbers = [5, 8, 12, 15, 7];
let index = numbers.findIndex(num => num > 10);
console.log(index);