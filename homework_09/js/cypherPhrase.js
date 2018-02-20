var charactersMap = {a: "o", c: "d", t: "g"};
// var array = ["c","a","t"];

// for (i=0; i < array.length; ++i) {
// 	if (charactersMap[array[i]])
// 		array[i] = charactersMap[array[i]];
// }

// console.log(array)



// function cypherPhrase(obj, string) { 

// }

// cypherPhrase(charactersMap, ‘kitty cat’ ); // -> “kiggy dog”

// let string = "kitty cat";

// let array = string.split("");

// console.log(array);

// for (i = 0; i < array.length; ++i) {
// 	for (let prop in charactersMap) {
// 	if (array[i] == prop) {
// 		array[i] = charactersMap[prop];
// 	}
// }
// }
// console.log(array.join(""));


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

cypherPhrase(charactersMap, "kitty cat");