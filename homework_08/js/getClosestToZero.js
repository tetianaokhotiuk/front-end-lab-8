function getClosestToZero(a, b, c) {

  let closest = Math.abs(arguments[0]);

  for (let i = 0; i < arguments.length; i++) {

    if (Math.abs(arguments[i]) < closest) {

      closest = arguments[i];

    }

  }

  return closest;
}

