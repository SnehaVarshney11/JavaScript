sayGoodbye(); // TypeError: sayGoodbye is not a function
var sayGoodbye = function () {
  console.log("Goodbye!");
};

sayGoodbye(); // ReferenceError: Cannot access 'sayGoodbye' before initialization
let sayGoodbye = function () {
  console.log("Goodbye!");
};

// Not hoisted
