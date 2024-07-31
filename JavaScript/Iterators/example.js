const colors = ["red", "green", "blue"];
const GFG = colors[Symbol.iterator](); //Symbol.iterator is a special symbol used to define the default iterator for an object
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());
console.log(GFG.next());

/*
{ value: 'red', done: false }
{ value: 'green', done: false }
{ value: 'blue', done: false }
{ value: undefined, done: true }
*/
