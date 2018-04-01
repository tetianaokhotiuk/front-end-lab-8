const max = process.argv[2];
let FizzBuzz = {
	[Symbol.iterator]() {
		let pre = 0, cur = pre + 1;
		return {
			next() {
				[pre, cur] = [pre + 1, cur];
				if ((pre%3 === 0) && (pre%5 === 0)) return { done: false, value: "FizzBuzz"};
				if (pre%3 === 0) return { done: false, value: "Fizz"};
				if (pre%5 === 0) return { done: false, value: "Buzz"};
				if (pre < max) return { done: false, value: pre };
				return { done: true};
			}
		}
	}
}

for (var n of FizzBuzz) {
	console.log(n);
}