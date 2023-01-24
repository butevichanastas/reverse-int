module.exports = function reverse(n) {
	
	if (n < 0) {
		let positiveNumber = Math.abs(n);
		let str = positiveNumber.toString().split('').reverse('').join('').toNumber();
		console.log(str)}
	else {
		let str = n.toString().split('').reverse('').join('').toNumber();
		console.log(str);
		}
}
