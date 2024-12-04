let textInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');
let resetButton = document.getElementById('reset-btn');

let nameSession = sessionStorage.getItem('name');
if(nameSession) {
    console.log(nameSession);
    textInput.value = nameSession;
}

let emailSession = sessionStorage.getItem('email');
if(emailSession) {
    console.log(emailSession);
    emailInput.value = emailSession;
}

let messageSession = sessionStorage.getItem('message');
if(messageSession) {
    console.log(messageSession);
    messageInput.value = messageSession;
}

textInput.addEventListener('input', () => {
    let textName = textInput.value;
    sessionStorage.setItem('name', textName);
})

emailInput.addEventListener('input', () => {
    let textEmail = emailInput.value;
    sessionStorage.setItem('email', textEmail);
})

messageInput.addEventListener('input', () => {
    let textMessage = messageInput.value;
    sessionStorage.setItem('message', textMessage);
})

resetButton.addEventListener('click', () => {
    document.getElementById('data-form').reset();
    sessionStorage.clear();
})