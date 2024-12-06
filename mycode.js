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

let sessionId = 'username';
let value = 'Evgenii1980';

function deleteCookie(name) {
    document.cookie = name + '=; max-age=0; path=/';
}

let deleteButton = document.getElementById('deleteCookieButton');
deleteButton.addEventListener('click', () => {
    deleteCookie(sessionId);
    location.reload();
})

let setButton = document.getElementById('getCookieButton');
setButton.addEventListener('click', () => {
    setCookie(sessionId, value, 7);
    location.reload();
})

function displayNameCookie() {
    let result = getCookie(sessionId);
    if (result) {
        console.log(result);
    }
}

displayNameCookie();