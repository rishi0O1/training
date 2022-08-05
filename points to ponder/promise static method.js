
// promise.all(iterable) : reject if any of them reject 
const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}).catch((errors) => {
    console.log(errors) ;
});

// Promise.allSettled() : returns all status of all promise 
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result)));

// expected output:
// "fulfilled"
// "rejected"

// ------------------------------------------------------------------------------------------------------

// Promise.any() : if any fullfils i.e resolved then we have resule with any 

const promises4 = [promise1, promise2, promise3];

Promise.any(promises4).then((value) => console.log(value));

// ------------------------------------------------------------------------------------------------------

// Promise.race(iterable) : any of the iterable object get fulfilled or reject 







