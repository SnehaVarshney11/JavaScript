// Example of FunctionFactories by closures
function multiplier(factor) {
  return function (number) {
    return factor * number;
  };
}

const double = multiplier(2);
console.log(double(3)); // 6

const triple = multiplier(5);
console.log(triple(3)); // 15
