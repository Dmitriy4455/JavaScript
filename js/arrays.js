const cart = [34, 35, 23, 34, 22, 33];
let total = 0;
// for (let i = 0; i < cart.length; i += 1);
// total += cart[i];

for (const value of cart) {
	total += value;
}
console.log("Total", total);
