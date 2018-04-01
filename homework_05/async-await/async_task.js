//Task 1

const waitFewSec = (msec, triggerFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(triggerFail) {
        reject(false);
        return;
      }

      resolve(true);
    }, msec);
  });
};
const asyncFn = async () => {
  const result = await waitFewSec(1000);
  return result;
}

const doAsyncMagic = async () => {
  let a = await asyncFn();
  let arrRes = [a,a,a,a];
  console.log(arrRes);
}

doAsyncMagic();

//Task 2

async function* rangeGen() {
  for (let i = 1; i <= 15; i++) {
    yield i;
  }
}

async function iterateRange() { 
let sum = 0; 
for await (const item of rangeGen()) {
   sum = sum + item;
}
 return sum;
}

iterateRange();