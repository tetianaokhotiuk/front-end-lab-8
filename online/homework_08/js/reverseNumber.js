"use strict";

function reverseNumber(num) {

	if (num < 0) {

		let number = num.toString().split("").slice(1).reverse();
		
		number.unshift("-");

		return Number(number.join(""));

	} else {

		return Number(num.toString().split("").reverse().join(""));

	}
	
}






