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

//TODO:
function showItems(firstItem, ...anotherItem) {
    console.log(firstItem);
    console.log(`${anotherItem.join(", ")}`);
}
// Примеры вызова функции с различным количеством аргументов
showItems("яблоко", "банан", "груша");
showItems("машина");
showItems("первый", "второй", "третий", "четвертый");