let elP = document.getElementById('myParagraph');
let styles = window.getComputedStyle(elP);
console.log(styles.color)
console.log(styles.backgroundColor)
console.log(styles.fontSize)
elP.style.color = 'blue'
elP.style.backgroundColor = 'yellow'
elP.style.fontSize = '20px'
let styles1 = window.getComputedStyle(elP);
console.log(styles1.color)
console.log(styles1.backgroundColor)
console.log(styles1.fontSize)