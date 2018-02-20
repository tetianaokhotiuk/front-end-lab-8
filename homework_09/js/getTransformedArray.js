function getTransformedArray(arr, func) {
	newArr = [];
	forEach(arr, function(item) {
		newArr.push(func(item));
	});
		return newArr;
	}



