// const age = 10;
// const totalPrice = 200.74;
// const userName = "Chelsy";
// const message = "Welcome";
// const isOpen = true;
// const shouldConfirm = false;

// const type = typeof isOpen;

// console.log(type);

/*let elRt = "45df";
elRt = Number.parseInt(elRt);
console.log("eh", elRt);*/

//console.log(Math.pow(2, 3));
// let base = prompt("Дай число");
// base = Number(base);
// console.log(base);

// let power = prompt("Дай степень");
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);

// const max = 50;
// const min = 1;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// const firstName =
// 	"Chelsy";
// const lastName =
// 	"Emerald";
// const room = 1;
// const type = "VIP";
// const welcomeMsg = `Guest ${firstName} ${lastName} settles in ${type} room ${room}`;
// console.log(
// 	welcomeMsg,
// );

// const brand = "Samsung";
// const normalisedBrand = brand.toLowerCase();
// console.log(brand);

// const x1 = 10;
// const x2 = 30;
// const number = 25;
// console.log(x1 < number && x2 < number);

// const isOnline = true;
// const isFrend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFrend && !isDnd;
// console.log(canOpenChat);

// const sub = "pro";
// const sub1 = "vip";
// const canGiveAccess = sub1 === "vip" && sub === "pro";
// console.log(canGiveAccess);

// let cost;
// const sub = "free";
// if (sub === "free") {
// 	cost = 0;
// } else if (sub === "pro") {
// 	cost = 10;
// } else if (sub === "premium") {
// 	cost = 20;
// } else {
// 	console.log("Invalid");
// }

// console.log(cost);

// let type;
// const age = 20;
// if (age >= 18) {
// 	type = "adult";
// } else {
// 	type = "child";
// }
// console.log(type);

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type);

// const n1 = 5;
// const n2 = 10;
// let bigNumber;
// if (n1 > n2) {
// 	bigNumber = n1;
// } else {
// 	bigNumber = n2;
// }
// console.log(bigNumber);

// const n1 = 5;
// const n2 = 10;
// const bigNumber = n1 > n2 ? n1 : n2;
// console.log(bigNumber);

// const salary = 500;
// if (salary >= 500 && salary < 1000) {
// 	("level 1");
// } else if (salary <= 500) {
// 	("level 2");
// } else if (salary > 1000 && salary < 2000) {
// 	("level 3");
// } else {
// 	("level 4");
// }
// console.log(salary);

// const balance = -1;
// let message;
// if (balance >= 0) {
// 	message = "Positive balance";
// } else {
// 	message = "Negative balance";
// }
// console.log(message);
// const balance = -1;
// const message = balance >= 0 ? "Positive balance" : "Negative balance";
// console.log(message);
// let a = "88,3";
// a = Number(a.replace(",", "."));
// console.log(a);
// let a;
// a = 1;
// a = 2;
// console.log(a);
// console.log(Boolean(!!1));
// console.log(Boolean(1));

//Циклы (loops)

// let num = 5;
// while (num) {
// 	console.log(num);
// 	num--;
// }
//      OR
// let num = 5;
// while (num) console(num--);

/*Нариши скрипт выбора отеля по кол-ву звёзд.
1 - 10, 2 - 20, 3 - 30, 4 - 40, 5 - 50.
Если в переменной stars что-то кроме чисел 1-5,
 введи строку "No stars exists"*/
// const stars = 2;
// let price;
// if (stars === 1) {
// 	price = 10;
// } else if (stars === 2) {
// 	price = 20;
// } else if (stars === 3) {
// 	price = 30;
// } else if (stars === 4) {
// 	price = 40;
// } else if (stars === 5) {
// 	price = 50;
// } else {
// 	console.log("No stars exists");
// }
// console.log(price);
//   OR Switch
// switch (stars) {
// 	case 1:
// 		price = 10;
// 		break;
// 	case 2:
// 		price = 20;
// 		break;
// 	case 3:
// 		price = 30;
// 		break;
// 	case 4:
// 		price = 40;
// 		break;
// 	case 5:
// 		price = 50;
// 		break;
// 	default:
// 		console.log("No stars exists");
// }
// console.log(price);

/* Задача
Напищи скрипт выбора опции доставки товара.
Опция хранится в переменной option: 1 - самовывоз,
2 - курьер. 3 - почта. */
// const option = 1;
// let message = "";
// switch (option) {
// 	case 1:
// 		message = "collection";
// 		break;
// 	case 2:
// 		message = "courier";
// 		break;
// 	case 3:
// 		message = "post";
// 		break;
// 	default:
// 		"We will call you";
// }
// console.log(message);

// Loops
// For (инициализация(начало); условие;
// пост - выражение(шаг);) {тело цикла }
// for (let i = 0; i < 5; i += 1) {
// 	console.log(i);
// }
// console.log("infinity");

