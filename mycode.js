//  document.cookie = "username=Evgeniy; expires=Thu, 05 Dec 2025 16:59:59 GMT";

function setCookie(key, value, days) {
    let nameOfKey = key + '=';
    let expires = '';
    let dateForExpires = new Date();
    dateForExpires.setTime(dateForExpires.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + dateForExpires.toUTCString();
    let cookieUpdate = nameOfKey + value + expires + '; path=/';
    document.cookie = cookieUpdate;
}

function getCookie(key) {
    let userName = key + '=';
    let cookies = document.cookie.split(`;`);
    for (let i = 0; i < cookies.length; i++) {
        let separateOfCookies = cookies[i].trim();
        if (separateOfCookies.indexOf(userName) === 0) {
            return separateOfCookies.substring(userName.length, separateOfCookies.length);
        }
    }
    return null;
}

let inputKey = prompt('Enter key for cookies:');
let inputValue = prompt('Enter name for cookies:');
setCookie(inputKey, inputValue, 2);

function displayNameCookie() {
    let result = getCookie('username');
    if (result) {
        alert(result);
    }
}

displayNameCookie();