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

// Создание массива чисел от 1 до 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Инициализация переменной для хранения суммы элементов
let sum = 0;

// Перебор элементов массива с использованием цикла for...of
for (const i of numbers) {
    console.log(i);
    sum += i;
}

// Вывод суммы всех элементов массива в консоль
console.log(sum);