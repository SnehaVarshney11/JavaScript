// Example of Event Delegation
<ul id="parentList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>;

document
  .getElementById("parentList")
  .addEventListener("click", function (event) {
    if (event.target && event.target.nodeName === "LI") {
      alert("List item clicked: " + event.target.textContent);
    }
  });

// With normal event handling, you would add event listeners to each individual element:
document.querySelectorAll("#parentList li").forEach(function (item) {
  item.addEventListener("click", function () {
    alert("List item clicked: " + this.textContent);
  });
});
