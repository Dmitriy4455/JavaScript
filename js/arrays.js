// 1. Find the total amount
// const cart = [34, 35, 23, 34, 22, 33];
// let total = 0;
// // for (let i = 0; i < cart.length; i += 1);
// // total += cart[i];

// for (const value of cart) {
// 	total += value;
// }
// console.log("Total", total);

// 2. Check the correct username
// const logins = ["mango", "poly", "kiwi", "ajax"];
// const loginToFind = "poly";
// // let message = " ";
// // for (let i = 0; i < logins.length; i += 1) {
// // 	const login = logins[i];
// // 	if (login === loginToFind) {
// // 		message = "User ${loginToFind} is found.";
// // 		break;
// // 	}
// // 	message = "User ${loginToFind} is not found.";
// // }
// const message = logins.includes(loginToFind) ? "Yes" : "No";
// console.log(message);

//3. Find the smallest number
// const numbers = [34, 5, 24, 6, 34, 47, 34, 9, 54];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
// 	if (number < smallestNumber) {
// 		smallestNumber = number;
// 	}
// }
// console.log("Smallest Number", smallestNumber);

// Functions for arrays
// const logItems = function (iitems) {
// 	for (const item of items) {
// 		console.log(item);
// 	}
// };
// logItems("Nango", "Poly", "Kiwi", "Ajax");
// logItems(1, 2, 3, 4, 5);
// logItems("keyboard", "headphons", "watches");

// //Check logins
// const logins = ["peach", "kiwi", "mark", "poly"];
// const findLogin = function (allLogins, loginToFind) {
// 	return allLogins.includes(loginToFind) ? "User ${loginToFind} found." : "User ${loginToFind} not found.";
// };
// console.log(findLogin(logins, "avocado"));
// console.log(findLogin(logins, "kiwi"));
// console.log(findLogin(logins, "james"));
// console.log(findLogin(logins, "poly"));

// Functions
// const findSmallestNumber = function (numbers) {
// 	let smollestNumber = numbers[0];
// 	for (const number of numbers) {
// 	if (number < smallestNumber) {
// 		smallestNumber = number;
// 	}
// 	}
// 	return smollestNumber;
// }

// console.log(findSmallestNumber([3, 8, 12, -2, 15]));
// console.log(findSmallestNumber({ 100, 54, 8, 12, 47}));
// console.log(findSmallestNumber([7, 21, 84, 15, 4]));

// // Function 2
// const slugify = function (string) {
// 	return string.toLowerCase().split(" ").join("-");
// };

// console.log(slugify("We know what you’re thinking."));
// console.log(slugify("How can I watch the world’s best teams."));
// console.log(slugify("Picture an unrivalled atmosphere"));

// Arguments
// const fn = function (a, b, c, ...args) {
// 	console.log(`${a}, ${b}, ${c}`);
// 	console.log(args);
// };
// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// // 1. Arguments
// const filterNumbers = function (array, ...args) {
// 	console.log("array", array);
// 	console.log("args", args);
// 	const uniqueElement = [];

// 	for (const element of array) {
// 		if (args.includes(element)) {
// 			uniqueElement.push(element);

// 			console.log(`${element} is found`);
// 		}
// 	}
// 	return uniqueElement;
// };
// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 20, 25, 30], 23, 30, 18, 15));
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

// const frends = ["Nango", "Poly", "Kiwi", "Ajax"];

// console.table(frends);
// frends[0] = "qwer";
// console.table(frends);
// console.log(frends[2]);

// const lastIndex = frends.length - 1;
// console.log(frends[lastIndex]);

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
// 	total += cart[i];
// }
// // for (const value of cart) {
// // 	total += value;
// //}

// console.log("Total", total);
// //Add tax

// for (let i = 0; i < cart.length; i += 1) {
// 	cart[i] = Math.round(cart[i]) * 1.1;
// }

// // for (let value of cart) {
// // 	value = Math.round(value * 1.1);
// // }
// console.log(cart);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
// 	console.log(numbers[i]);
// 	if (numbers[i] % 2 === 0) {
// 		console.log("Четное");
// 		total += numbers[i];
// 	}
// }
// for (const number of numbers) {
// 	if (number % 2 === 0) {
// 		console.log("Четное");
// 		total += number;
// 	}
// }
// console.log("Total", total);

