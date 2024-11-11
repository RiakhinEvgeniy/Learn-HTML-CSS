let btn = document.getElementById('saveButton');
let dataSaved = new CustomEvent('dataSaved', {detail: 'Data has been saved successfully'})

btn.addEventListener('dataSaved', (event) => {
    console.log(event.detail);
})

btn.addEventListener('click', function() {
    btn.dispatchEvent(dataSaved);
});

