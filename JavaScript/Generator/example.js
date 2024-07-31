function* count() {
  yield 1; // Pause and return 1
  yield 2; // Pause and return 2
  yield 3; // Pause and return 3
}

const iterator = count();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
