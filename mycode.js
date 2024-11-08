let elementDiv = document.createElement("div")
elementDiv.textContent = 'Это новый элемент';
let el_Body = document.querySelector("body")
let elH1 = document.querySelector("h1")
el_Body.insertBefore(elementDiv, elH1)