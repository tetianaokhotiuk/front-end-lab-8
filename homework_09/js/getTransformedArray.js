function increment(num) {
	return num + 1;
}

function getTransformedArray(arr, func) {
	newArr = [];
	forEach(arr, function(item) {
		newArr.push(func(item));
	}); 
		return newArr;

	}

//getTransformedArray(["tank",1,333], increment);

