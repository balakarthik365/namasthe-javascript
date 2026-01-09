console.log("Higher Order Functions");
//A higher order function is a function that either takes one or more function as arguments,
//or returns a function as its result.
const radius = [3, 1, 2, 4];
const area = function (radius) {
  //callback function
  return Math.PI * radius * radius;
};
const circumference = function (radius) {
  //callback function
  return 2 * Math.PI * radius;
};
const diameter = function (radius) {
  //callback function
  return 2 * radius;
};
const calculate = function (radius, logic) {
  //higher order function
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

//Normal function
arr = [1, 2, 3, 4];
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));
// Reduce function to sum
const sum = arr.reduce((acc, curr) => {
  return (acc = acc + curr);
}, 0);
console.log(sum);
//Reduce function to find max
const max = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
    return max;
  }
}, 0);
console.log(max);

const users = [
  {
    firstName: "Harshit",
    lastName: "Rana",
    age: 26,
  },
  {
    firstName: "Shubam",
    lastName: "Gill",
    age: 29,
  },
  {
    firstName: "Harshal",
    lastName: "Patel",
    age: 30,
  },
  {
    firstName: "HarshDeep",
    lastName: "Singh",
    age: 29,
  },
];

const output = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);

const lessThan30 = users
  .filter((user) => {
    return user.age < 30;
  })
  .map((user) => {
    return user.firstName;
  });
console.log(lessThan30);

const usingReduce = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(usingReduce);

const ids = [101, 102, 103];
const newIds = ids.reduce((acc, curr) => {
  acc.push("user - " + curr);
  return acc;
}, []);
console.log(newIds);

const values = [0, 1, false, 2, "", 3, null, undefined];
const newValues = values.filter(Boolean);
console.log(newValues);

const nums = [10, 25, 5, 40, 20];

const maxNums = nums.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(maxNums);

const employees = [
  { name: "A", age: 25, salary: 30000 },
  { name: "B", age: 35, salary: 50000 },
  { name: "C", age: 40, salary: 70000 },
  { name: "D", age: 28, salary: 40000 },
];

const totalSalaryOlderThan30 = employees
  .filter((emp) => emp.age > 30)
  .map((emp) => emp.salary)
  .reduce((acc, curr) => (acc = acc + curr), 0);
console.log(totalSalaryOlderThan30);

let str = "hello world";
console.log("Given string:", str);
str = str.split(" ");
let newStr = str.reduce((acc, curr) => {
  acc = acc + (curr.charAt(0).toUpperCase() + curr.slice(1) + " ");
  return acc;
}, "");
console.log("Capitalized first letter:", newStr);

function makeCounter(initialValue = 0) {
  let current = initialValue;

  return {
    increment() {
      return ++current;
    },
    decrement() {
      return --current;
    },
    reset() {
      current = initialValue;
      return current;
    },
  };
}
const counter = makeCounter(5);

console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
