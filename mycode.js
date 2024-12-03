let saveButton = document.getElementById('saveButton');
let userName = document.getElementById('username');
let theme = document.getElementById('theme');

let savedUserName = localStorage.getItem('userName');
if(savedUserName) {
    userName.value = savedUserName;
}

let savedTheme = localStorage.getItem('theme');
if(savedTheme) {
    theme.value = savedTheme;
    document.body.className = savedTheme;
}

saveButton.addEventListener('click', () => {
    let valueInput = userName.value;
    let valueTheme = theme.value;
    localStorage.setItem('userName', valueInput);
    localStorage.setItem('theme', valueTheme);
});