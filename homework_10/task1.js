 function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
  iterator++;
  printIteratorValue();
}

function printIteratorValue() {
  console.log('Iterator value ', iterator);
}

let increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 1'

