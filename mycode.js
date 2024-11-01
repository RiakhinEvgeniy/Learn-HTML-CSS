// const stringAge = prompt("Введите ваш возраст");

// let age = parseInt(stringAge);

// const stringLicense = prompt("У вас есть водительские права? (yes или no)");

//  let license = stringLicense;
//  if(license === "no") {
//      license = false;
//  } else{
//     license = true;
//    }

// if(age >= 18 && license === true) {
//     console.log("Вы можете водить машину");
// } else {
//     console.log("Вам нельзя водить машину");
// }

// const stringWeekend = prompt("Сегодня выходной? (yes/no)");
// let weekend = stringWeekend === "yes";

// const stringHoliday = prompt("Сегодня праздничный день? (yes/no)");
// let hoiliday = stringHoliday === "yes";

// if(weekend || hoiliday) {
//     console.log("Сегодня выходной");
// } else {
//     console.log("Сегодня рабочий день");
// }

// let fruits = ["Apple", "Banana", "Cherry"];

// fruits[1] = "Blueberry";

// console.log(fruits);

// fruits.push("Mango");

// console.log(fruits.length);


// let arr = [];

// arr.unshift("start1", "start2");

// arr.push("end1", "end2");

// console.log(arr);

// console.log(arr.length);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// for (const i of numbers) {
//     console.log(i);
//     sum += i;
// }

// console.log(sum);

// const user = {
//     имя: "Alice",
//     возраст: 25,
//     профессия: "Engineer"
//   };
  
//   for(let k in user) {
//     console.log(k + ": " + user[k]);
//   }

// for (let i = 0; i <= 10; i++) {
//     if(i % 2 === 0) {
//         continue;
//     }
//     console.log(i); 
// }

// function showItems(firstItem, ...anotherItem) {
//     console.log(firstItem);
//     console.log(`${anotherItem.join(", ")}`);
// }
// // Примеры вызова функции с различным количеством аргументов
// showItems("яблоко", "банан", "груша");
// showItems("машина");
// showItems("первый", "второй", "третий", "четвертый");

// let book = {
//     title: "Chronicles of Narnia", 
//     author: "Claiv Luis",
//     year: "54",

//     getSummary: function() {
//         return this.title + " by " + this.author + " published in " + this.year;
//     }
// };

// console.log(book.getSummary());

// let user = {
//     name: "Evgeniy",
//     age: 44
// }
// console.log(user);

// user.age = 45;
// user.email = "evgeniir.e.u@gmail.com";

// console.log(user);

// let user = {
//     username: "Evgeniy",
//     email: "evgeniy@gmail.com",

//     getDetails() {
//         return `Username: [${this.username}], Email: [${this.email}]`;
//      }
// };

// console.log(user.getDetails());

// let product = {
//     name: "table",
//     price: 500
// }

// let {isProduct = true} = product;
// console.log(product.name);
// console.log(isProduct);

// let person = {
//     name: "Evgeniy",
//         address: {
//             city: "Odessa",
//             street: "bocharova 15"
//         }
// }

// let {address: {city, street}} = person;
// console.log(city);
// console.log(street);

// const employee = {
//     firstName: 'John',
//     lastName: 'Doe',
//     position: 'Developer',
//     salary: 50000
//   };
  
//   const {firstName: fName, lastName: lName} = employee;
//   console.log(fName);
//   console.log(lName);


// const colors = ['red', 'green', 'blue', 'yellow'];

// const [firstColor, , thirdColor] = colors;

// console.log(firstColor);
// console.log(thirdColor);

// let arr = ["green", "yellow", "red"];
// let num = [1, 2, 3];
// let arrCopy = [...arr];
// let twoCopy = [...arr, ...num];
// console.log(twoCopy);

// function sum(...numbers) {
//     return numbers.reduce((result, x) => result + x, 0);
// }

// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4));

// let defultSettings = {theme: "dark", showNitification: false};
// let userSettings = {showNitification: true, fontSize: 14};
// let settings = {...defultSettings, ...userSettings};
// console.log(settings);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combinedObject = { ...obj1, ...obj2 };

// console.log(combinedObject);

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = [...array1, ...array2];
// console.log(combinedArray);

// const person = {
//     name: 'John Doe',
//     age: 30,
//     email: 'john.doe@example.com',
//     country: 'USA'
// };

// const {name, age, ...rest} = person;
// console.log(name);
// console.log(age);
// console.log(rest);

// try {
//     console.log(undefinedVar);
// } catch (error) {
//     console.error("This variable not find!", error.message);
// }

// function processData() {
//     try {
//         console.log("Processing data");
//     } catch(error) {
//         console.error("Error", error.message);
//     } finally {
//         console.log("Cleanup resources");
//     }
// }
    
//     processData();

// function ceilAndFloor(num) {
//     //TODO:
//     return { ceil: Math.ceil(num), floor: Math.floor(num) };
// }

// console.log(ceilAndFloor(1.4568));

// Напишите функцию areFloatsEqual, 
// которая принимает два вещественных числа и возвращает true, 
// если разница между ними меньше заданного порога epsilon, 
// и false в противном случае. Используйте Math.abs() 
// для вычисления разницы и задайте epsilon равным 0.00001. 
// Пример: для чисел 1.00000001 и 1.00000002 функция должна вернуть true.

function areFloatsEqual(num1, num2) {
        if(Math.abs(num1 - num2) < 0.00001) {
            return true;
        }
        return false;
    }

    console.log(areFloatsEqual(1.00000001, 1.00000002));