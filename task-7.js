"use strict";
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    let loginLength = login.length;
    return loginLength >= 4 && loginLength <= 16;
};
const isLoginUnique = function (allLogins, login) {
    return !allLogins.includes(login);
};
const addLogin = function (allLogins, login) { 
    if (!isLoginValid(login)) {
    console.log("Помилка! Логін повинен бути від 4 до 16 символів");
    return "Помилка! Логін повинен бути від 4 до 16 символів";
} else if (!isLoginUnique(allLogins, login)) {
    console.log("Такий логін вже використовується!");
    return "Такий логін вже використовується!'";
} else {
    logins.push(login);
    console.log("Логін успішно доданий!");
    return "Логін успішно доданий!";
}
};
console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'