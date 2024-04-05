// Listen for messages from the main thread
self.onmessage = function(event) {
  let count = event.data;
  let result = '';

  // Perform a counting operation inside the Web Worker
  for (let i = 1; i <= count; i++) {
    result += i + ' ';
  }

  // Send the result back to the main thread
  self.postMessage(result);
};
