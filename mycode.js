let updateText = new CustomEvent('updateText', {detail: 'Updated text55555555'});

document.getElementById('textContainer').addEventListener('updateText', function(event) {
    this.textContent = event.detail;
});

document.getElementById('updateButton').addEventListener('click', () => {
    document.getElementById('textContainer').dispatchEvent(updateText);;
});