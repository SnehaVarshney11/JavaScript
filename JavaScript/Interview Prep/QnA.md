<b>Ques</b> -> What is Pure Function and How it is different from impure function?<br>
<b>Ans</b> -> Pure function is a function that produces same output for same input and has no side effects. In other words, they don't modify state outside their scope  such as modifying global variables, changing the state of objects passed as arguments, or performing I/O operations. <br>
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