//Напиши скрипт, который подсчитывает сумму всех четных чисел в массиве

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //Переменная total;
// let total = 0;
// //Перебераем массив
// // for (let i = 0; i < numbers.length; i += 1) {
// // 	const number = numbers[i];
// // 	console.log(numbers[i]);
// for (const number of numbers) {
// 	//На каждой итерации проверить элемент на четность
// 	if (number % 2 === 0) {
// 		console.log("even");

// 		//Если четное, то плюсуем к total
// 		total += number;
// 	}
// }
// console.log("Total", total);

/*Напиши скрипт, для поиска логина
Если логина нет, то выводится сообщение: "User ${loginToFind} is not found."	
Если логин есть, то выводится сообщение: "User ${loginToFind} is found."
Сначала через for
Сначала через for...of
Логика break
Затем через includes с тернарным оператором
*/

// const logins = ["peach", "kiwi", "mark", "poly"];
// const findLogin = "kiwi";
// //let message = `User ${findLogin} is not found.`;

// // // for (let i = 0; i < logins.length; i += 1)
// // for (const login of logins) {
// // 	//const login = logins[i];
// // 	if (login === findLogin) {
// // 		message = `User ${findLogin} is found.`;
// // 		break;
// // 	}
// // }
// // console.log(message);

// const message = logins.includes(findLogin) ? `User ${findLogin} is found.` : `User ${findLogin} is not found.`;
// console.log(message);

//Напиши скрипт поиска самого маленького числа в массиве`,
//при условии, что числа уникальные (не повторяются)

// const numbers = [54, 34, 75, 24, 76, 12, 78];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
// 	if (number < smallestNumber) {
// 		smallestNumber = number;
// 	}
// }
// console.log(smallestNumber);

//Напиши скрипт, который объеденяет все элементы массива в одно строковае значение
//Разделить запятой.
//Сначала через for
// Потом через joint

// const friends = ["Nango", "Poly", "Kiwi", "Ajax"];

// // let message = "";
// // for (let i = 0; i < friends.length; i += 1) {
// // 	message += friends[i];
// // 	if (i < friends.length - 1) {
// // 		message += ", ";
// // 	}
// // }
// const message = friends.join(", ");
// console.log(message);

/*Напиши скриат, который заменяет регистр каждого символа
в строке на противоположный.
Например, JavaScript -> jAVAsCRIPT 
*/
// const text = "JavaScript";
// const text2 = text.split("");
// let invertedText = "";
// // for (const letter of text2) {
// // 	if (letter === letter.toUpperCase()) {
// // 		invertedText += letter.toLowerCase();
// // 	} else {
// // 		invertedText += letter.toUpperCase();
// // 	}
// // }
// //то же в тернарном выражении

// for (const letter of text2) {
// 	invertedText += letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
// }
// console.log(invertedText);

// const title = "Top 10 benefits of React framework";
// const normolizedTitle = title.toLowerCase().split(" ").join("-");

// console.log(normolizedTitle);

//Напиши скрипт, который считает сумму двух массивов
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const numbers = array1.concat(array2);
// console.log(numbers);

// let total = 0;
// for (const number of numbers) {
// 	total += number;
// }

// console.log(total);

/*Работаем с коллекцией карточек в trello
Удалить
Добавить
Обнолить
*/

// const cards = ["card - 1", "card - 2", "card - 3", "card - 4", "card - 5"];
// //Удалить
// // const cardToRemove = "card - 2";
// // const index = cards.indexOf(cardToRemove);
// cards.splice(2, 0, "card - 6");
// console.table(cards);
//Добавить
// const cardToAdd = "card - 6";

// console.log(cards);

//Function Функции
// function printMessage(argument) {
// 	console.log("Hello World!");
// 	console.log(argument);
// }

// printMessage("Hi");
// argument();
// function foo(moo1, moo2, moo3) {
// 	return moo1 + moo2 + moo3;
// }
// console.log(foo(1, 2, 3));

// const foo = function (arr) {
// 	console.log(arr);
// };
// foo([1, 2, 3]);

// const bar = arg => {
// 	console.log(arg);
// };
// bar("1");

