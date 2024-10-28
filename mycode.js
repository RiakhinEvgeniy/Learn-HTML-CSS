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

// Запрашиваем у пользователя, является ли сегодня выходным
const stringWeekend = prompt("Сегодня выходной? (yes/no)");
//TODO:
let weekend = stringWeekend === "yes";
// Запрашиваем у пользователя, является ли сегодня праздничным днем
const stringHoliday = prompt("Сегодня праздничный день? (yes/no)");
//TODO:
let hoiliday = stringHoliday === "yes";
// Проверяем условия и выводим соответствующее сообщение
//TODO:
if(weekend || hoiliday) {
    console.log("Сегодня выходной");
} else {
    console.log("Сегодня рабочий день");
}