let btn = document.getElementById('myButton');
btn.addEventListener('click', function() {
    console.log('Первый обработчик')
});

btn.addEventListener('click', function() {
    console.log('Второй обработчик')
});