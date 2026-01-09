// function a() {
//   console.log("function statement / declaration");
// }
// a();
// var b = function () {
//   console.log("function expression");
// };
// b();
// var c = function xyz() {
//   console.log("named function expression");
// };
// c();
// // xyz(); //will throw reference error xyz not defined.
// function sum(x, y) {
//   // x,y are parameters for a function while it created and variables are local in the function scope
//   console.log(x + y);
// }
// sum(1, 2); // 1,2 are arguments passed to function when called

// const d = function b(param) {
//   console.log(param);
// };
// d(function () {});

// const e = function b() {
//   return function xyz() {};
// };
// console.log(e());

// setTimeout(function () {
//   console.log("hi");
// });

// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });

// function attachEventListner() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("button clicked", count++);
//   });
// }
// attachEventListner();

// console.log("Start");
// setTimeout(function cb() {
//   console.log("callback");
// }, 5000);
// console.log("End");
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//   console.log("button clicked");
//   setTimeout(function () {
//     console.log("callback settimeout");
//   }, 1000);
//   fetch("https://jsonplaceholder.typicode.com/posts/1").then(
//     async function response(response) {
//       console.log("callback fetch", await response.json());
//     }
//   );
// });
console.log("check callback queue start");
setTimeout(function () {
  console.log("callback settimeout");
}, 1000);
fetch("https://jsonplaceholder.typicode.com/posts/1").then(
  async function response(response) {
    console.log("callback fetch", await response.json());
  }
);
console.log("check callback queue end");