/* Задача. Напиши скрипт, который подсчитывает общую сумму
зарплаты работников. 
Количество работников хранится в переменной employees.
Зарплата каждого работника это случайное число от 500 до 5000.
Записать сумму в переменную totalSalary и вывести в консоль.*/
//сделать var
// const minSalary = 500;
// const maxSalary = 5000;
// const employee = 5;
// let totalSalary = 0;
// // перебрать работников
// for (let i = 1; i <= employee; i += 1) {
// 	//сгенерировать случайныю зп
// 	const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
// 	console.log(`Salary employee number ${i} - ${salary}`);

// 	//прибавать к тоталу
// 	totalSalary += salary;
// }
// //лог
// console.log("totalSalary:", totalSalary);

/* Задача 1
Напиши скрипт, который подсчитывает сумму всех чётных чисел,
которые входят в диапазон чисел в переменных от min до max. 
Например, если min=0 и max=5, то диапазон 0-5, и в нем
два четных числа - 2 и 4, их сумма 6.*/
//выры
// const min = 5;
// const max = 13;
// let total = 0;
// //for от min да max с шагом в 1
// for (let i = min; i <= max; i += 1) {
// 	console.log(i);
// 	//проверяем остаток от деления
// 	if (i % 2 !== 0) {
// 		console.log("нечетное", i);
// 		continue;
// 	}
// 	//пишим в сумму
// 	console.log("четное", i);
// 	total += i;
// }
// console.log("total", total);

// let answer;
// while (answer !== "wait") {
// 	console.log("User", answer);
// 	answer = prompt("Type text");
// }

/* Задача 2
Напиши скрипт обработки покупки в магазине.
Баланс пользователя хранится в переменной payment
Перед проверкой вывести сообщение:
"Общая стоимость заказа [число] кредитов. Проверяем кол-во
средств на счету"
Если сумма покупки не превышает баланс;
-Вычесть из баланса сумму покупки
-Вывести сообщение "На счету осталось [число] кредитов"
Если сумма покупки превышает баланс:
-Вывести сообщение "На счету недостаточно средств для
проведения операции"
В конце вывести сообщение "Операция завершена" */
//vars
// let balance = 10000;
// const payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов.
// Проверяем кол-во доступных средств на счету`);
// if (payment <= balance) {
// 	console.log("ok");
// 	balance -= payment;
// 	console.log(`На счету осталось ${balance} кредитов`);
// } else {
// 	console.log(`На счету недостаточно средств для проведения операции!`);
// }
// console.log("Все хорошо, снимаем деньги... Спасибо за покупку!");
// console.log("Операция завершена");

/* Напиши скрипт подсчета суммы покупки со скидкой в зависимости от потраченной
суммы за все время (партнерская программа).
Общая сумма потрасенного хранится в переменной totalSpent.
Сусмма текущего платежа хранится в переменной payment
Скидка хранится в переменной discount
Если потрачено от [100 до 1000) - бронзовый партнер, скидка 2%
Если потрачено от [100 до 5000) - серебрянный партнер, скидка 5%
Еслм потрачено больше 5000 - золотой партнер, скидка 10%
Если потрачено меньше 100 - не партнер, скидки нет
В результате вывести сообщение
"Оформляем заказ на сумму [сумма] со скидкой [скидка]" */

// let totalSpent = 100;
// let payment = 500;
// let discount = 0;
// //Бронзовый партнер, скидка 2%
// if (totalSpent >= 100 && totalSpent < 1000) {
// 	console.log("бронзовый партнер, скидка 2%");
// 	discount = 0.02;
// }
// // totalSpend -= payment;
// //Серебрянный партнер, скидка 5%
// else if (totalSpent >= 1000 && totalSpent < 5000) {
// 	console.log("серебрянный партнер, скидка 5%");
// 	discount = 0.05;
// }
// // Золотой партнер, скидка 10%
// else if (totalSpent >= 5000) {
// 	console.log("золотой партнер, скидка 10%");
// 	discount = 0.1;
// 	// У Вас еще нет партнерской программы
// } else {
// 	console.log("Вы не партнер, скидки нет");
// }
// payment -= payment * discount;

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}`);

// totalSpent += payment;
// console.log(`Общая сумма потраченного в магазине: ${totalSpent}`);

// const value = 5;
// if (value === 1) {
// 	console.log("one");
// } else if (value === 2) {
// 	console.log("two");
// } else if (value === 5) {
// 	console.log("Five");
// } else {
// 	console.log("default");
// }

// switch (value) {
// 	case 1:
// 		console.log("one");
// 		break;
// 	case 2:
// 		console.log("two");
// 		break;
// 	case 5:
// 		console.log("five");
// 		break;
// 	default:
// 		console.log("default");
// }

// let b = 25;

// if (true) {
// 	let a = 15;
// 	b = 44;
// 	if (true) {
// 		let a = 25;
// 		b = 31;
// 	}

// 	console.log(b);
// }
// console.log(a);
