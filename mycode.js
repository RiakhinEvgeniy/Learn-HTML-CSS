let elP = document.getElementById('myParagraph')
elP.addEventListener('click', () =>{
    console.log(elP.classList.contains('highlight'));
    elP.classList.toggle('highlight')
    console.log(elP.classList.contains('highlight'));
});
