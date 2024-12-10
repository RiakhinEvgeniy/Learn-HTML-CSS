


const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = function (event) {
    let divMessages = document.getElementById('messages');
    let newP = document.createElement('p');
    newP.textContent = event.data;
    divMessages.appendChild(newP);
};

document.getElementById('sendButton').onclick = function () {
    //TODO:
    let input = document.getElementById('messageInput');
    let textFromInput = input.value;
    ws.send(textFromInput);
    input.value = '';
};