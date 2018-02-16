function isPrime(a) {
	
	let count = 0;

	for (let i = 0; i <= a; i++) {
		
		if (a%i === 0) {
			count++;
		}
	}

	return console.log(count <= 2);
}