function saveValueInSessionStorage(event) {
    let key = event.target.id;
    let value = event.target.value;
    console.log(key);
    console.log(value);
    sessionStorage.setItem(key, value);
}

function loadDataInTextForm() {
    let name = sessionStorage.getItem('name');
    let email = sessionStorage.getItem('email');
    let message = sessionStorage.getItem('message');

    if (name) document.getElementById('name').value = name;
    if (email) document.getElementById('email').value = email;
    if (message) document.getElementById('message').value = message;
}

function resetForm() {
    document.getElementById('data-form').reset();
    sessionStorage.clear();
}

document.getElementById('name').addEventListener('input', saveValueInSessionStorage);
document.getElementById('email').addEventListener('input', saveValueInSessionStorage);
document.getElementById('message').addEventListener('input', saveValueInSessionStorage);

document.getElementById('reset-btn').addEventListener('click', resetForm);

document.addEventListener('DOMContentLoaded', loadDataInTextForm);