//Напиши функцию для поиска логина
// const logins = ["peach", "kiwi", "mark", "poly"];
// const loginToFind = "kiwi";
// const message = logins.includes(loginToFind) ? `User ${loginToFind} is found.` : `User ${loginToFind} is not found.`;
// console.log(message);
//const findLogin = function (allLogins, loginToFind) {
// 	let message = `User ${loginToFind} not found`;
// 	for (const login of logins) {
// 		if (login === loginToFind) {
// 			message = `User ${loginToFind} is found`;
// 		}
// 	}
// 	return message;
// };
//OR
// const findLogin = function (allLogins, loginToFind) {
// 	return allLogins.includes(loginToFind) ? `User ${loginToFind} is found` : `User ${loginToFind} not found`;
// };

// console.log(findLogin(logins, "apple"));
// console.log(findLogin(logins, "kiwi"));
// console.log(findLogin(logins, "pine"));
// console.log(findLogin(logins, "dick"));

// const numbers = [34, 65, 3, 76, 37, 5, 10];

// const findSmallestNumber = function (numbers) {
// 	let smallestNumber = numbers[0];
// 	for (const number of numbers) {
// 		if (number < smallestNumber) {
// 			smallestNumber = number;
// 		}
// 	}
// 	return smallestNumber;
// };
// console.log(findSmallestNumber([4, 24, 3, 45, 67, 34, 8]));
// console.log(findSmallestNumber([45, 7, 3456, 867, 346, 4]));

// const newsTitle = "Top 10 YouTube Channels";
// const change = function (string) {
// 	return string.toLowerCase().split(" ").join("-");
// };
// console.log(change("Top 10 YouTube Channels"));
// import moduleName from "module";

//Псевдомассив

//Old school

// const fn = function () {
// 	console.log(arguments);
// 	const arg = Array.from(arguments);
// 	console.log(arg);
// };
// fn(2, 5, 7);
// fn(2, 5, 7, 9, 1);
// fn(2, 5, 7, 9, 1, 3, 6);

//or us
//  ...rest

// const fn = function (...args) {
// 	//console.log(`${a}, ${b}, ${c}`);
// 	console.log(args);
// };
// fn(2, 5, 7);
// fn(2, 5, 7, 9, 1);
// fn(2, 5, 7, 9, 1, 3, 6);

// const add = function (...args) {
// 	console.log(args);
// 	let total = 0;

// 	for (const arg of args) {
// 		total += arg;
// 	}
// 	return total;
// };
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));

// const filterNumbers = function functionName(array, ...args) {
// 	console.log("array:", array);
// 	console.log("args:", args);
// 	const uniueElement = [];

// 	for (const element of array) {
// 		console.log(element);
// 		if (args.includes(element)) {
// 			uniueElement.push(element);
// 			console.log(`${element} is includes`);
// 		}
// 	}
// 	return uniueElement;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 20, 25, 30], 23, 56, 10, 15, 45));
// console.log(filterNumbers([100, 200, 300, 400, 500], 4, 39, 43, 100, 200));

// const arr = [1, 2, 3, 4];
// const arr1 = [2, 4, 6, 8];
// const arr2 = [3, 6, 9, 12];
// function sum(item) {
// 	for (let i = 0; i < item.length; i += 1) {
// 		item[i] = item[i] * 3;
// 	}
// 	console.log(item);
// }
// sum(arr);
// sum(arr1);
// sum(arr2);

// function add() {
// 	let sum = 0;
// 	for (const value of arguments) {
// 		sum += value;
// 		if (sum > 10) {
// 			return true;
// 		}
// 	}
// 	return false;
// }
// const response = add(1, 2, 3, 4, 5, 6);
// console.log(response);

// function min(a, b) {
// 	// 	if (a > b) {
// 	// 		return b;
// 	// 	}
// 	// 	return a;
// 	return a > b ? b : a;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// function formatTimes(minutes) {
// 	const hours = Math.floor(minutes / 60);
// 	minutes = minutes % 60;
// 	return `${hours.toString().padStart(2, 0)} : ${minutes.toString().padStart(2, 0)}`;
// }

// console.log(formatTimes(70));
// console.log(formatTimes(450));
// console.log(formatTimes(1441));

