let elDiv = document.getElementById('mouseArea');
let mouseMove = elDiv.addEventListener('mousemove', (move) => {
    console.log(`${move.clientX} * ${move.clientY}`)
});