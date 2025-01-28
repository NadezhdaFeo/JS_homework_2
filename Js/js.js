document.addEventListener("DOMContentLoaded", function () {
    // task #1
    let age = prompt("Введите ваш возраст:");

    if (age < 65) {
        alert("Вам ещё рано на пенсию");
    }
    else {
        alert("Поздравляем с пенсионным возрастом!");
    }

    // task #2
    let a = prompt("Введите первое число:");
    let b = prompt("Введите второе число:");
    if (a == b) {
        alert("Числа равны");
    }
    else if (a > b) {
        alert("Первое число больше второго");
    }
    else {
        alert("Второе число больше первого");
    }
    // task #3
    let Num = prompt("Введите число:");
    if (Num % 2 == 0) {
        alert("Это чётное число");
    }
    else {
        alert("Это нечётное число");
    }
    // task #4
    const secretNumber = 7;
    let guess = prompt("Угадайте число от 1 до 10:");
    if (guess == secretNumber) {
        alert("Вы угадали!");
    }
    else {
        alert("Вы не угадали. Правильное число: " + secretNumber);
    }
    // task #5
    const login = "admin";
    const password = "12345";
    let enteredLogin = prompt("Введите логин:");
    let enteredPassword = prompt("Введите пароль:");
    if (enteredLogin == login && enteredPassword == password) {
        alert("Добро пожаловать!");
    }
    else {
        alert("Неверный логин или пароль");
    }
    // task #6
    let year = prompt("Введите год:");
    if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
        alert("Это високосный год");
    }
    else {
        alert("Это не високосный год");
    }
    // task #7
    let Number = prompt("Введите число:");
    if (Number == 100) {
        alert("Точно 100!");
    }
    else if (Number > 100) {
        alert("Число большое");
    }
    else {
        alert("Число маленькое");
    }

});