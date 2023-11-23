// // Колбэк-функция
// function greet(name) {
// 	console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
// 	console.log(`Регистрируем гостя ${name}.`);
// 	callback(name);
// }

// registerGuest("Манго", greet);

// function registerGuest(name, callback) {
// 	console.log(`Регистрируем гостя ${name}.`);
// 	callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
// 	console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
// 	console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// function processCall(recipient) {
// 	// Имитируем доступность абонента случайным числом
// 	const isRecipientAvailable = Math.random() > 0.5;

// 	if (!isRecipientAvailable) {
// 		console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
// 		// Логика активации автоответчика
// 	} else {
// 		console.log(`Соединяем с ${recipient}, ожидайте...`);
// 		// Логика принятия звонка
// 	}
// }

// processCall("Манго");

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
// 	console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
// 	console.log(`Индекс ${index}, значение ${number}`);
// });

// const doMath = function (a, b, callback) {
// 	const result = callback(a, b);
// 	console.log(result);
// };

// // const add = function (x, y) {
// // 	return x + y;
// // };

// // const sub = function (x, y) {
// // 	return x - y;
// // };

// // doMath(2, 3, add);
// // doMath(10, 8, sub);

// doMath(2, 3, function (x, y) {
// 	return x + y;
// });
// doMath(10, 8, function (x, y) {
// 	return x - y;
// });

// const buttonRef = document.querySelector(".js-button");
// // console.dir(buttonRef);
// const handBtnClick = function () {
// 	console.log("Buttons click", +Date.now());
// };
// buttonRef.addEventListener("click", handBtnClick);

// const onGetPositionSuccesss = function (position) {
// 	console.log("Cirrent position");
// 	console.log(podition);
// };

// const onGetPositionError = function (error) {
// 	console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccesss, onGetPositionError);

// const makeDidh = function (sheffName, dish) {
// 	console.log(`${shifName} cooks ${dish}`);
// };

// makeDish("Mango", "pie");
// makeDish("Mango", "omlett");
// makeDish("Mango", "tea");

// makeDish("Poly", "maetballs");
// makeDish("Poly", "soup");
// makeDish("Poly", "coffee");

// const makeShiff = function (name) {
// 	const makeDish = function (dish) {
// 		console.log(`${name} cooks ${dish}`);
// 	};
// 	return makeDish;
// };
// const Mango = makeShiff("Mangj");
// console.log(Mango);

// Mango("pie");
// Mango("tea");

// const numbers = [5, 10, 15, 20, 25];
// const doubledNumbers = numbers.map(number => number * 2);
// console.log("numbers", numbers);
// console.log("doubledNumbers", doubledNumbers);

// const filteredNumbers = numbers.filter(number => number < 15 || number > 20);
