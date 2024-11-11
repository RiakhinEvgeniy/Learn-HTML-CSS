let link = document.getElementById('myLink');
link.addEventListener('click', function(event) {
    console.log('Переход по ссылке отменен')
    event.preventDefault()
});