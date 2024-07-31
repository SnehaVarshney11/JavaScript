<b><u>Ques</u></b> -> What is Pure Function and How it is different from impure function?<br>
<b><u>Ans</u></b> -> Pure function is a function that produces same output for same input and has no side effects. In other words, they don't modify state outside their scope  such as modifying global variables, changing the state of objects passed as arguments, or performing I/O operations. <br>
<b>Characteristics of Pure Functions:</b><br>
Deterministic: Given the same input, a pure function always returns the same output, making its behavior predictable and consistent. <br>
No Side Effects: Pure functions do not modify variables outside their scope, mutate objects passed as arguments, or perform I/O operations such as reading from or writing to files, databases, or the network. <br>
Example-
```
// Pure function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always the same output for the same inputs)
```
<b>Here’s an example of an impure function:</b>
```
let count = 0;

// Impure function
function increment() {
  count += 1;
  return count;
}

console.log(increment()); // 1
console.log(increment()); // 2 (different output even with the same input)
```

<b><u>Ques</u></b> -> What is the difference between Spread Operator and Rest Operator?
<b><u>Ans</u></b> -><br>
<b>Spread Operator -></b> Allows us to expand an iterable, such as array, string, or object into a individual element. Represented by three dots (...). <br>
Example ->
```
1. Copying Array -> 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]

2. In Function Call ->
const numbers = [1, 2, 3];
Math.max(...numbers); // Equivalent to Math.max(1, 2, 3)

3. Copying and Merging Objects ->
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject }; // { a: 1, b: 2 }
const mergedObject = { ...originalObject, c: 3 }; // { a: 1, b: 2, c: 3 }
```

<b>Spread Operator -></b> Collects multiple elements into single entity, often used in function parameters and destructuring.<br>
Example ->
```
1. Function Parameter ->
function sum(...args) {
  return args.reduce((acc, current) => acc + current, 0);
}
sum(1, 2, 3); // 6

2. Destructuring Arrays ->
const [first, ...rest] = [1, 2, 3, 4]; // first is 1, rest is [2, 3, 4]

3. Destructuring Objects ->
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
// a is 1, b is 2, rest is { c: 3, d: 4 }
```

<b><u>Ques</u></b> ->
<b><u>Ans</u></b> ->

<b><u>Ques</u></b> ->
<b><u>Ans</u></b> ->

<b><u>Ques</u></b> ->
<b><u>Ans</u></b> ->

<b><u>Ques</u></b> ->
<b><u>Ans</u></b> ->

<b><u>Ques</u></b> ->
<b><u>Ans</u></b> ->