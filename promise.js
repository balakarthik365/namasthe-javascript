//A promise is an object that represent the eventual completion or failure of an asynchronous operations.
//We use promises to handle asynchronous operations so that is more manageble than callback functions to avoid callback hell and inversion of control.
//The promise has 3 states - pending, fullfilled and rejected.
// The promise result is undefined initially when promise is created and promise is pending.
// later after the promise is fullfilled the promise result contains the value returned.
// There might be a change for rejected state also if there is any error while performing the async operation.

//Promise objects are immutable. once a promise is created its state cannot be changed.

//If we use fetch web API to get data from server it returns a promise object.

//Promise chaining: It is a technique used to handle multiple asynchronous operations in a sequential manner by chaining multiple .then() methods together.

// const WEBAPI = "https://jsonplaceholder.typicode.com/posts/1";
// const user = fetch(WEBAPI);
// console.log(user); //Promise {<pending>}
// const result = user.then((response) => {
//   return response.json();
// });
// console.log("result", result);
const cart = ["shoes", "pants", "kurta"];

const createOrder = function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is empty");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve("Your order ID is: " + orderId);
      }, 1000);
    }
  });
};
function validateCart(cart) {
  return true;
}
function proceedToPayment(orderId) {
  const pr = new Promise(function (resolve, reject) {
    if (orderId) {
      resolve("The paymentInfo: Payment Successful");
    } else {
      reject(new Error("Payment Failed"));
    }
  });
  return pr;
}
function showSummary(paymentInfo) {
  return new Promise(function (resolve, reject) {
    if (paymentInfo) {
      resolve(
        "Order Summary: Your order is successful and payment info is " +
          paymentInfo
      );
    } else {
      reject(new Error("Unable to fetch order summary"));
    }
  });
}
function wallletBalance(updateWallet) {
  return new Promise(function (resolve, reject) {
    if (updateWallet) {
      resolve("Wallet updated successfully: Your balance is Rs. 5000");
    } else {
      reject(new Error("Unable to update wallet balance"));
    }
  });
}

createOrder()
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return showSummary(paymentInfo);
  })
  .then(function (updateWallet) {
    console.log(updateWallet);
    return wallletBalance(updateWallet);
  })
  .then(function (showWalletBalance) {
    console.log(showWalletBalance);
  })
  .catch(function (err) {
    console.log("Error", err.message);
  });
//promise.all(): It is used to handle multiple promises in parallel. It takes an array of promises.
//It takes an array of promises as input and returns a single promise that resolves when all the input promises are resolved,
//or rejects when any of the input promises is rejected.

//ex: promise.all([p1,p2,p3])
//Now p1 takes 3 seconds to resolve, p2 takes 2 seconds to resolve and p3 takes 1 second to resolve.
//When all of them are success in that case. the output of all 3 will be an array with the result of each promise in the same order as the input promises.
//[val1, val2 val3] - p1 -> val1, p2 -> val2, p3 -> val3.
//promise.all([p1, p2, p3]); -> if p3 fails.
//but, final promise will resolve only after 3 seconds when all the promises are resolved. because p1 takes the longest time to resolve.
//if any one of promise is rejected among p1, p2 and p3 then the final promise will be rejected with the reason of the first promise that was rejected.
//the output shows the rejceted promise reason only. if p3 fails then the promise is rejected in 1 second itself and we get the reason for p3 failure only.

//promise.allSetteled(): It is used to handle multiple promises in parallel. It takes an array of promises.
//ex: promise.all([p1,p2,p3])
//Now p1 takes 3 seconds to resolve, p2 takes 2 seconds to resolve and p3 takes 1 second to resolve.
//When all of them are success in that case. the output of all 3 will be an array with the result of each promise in the same order as the input promises.
//[val1, val2 val3] - p1 -> 
//  p2 -> val2, p3 -> val3.
//promise.allSetteled([p1, p2, p3]); -> if p3 fails.
//wait for all promises to be setteled either resolved or rejected.
//[val1, val2, err3] - p1 -> val1, p2 -> val2, p3 -> err3.

//promise.race():
//It takes an array of promises, promise.race([p1, p2, p3]);
//if p1 takes 3 seconds to resolve, p2 takes 2 seconds to resolve and p3 takes 1 second to resolve.
//Now, it will give the first setteled promise value as response irrespective of success or failure.

//promise.any():
//It takes an array of promises, promise.any([p1, p2, p3]);
//if p1 takes 3 seconds to resolve, p2 takes 2 seconds to resolve and p3 takes 1 second to resolve.
//it will wait for first promise to get successfull. p3 is the fastest one to be setteled in 1 second.
//if p3 gets rejected then it will wait for p2 to get successfull. if p2 gets successfull then the final promise will be resolved with p2 value.

//if all the promises are rejected then the final promise will be rejected with an AggregateError containing all the rejection reasons.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 1 resolved");
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 resolved");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 3 rejected");
  }, 3000);
});
// const promiseAll = Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// const promiseAll = Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(promiseAll);
// const promiseAll = Promise.race([p1, p2, p3]) //returns the value of the first setteled promise irrespective of resolved or rejected / success or failure / fullfilled or rejected
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(promiseAll);
const promiseAll = Promise.any([p1, p2, p3]) // returns the value of the first resolved promise with only success / fullfilled
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors);
  });
console.log(promiseAll);
