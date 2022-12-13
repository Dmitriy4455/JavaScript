// const cart = [34, 35, 23, 34, 22, 33];
// let total = 0;
// // for (let i = 0; i < cart.length; i += 1);
// // total += cart[i];

// for (const value of cart) {
// 	total += value;
// }
// console.log("Total", total);

const logins = ["mango", "poly", "kiwi", "ajax"];
const loginToFind = "poly";
let message = " ";
for (let i = 0; i < logins.length; i += 1) {
	const login = logins[i];
	if (login === loginToFind) {
		message = "User ${loginToFind} is found.";
		break;
	}
	message = "User ${loginToFind} is not found.";
}
console.log(message);
