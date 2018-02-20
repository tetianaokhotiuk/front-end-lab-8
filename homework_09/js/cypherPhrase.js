// let charactersMap = {a: "o", c: "d", t: "g"};

function cypherPhrase(obj, string) {
	
	let array = string.split("");

	let arrPhrase = getTransformedArray(array, function(item) {

			if (obj[item]) {

				return obj[item];

			} else {

				return item;
		}
	})

	return arrPhrase.join("");
}

