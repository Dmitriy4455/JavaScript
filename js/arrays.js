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

// 1. Arguments
const filterNumbers = function (array, ...args) {
	console.log("array", array);
	console.log("args", args);
	const uniqueElement = [];

	for (const element of array) {
		if (args.includes(element)) {
			uniqueElement.push(element);

			console.log(`${element} is found`);
		}
	}
	return uniqueElement;
};
console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 15, 20, 25, 30], 23, 30, 18, 15));
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));
