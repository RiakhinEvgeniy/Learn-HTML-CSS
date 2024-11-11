let elDiv = document.getElementById('container');
let btn = document.getElementById('button');

elDiv.addEventListener('click', function() {
    console.log('Клик внутри div');
});

btn.addEventListener('click', function(event) {
    console.log('Кнопка нажата');
    event.stopPropagation();
});