function getFilteredArray(arr, func) {
	newArr = [];
	forEach(arr, function(item) {

		if (func(item)) {
			newArr.push(item);
		}
	});

	return newArr;
}