// function calcAverage() {
// 	// console.log(calcAverage);
// 	let total = 0;
// 	for (const num of arguments) {
// 		total += num;
// 	}

// 	return total / arguments.length;
// }

// console.log(calcAverage(1, 2, 3, 4));
// console.log(calcAverage(14, 8, 2));
// console.log(calcAverage(27, 43, 2, 8, 36));

//Objects

// const playlist = {
// 	name: "My best playlist",
// 	rating: 5,
// 	tracks: ["track - 1", "track - 2", "track - 3"],
// 	trackCount: 3,
// };
// console.log(playlist);
// console.log(playlist.rating);
// console.log(playlist["rating"]);
// console.log(playlist["tracks"]);

// const username = "Mango";
// const email = "mango@mail.com";

// const signupData = {
// 	username,
// 	email,
// };
// console.log(signupData);

// const playlist = {
// 	name: "My super list",
// 	rating: 5,
// 	tracks: ["track-1", "track-2", "track-3"],
// 	trackCount: 3,
// 	getName(a) {
// 		console.log("That is getName", a);
// 	},
// 	addTrack(track) {
// 		this.tracks.push(track);
// 	},
// 	upgradeRating(newRating) {
// 		this.rating = newRating;
// 	},
// 	getTracksCount() {
// 		return this.tracks.length;
// 	},
// };
// playlist.getName(5);
// playlist.addTrack("New Track-1");
// console.log(playlist.getTracksCount());
// playlist.addTrack("New Track-2");
// console.log(playlist.getTracksCount());
// playlist.upgradeRating(4);

// console.log(playlist);

// const feedback = {
// 	good: 5,
// 	neutral: 10,
// 	bad: 3,
// };
// let totalFeedback = 0;
// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
// 	console.log(key);
// 	console.log(feedback[key]);
// 	totalFeedback += feedback[key];
// }
// console.log("Total Feedback", totalFeedback);

// const values = Object.values(feedback);
// console.log(values);
// for (const value of values) {
// 	console.log(value);
// 	totalFeedback += value;
// }
// console.log("Total Feedback", totalFeedback);

// const friends = [
// 	{ name: "Mango", online: false },
// 	{ name: "Kiwi", online: true },
// 	{ name: "Poly", online: true },
// 	{ name: "Ajax", online: false },
// ];
// console.table(friends);
// for (const friend of friends) {
// 	console.table(friend.name);
// 	friend.newProp = 555;
// }
// console.table(friends);

// const findFriendByName = function (allFriends, name) {
// 	for (const friend of friends) {
// 		// 	console.log(friend.name);
// 		// 	console.log(friends);
// 		if (friend.name === name) {
// 			return "We found it!";
// 		}
// 	}
// 	return "Not found";
// };
// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

//Find friends online
// const getOnlineFriends = function (allFriends) {
// 	const onlineFriends = [];

// 	for (const friend of allFriends) {
// 		console.log(friend);
// 		if (friend.online) {
// 			onlineFriends.push(friend);
// 		}
// 	}
// 	return onlineFriends;
// };
// console.log(getOnlineFriends(friends));

// const first = { a: 1, b: 2, c: 3 };
// const second = { a: 2, d: 4 };
// const finalCount = { ...first, ...second };
// console.log(finalCount);

// const playlist = {
// 	name: "My playlist",
// 	rating: 5,
// 	tracks: ["track1", "track2", "track3", "track4"],
// 	trackCount: 4,
// };
// const { name, rating, tracks, trackCount: numberOfTrscks = 0, author = "unknown" } = playlist;
// console.log(playlist);
// console.log(numberOfTrscks);

// const rgb = [25, 10, 90];
// const [red, green, blue] = rgb;
// console.log(red);

// const authors = {
// 	kiwi: 4,
// 	mango: 3,
// 	ajax: 2,
// 	poly: 5,
// };
// const entries = Object.entries(authors);
// console.log(entries);
// for (const [name, rating] of entries) {
// 	//lvl2
// 	// const [name, rating] = entry;
// 	//lvl1
// 	// const name = entry[0];
// 	// const rating = entry[1];
// 	console.log(name, rating);
// }

// const cart = {
// 	item: [],
// 	getItems() {
// 		return this.items;
// 	},
// 	add(product) {
// 		this.items(product);
// 	},
// 	remove(productName) {
// 		for (const item of this.items) {
// 			console.log(productName);
// 		}
// 	},
// };

