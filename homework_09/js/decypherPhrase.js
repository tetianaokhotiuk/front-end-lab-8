function decypherPhrase(obj, string) {

	let emptyArr = {};

	for (prop in obj) {

		emptyArr[obj[prop]] = prop;

	}

	let arrDePhrase = cypherPhrase(emptyArr, string);

	return arrDePhrase;
	
}


