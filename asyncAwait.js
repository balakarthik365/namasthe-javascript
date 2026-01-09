/**
 * what is async?
 * An asynchronous function is a function always return a promise.
 * either you return a promise explicitly or you return a value, the value will be wrapped in a resolved promise automatically.
 *
 * what is await?
 * An await keyword is used to wait for a promise.
 * It can only be used inside an async function.
 * It makes the code wait until the promise is resolved and returns the resolved value.
 *
 * both async and await combinely used to handle promises more easily and write cleaner code.
 *
 *Async is a keyword that is used to declare a function. And these functions are different from normal funcitons
 * because they always returns a promise.
 * If the function returns a value, the value is wrapped in a resolved promise automatically.
 * If the function throws an error, the error is wrapped in a rejected promise automatically.
 * Await is a keyword that is used to wait for a promise to be resolved and only used inside async functions.
 *
 * Asyn and await are syntactic sugar over promises and provides a cleaner and more readable way to handle asynchronous operations in JavaScript.
 **/
const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved1");
  }, 5000);
});
const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved2");
  }, 10000);
});
async function handlePromise() {
  console.log("start");
  //JS engine was waiting for the promise to be resolved here
  const val = await pr1;
  console.log("Namaste JS");
  console.log(val);
  const val2 = await pr2;
  console.log("Namaste JS 2");
  console.log(val2);
}
handlePromise();
// function getData() {
//   //JS engine will not wait here for promise to be resolved it will move to next line
//   pr.then((res) => console.log(res));
//   console.log("Namaste JS");
// }
// getData();
const APIURL = "https://jsonplaceholder.typicode.com/todos/10";
async function handleFetch() {
  // try {
  const handleData = await fetch(APIURL);
  if (!handleData.ok) {
    throw new Error(`HTTP error! status: ${handleData.status}`);
  }
  const response = await handleData.json();
  console.log("Response object:", response);
  // } catch (err) {
  //   console.log("Error in the API call:", err.message);
  // }
}
handleFetch().catch((err) => {
  console.log("Error in the API call:", err.message);
});
