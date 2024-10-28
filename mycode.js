const stringAge = prompt("Введите ваш возраст");

let age = parseInt(stringAge);

const stringLicense = prompt("У вас есть водительские права? (yes или no)");

 let license = stringLicense;
 if(license === "no") {
     license = false;
 } else{
    license = true;
   }

if(age >= 18 && license === true) {
    console.log("Вы можете водить машину");
} else {
    console.log("Вам нельзя водить машину");
}