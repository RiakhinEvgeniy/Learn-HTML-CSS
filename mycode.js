function getUserSettings(userSettings = {}) {
    userSettings.theme ??= 'light';
    userSettings.language ??= 'en';
    userSettings.notifications ??= true;
    return userSettings;
}

let userSettings = {
    theme: null,
    language: null,
    notifications: undefined
}

console.log(getUserSettings(userSettings));