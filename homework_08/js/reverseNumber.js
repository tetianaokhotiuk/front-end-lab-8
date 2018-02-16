"use strict";

function reverseNumber(num) {

	if (num < 0) {

		let number = num.toString().split("").slice(1).reverse();
		
		number.unshift("-");

		return console.log(Number(number.join("")));

	} else {

		return console.log(Number(num.toString().split("").reverse().join("")));

	}
	
}




