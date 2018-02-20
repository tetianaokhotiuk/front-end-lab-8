function predicateFunction(num) { 
return num > 3;
} // returns boolean value

function getFilteredArray(arr, func) {
	newArr = [];
	forEach(arr, function(item) {

		if (func(item)) {
			newArr.push(item);
		}
	});

	return newArr;
}

//getFilteredArray([1, 7, 20], predicateFunction); // -> [7, 20]
