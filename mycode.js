let elDivById = document.getElementById('textContainer')
let btn = document.getElementById('updateButton')

let updateText = new CustomEvent('updateText', {detail: 'Updated text'})

elDivById.addEventListener('updateText', function(event) {
    elDivById.textContent = event.detail;
})

btn.addEventListener('click', () => {
    elDivById.dispatchEvent(updateText)
})