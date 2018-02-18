function getMin(a, b, c) {

  let min = arguments[0];

  for (let i = arguments.length; i >= 0; i--) {

    if (arguments[i] < min) {

      min = arguments[i];

    }

  }

  return min;
}
 
