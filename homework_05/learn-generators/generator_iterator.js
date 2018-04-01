function *factorial(n) {
  let item = 1;
  for (let i = 1; i <= n; i++) {
  	item = item * i;
  	yield item;
  }
}

for (let n of factorial(5)) {
	console.log(n);
}