// cart.add({ name: "apple", price: 50 });
// cart.add({ name: "lemon", price: 60 });
// cart.add({ name: "lime", price: 80 });
// cart.add({ name: "berry", price: 110 });
// console.table(cart.getItems());

// const user = {
// 	name: "Mike",
// 	age: 30,
// 	languages: {
// 		html: false,
// 		css: false,
// 		js: true,
// 		reactNative: true,
// 	},
// };

// console.log(user.languages.js);
// console.log(user["languages"]["reactNative"]);
// user.age = 30;
// console.log(user);

// const user = {
// 	name: "Mango",
// 	age: 20,
// 	hobby: "html",
// 	premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// // user["premium"] = false;
// const key = "premium";
// user[key] = false;
// console.log(user);

// const keys = Object.keys(user);
// for (const key of keys) {
// 	console.log(user[key]);
// }
// console.log(user[key]);

// const salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// };
// let sum = 0;
// const values = Object.values(salaries);
// console.log(values);
// for (const value of values) {
// 	sum += value;
// }
// console.log(sum);

// // for (const key in salaries) {
// // 	sum += salaries[key];
// // }
// // console.log(sum);

// const stones = [
// 	{
// 		name: "Emerald",
// 		price: 1300,
// 		quantity: 4,
// 	},
// 	{
// 		name: "Diamand",
// 		price: 2700,
// 		quantity: 3,
// 	},
// 	{
// 		name: "Sapphire",
// 		price: 400,
// 		quantity: 7,
// 	},
// 	{
// 		name: "Gravel",
// 		price: 200,
// 		quantity: 2,
// 	},
// ];
// function calcTotalPrice(stones, stoneName) {
// 	let result = 0;
// 	for (const stone of stones) {
// 		// if (stone.name === stoneName) {
// 		// 	result = stone.price * stone.quantity;
// 		// }
// 		if (stone.name === stoneName) {
// 			return stone.price * stone.quantity;
// 		}
// 		console.log(stone.name);
// 	}
// 	// return result;
// }
// console.log(calcTotalPrice(stones, "Diamand"));

// const Transaction = {
// 	DEPOSIT: "deposit",
// 	WITHDRAW: "withdraw",
// };
// // Object.freeze(Transaction);
// Transaction.DEPOSIT = "credit";
// console.log(Transaction);

// const account = {
// 	balance: 0,
// 	transaction: [],
// 	createTransaction(amount, type) {
// 		return {
// 			id: Date.now(),
// 			amount,
// 			type,
// 		};
// 	},
// };

// console.log(account.createTransaction(1000, "deposit"));

//Деструктуризация
// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log(one);
// console.log(two);
// console.log(three);

// const user = {
// 	name: "Mal",
// 	age: 111,
// 	skills: {
// 		html: true,
// 		css: true,
// 		js: false,
// 	},
// };
// const name = "Pal";
// const { age, name: userName } = user;

// console.log(userName);
// console.log(name);

// const user = {
// 	name: "Test",
// 	age: 11,
// 	skills: {
// 		html: true,
// 		css: true,
// 		js: false,
// 		cars: {
// 			audi: "A6",
// 			bmw: "X5",
// 		},
// 	},
// };
// const {
// 	name,
// 	skills: {
// 		cars: { audi },
// 	},
// } = user;

// // console.log(skills);
// console.log(user);
// console.log(audi);

// const user = {
// 	name: "Test",
// 	age: 11,
// 	skills: {
// 		html: true,
// 		css: true,
// 		js: false,
// 	},
// 	languages: [{ html: false }, { css: false }],
// };

// for (const language of user.languages) {
// 	console.log(language);
// }

// ...rest  ...spread
// //Spread
// const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = [...arr1];
// arr2.splice(0, 1);
// console.log(arr2);

//rest
// const arr = [2, 3, 4, 5, 6, 7, 8];
// const [one, ...rest] = arr;
// console.log(one);
// console.log(rest);
// for (let i = 0; i < rest.length; i += 1) {
// 	rest[i] *= one;
// }
// console.log(rest);

//rest for function

