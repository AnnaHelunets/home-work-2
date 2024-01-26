
const password = prompt("Введіть пароль");
const ADMIN_PASSWORD = 'jqueryismyjam'; 
let message;


if (password === null) {
    message = 'Операцію скасовано!'
} else if (password === ADMIN_PASSWORD) {
    message = 'Ласкаво просимо!'
} else if ('Доступ заборонено, невірний пароль!');

alert (message);