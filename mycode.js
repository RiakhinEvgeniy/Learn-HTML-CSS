let btn_1 = document.getElementById('button1');
let btn_2 = document.getElementById('button2');

function clickButton1() {
    console.log('Кнопка была нажата');
}

btn_1.addEventListener('click', clickButton1);
btn_2.addEventListener('click', function() {
    btn_1.removeEventListener('click', clickButton1)
    console.log('Listener button 1 removed');
});