// function foo(...arr) {
// 	console.log(arr);
// }
// foo(1, 2, 3, 4, 5);

//spread

// function createContact(partialContact) {
// 	return {
// 		id: generateId(),
// 		createAt: new Date(),
// 		list: "default",
// 		...partialContact,
// 	};
// }
// console.log(
// 	createContact({
// 		name: "Mango",
// 		email: "mango@mail.com",
// 		list: "friends",
// 	}),
// );
// console.log(
// 	createContact({
// 		name: "Poly",
// 		email: "poly@mail.com",
// 	}),
// );
// function generateId() {
// 	return "_" + Math.random().toString(36).substr(2, 9);
// }

// function transformUsername(firstName, lastName, ...props) {
// 	return {
// 		fullName: `${firstName} ${lastName}`,
// 		...props,
// 	};
// }

// console.log(
// 	transformUsername({
// 		id: "1",
// 		firstName: "Jacob",
// 		lastName: "Mercer",
// 		email: "j.mercer@mail.com",
// 		friendCount: 40,
// 	}),
// );
// console.log(
// 	transformUsername({
// 		id: "2",
// 		nameName: "Adrian",
// 		lastName: "Cross",
// 		email: "a.cross@mail.com",
// 		friensCount: 20,
// 	}),
// );

//Callback function

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
// // doMath(12, 3, sub);
// //or inline function

// doMath(2, 3, function (x, y) {
// 	return x + y;
// });
// doMath(12, 3, function (x, y) {
// 	return x - y;
// });

// const callback = function () {
// 	console.log("After 3 sec");
// };
// console.log("Before");
// setTimeout(callback, 3000);
// console.log("After");

// const filter = function (array, test) {
// 	const filteredArray = [];
// 	for (const el of array) {
// 		console.log(el);
// 		const passed = test(el);

// 		if (passed) {
// 			filteredArray.push(el);
// 		}
// 	}
// 	return filteredArray;
// };

// const callback = function (value) {
// 	return value >= 3;
// };

// const callback2 = function (value) {
// 	return value <= 4;
// };

// const r1 = filter([1, 2, 3, 4, 5, 6], callback);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// const fruits = [
// 	{
// 		name: "apples",
// 		quantity: 200,
// 		isFresh: true,
// 	},
// 	{ name: "grapes", quantity: 150, isFresh: false },
// 	{
// 		name: "bananas",
// 		quantity: 100,
// 		isFresh: true,
// 	},
// ];

// const getFruitsWithQuantity = function (fruit) {
// 	return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

//Функция замыкания (Closure)

// const makeDish = function (sheffName, dish) {
// 	console.log(`${sheffName}` готовит ${dish});
// }
// makeDish("Mango", "пирог");
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'суп');
// makeDish('Poly', 'кофе');

// const makeSheff = function (name) {
// 	const makeDish = function (dish) {
// 		console.log(`${name} готовит ${dish}`);
// 	};
// 	return makeDish;
// };
// const mango = makeSheff("Mango");
// mango("пирог");
// mango("омлет");

// const poly = makeSheff("Poly");

// poly("котлеты");
// poly("суп");

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
// 	let salary = baseSalary;
// 	return {
// 		raise(amount) {
// 			salary += amount;
// 		},
// 		lower(amount) {
// 			salary -= amount;
// 		},
// 		current() {
// 			return `Current salary ${employeeName} - ${salary}`;
// 		},
// 	};
// };

// const salaryManager = salaryManagerFactory("Mango", 500);
// console.log(salaryManager.current());
// console.dir(salaryManager.current);

// Arrow function
// const add = function (a, b, c) {
// 	console.log(a, b, c);
// 	return a + b + c;
// };

// const addArrpow = (a, b, c) => a + b + c;
// add(5, 10, 15);

