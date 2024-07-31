console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 20;
console.log(c); // 20

// Variables declared with let and const are also hoisted, but they are not initialized. This means they are in a "temporal dead zone" from the start of the block until the declaration is encountered. Accessing them before the declaration results in a ReferenceError.
