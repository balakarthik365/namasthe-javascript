//curring - In JS curring is a technique of transforming a function that takes multiple arguments into a sequence of functions that each take a single argument.
let mulitply = function (x, y) {
  console.log(x * y);
};
let multiplyByTwo = mulitply.bind(this, 2); //here this is not used but we have to pass something as first argument, 2 is fixed as first argument
multiplyByTwo(5); //10, here 5 is passed as second argument and curring is done.
let multiplyByThree = mulitply.bind(this, 3);
multiplyByThree(5); //15

//debouncing - It is a technique to limit the rate at which a function is executed.
// It ensures that a function is only called after a certain period of inactivity.
let counter = 0;
const getData = () => {
  console.log("Data fetched...", counter++);
};
debounce = (fun, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(context, args);
    }, delay);
  };
};
const callApi = debounce(getData, 1000);
// throttle - It is a technique to execute the function at most once in a certain interval.
//It helps in button spamming
//It helps to prevent infinite scrolling
//takes care of mouse events.

//event bubbling - It is a mechanism in which an event starts from the deepest target element and then propagates up to the parent elements in the DOM tree.
//event capturing/trickling - It is a mechanism in which an event starts from the outermost parent element and then propagates down to the target element in the DOM tree.
document.getElementById("grand-parent").addEventListener(
  "click",
  function () {
    console.log("Grand Parent clicked");
  },
  true
);

document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Parent clicked");
  },
  false
);

document.getElementById("child").addEventListener(
  "click",
  function () {
    console.log("Child clicked");
  },
  true
); //true for capturing phase and this boolean value is optional, by default it is false for bubbling phase
//In JS first capturing phase happens and then bubbling phase happens.

//event delegation - It is a technique of handling events at a higher level in the DOM tree rather than attaching event listeners to individual elements.
//It leverages event bubbling to capture events from child elements and handle them at a parent element.
document.getElementById("category").addEventListener("click", function (e) {
  if (e.target.tagName == "BUTTON") {
    console.log(e.target.id);
  } else {
    console.log("Click on given list to navigate");
  }
});

// let position = 0;

// function moveBox() {
//   position += 2;
//   document.getElementById(
//     "grand-parent"
//   ).style.transform = `translateX(${position}px)`;

//   if (position < 300) {
//     requestAnimationFrame(moveBox);
//   }
// }

// requestAnimationFrame(moveBox);

// for (var i = 1; i <= 3; i++) {
//   function x(i) {
//     setTimeout(() => console.log(i), 1000 * i);
//   }
//   x(i);
// }

let arr = [1, 2, 3, 3, 4, 4, 5];
let uniques = [];
let duplicates = [];
for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
    }
  }
  if (count === 1) {
    uniques.push(arr[i]);
  }
  if (count > 1) {
    let alreadyAdded = false;
    for (let k = 0; k < duplicates.length; k++) {
      if (arr[i] === duplicates[k]) {
        alreadyAdded = true;
        break;
      }
    }
    if (!alreadyAdded) {
      duplicates.push(arr[i]);
    }
  }
}
console.log(arr);
console.log(uniques);
console.log(duplicates);

let addArrays = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(addArrays);