// Перебирающие методы массива
//forEach
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach(function (number, index, array) {
// 	console.log("number", number);
// });

//map
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const doubledNumbers = numbers.map(function (number) {
// 	return number * 2;
// });
// console.log(numbers);
// console.log(doubledNumbers);

//filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredNumbers = numbers.filter(number => {
// 	return number > 6 || number < 8;
// });
// console.log(filteredNumbers);

//find
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const number = numbers.find(number => number === 5);
// console.log(number);

//reduce
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// const salary = {
// 	mango: 100,
// 	poly: 50,
// 	ajax: 150,
// };
// // const totalsalary = Object.values(salary).reduce((total, value) => {
// // 	return total + value;
// // }, 0);
// const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0);
// console.log(totalSalary);

// const cart = [
// 	{ label: "apples", quantity: 2, price: 100 },
// 	{ label: "oranges", quantity: 3, price: 200 },
// 	{ label: "bananas", quantity: 1, price: 300 },
// ];

// const totalAmount = cart.reduce((total, item) => {
// 	return total + item.price * item.quantity;
// }, 0);
// console.log(totalAmount);

// const tweets = [
// 	{ id: "000", likes: 5, tags: ["js", "nodejs"] },
// 	{ id: "001", likes: 2, tags: ["html", "css"] },
// 	{ id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// 	{ id: "003", likes: 8, tags: ["css", "react"] },
// 	{ id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allTags = tweets.reduce((tags, tweet) => {
// 	tags.push(...tweet.tags);
// 	return tags;
// }, []);
// console.log(allTags);

// const tagsStats = allTags.reduce((acc, tag) => {}, {});
// //console.log(tagsStats);

//sort

// const numbers = [1, 9, 6, 2, 3];
// // numbers.sort();
// // console.log(numbers);

// const letters = ["b", "B", "a", "A"];
// // letters.sort();
// // console.log(letters);

// numbers.sort((curEl, nextEl) => {
// 	return curEl - nextEl;
// });
// console.log(numbers);
// const descSortedNumbers = [...numbers].sorted((a, b) => b - a);
// const ascSortedNumbers = [...numbers].sorted((q, b) => a - b);
// console.log(descSortedNumbers);
// console.log(ascSortedNumbers);

// const players = [
// 	{ id: "player-1", name: "Mango", timePlayed: 310, online: false },
// 	{ id: "player-2", name: "Poly", timePlayed: 470, online: true },
// 	{ id: "player-4", name: "Kiwi", timePlayed: 230, online: true },
// 	{ id: "player-3", name: "Ajax", timePlayed: 150, online: false },
// 	{ id: "player-5", name: "Chelsy", timePlayed: 80, online: true },
// ];

// const sortedPlayers = [...players].sort((a, b) => a.timePlayed - b.timePlayed);
// console.log(sortedPlayers);

//flatMap
//const tweets = [
// 	{ id: "000", likes: 5, tags: ["js", "nodejs"] },
// 	{ id: "001", likes: 2, tags: ["html", "css"] },
// 	{ id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
// 	{ id: "003", likes: 8, tags: ["css", "react"] },
// 	{ id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// //const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// //const tags = tweets.map((t) => t.tags.flat());
// const tags = tweets.flatMap((t) => t.tags);
// console.log(tags);

//Chaining
// const numbers = [1, 5, 2, 4, 3];
// const greaterThanTwo = numbers.filter((number) => number > 2);
// console.log(greaterThanTwo);
// const multipliedByTwo = greaterThanTwo.map((number) => number * 2);
// console.log(multipliedByTwo);
// const sorted = multipliedByTwo.sort((a, b) => a - b);
// console.log(sorted);

// const result = numbers
// 	.filter((number) => number > 2)
// 	.map((number) => number * 2)
// 	.sort((a, b) => a - b);
// console.log(result);

// const arr = [2, 6, 1, 7, 3];
// function each(arr, callback) {
// 	let total = arr[0];
// 	for (let i = 1; i < arr.length; i += 1) {
// 		total = callback(total, arr[i]);
// 	}
// 	return total;
// }

// console.log(each(arr, add));

// function add(a, b) {
// 	return a + b;
// }

//const arr = [2, 6, 2, 7, 3];
// arr.forEach((el, index, array) => {
// 	arr[index] = el * 2;
// });
// console.log(arr);

// arr.forEach((el, index, array) => {
// 	console.log(`work with number ${el}`);
// });

// const user = {
// 	name: "Mango",
// 	say() {
// 		console.log(`Hello ${this.name}`);
// 	},
// 	sayHi: () => {
// 		console.log(`Hello ${this.name}`);
// 	},
// };
// user.say();
// user.sayHi();

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const result = arr.filter((item) => !(item % 2));
console.log(result);
