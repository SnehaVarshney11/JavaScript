/// Example of Maintaining State in Asynchronous Code
function createDelayedLogger(message, delay) {
  setTimeout(function () {
    console.log(message);
  }, delay);
}

createDelayedLogger("Hello after 1 second", 1000);
createDelayedLogger("Hello after 2 seconds", 2000);
