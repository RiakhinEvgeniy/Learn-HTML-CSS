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