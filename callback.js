//callback hell: A callback hell is a situation in which multiple nested callback functions are used to handle asynchronous operations,
//leading to code that is difficult to read and maintain and is often referred to as "pyramid of doom". It also creates inversion of control,
//where the flow of control is inverted from the traditional top-down approach, making it harder to reason about the code.
setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 seconds passed");
    setTimeout(() => {
      console.log("3 seconds passed");
    }, 1000);
  }, 1000);
}, 1000);
