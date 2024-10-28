//  function calculateSum() {
//      const num1 = parseFloat(document.getElementById('num1'));
//      const num2 = parseFloat(document.getElementById('num2'));
//      const sum = num1 + num2;
//      document.getElementById('res').value = sum;
//  }

// const usernameInput = document.getElementById('username');
// const hint = document.getElementById('username-hint');

// usernameInput.addEventListener('focus', function () {
//   hint.style.display = 'block';
// });

// const email = document.getElementById('myForm');
// const log = document.getElementById('log');

// email.addEventListener('reset', function() {
//     log.textContent = 'Форма была сброшена';
// });

// const openButton = document.getElementById('open-dialog');
// const closeButton = document.getElementById('close-dialog');
// const dialog = document.getElementById('my-dialog');

//     openButton.addEventListener('click', ()=> {
//         dialog.showModal();
//     });
        
//     closeButton.addEventListener('click', ()=> {
//         dialog.close();
//     });

// const openButton = document.getElementById('openButton');
// const dialogSecondWindow = document.getElementById('modalWindow');

// openButton.addEventListener('click', ()=> {
//     dialogSecondWindow.show();
// });

// const addButton = document.getElementById('addButton');
// const itemList = document.getElementById('listItems');
// const templateItem = document.getElementById('templateItem');

// addButton.addEventListener('click', ()=> {
//     const newItem = templateItem.content.cloneNode(true);
//     itemList.appendChild(newItem);
// });

//     document.getElementById('add-item-button').addEventListener('click', function() {
//     const template = document.getElementById('templateList');
//     const clone = template.content.cloneNode(true);
//     document.getElementById('list-container').appendChild(clone);
// });

    // addEventListener('DOMContentLoaded', ()=> {
    //     const products = [
    //         {
    //             title: "Product 1",
    //             price: "$10",
    //             image: "https://via.placeholder.com/150"
    //         },
    //         //TODO:
    //     ];

    //     const template = document.getElementById('product-template').content;
    //     const productList = document.getElementById('product-list');

    //     products.forEach(product => {
    //         const clone = document.importNode(template, true);
    //         clone.querySelector('.product-image').src = product.image;
    //         clone.querySelector('.product-title').textContent = product.title;
    //         clone.querySelector('.product-price').textContent = product.price;
    //         productList.appendChild(clone);
    //     });
    // });

    // document.getElementById('toggleDetails').addEventListener('click', ()=> {
    //     document.querySelectorAll('details').forEach(detail=>{
    //         detail.open = !detail.open;
    //     });
    // });

    // document.getElementById('header').style.color = 'blue';

    // const userData = document.querySelector('[data-user-id]');
    // console.log(userData.dataset.userId);
    // console.log(userData.dataset.role);

    // document.getElementById('start-btn').addEventListener('click', function() {
    //     //TODO:
    //     document.getElementById('animate-box').classList.toggle('animate');
    // });

    // Генерация случайных чисел и их округление
// const randomA = Math.random() * 100;
// const randomB = Math.random() * 100;

// console.log(randomA);
// console.log(randomB);

// const intA = Math.round(randomA);
// const intB = Math.round(randomB);

// // Нахождение максимального и минимального значений
// let maxNumber = Math.max(intA, intB);
// let minNumber = Math.min(intA, intB);

// // Вывод результатов
// console.log('Сгенерированные числа:', intA, " ", intB);
// console.log('Максимальное значение:', maxNumber);
// console.log('Минимальное значение:', minNumber);

// const string = "123"
// const integer = parseInt(string);
// const float = parseFloat(string);
// const number = Number(string);

// console.log(integer + " " + float + " " + number);

// Создание строки, содержащей текст
// let originalString = "Пример текста для преобразования";

// let upperCaseString = originalString.toUpperCase();

// let lowerCaseString = originalString.toLowerCase();

// console.log(upperCaseString);
// console.log(lowerCaseString);

// let string = "   Hello, World!   "
// let changeString = string.replace("World", "Игорь");
// let resultString = changeString.trim();
// console.log(resultString);

// Запрашиваем число n у пользователя
// const string = prompt("Введите число n:");
// let n = parseInt(string);

// // Инициализируем переменные
// let sum = 0;
// let i = 1;

// while (i <= n) {
//     sum = sum + i;
//     i++; 
// }

// console.log("Сумма чисел от 1 до " + n + " равна " + sum);

for(let i = 1; i <= 22; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}
