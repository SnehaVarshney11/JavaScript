# Full_JS
* JavaScript is a client-side scripting language of web developed by Netscape in 1995 with the name LiveScript.
* JavaScript is used to build interactive websites with dynamic features and to validate form data.
* JavaScript is also known as the Programming Language of web as it is the only programming language for Web browsers. 
* JavaScript is an object-based scripting language which is lightweight and cross-platform.
* The programs in this language are called scripts.

# JavaScript Facts
Some popular facts about JavaScript.

* JavaScript is the only client-side scripting (i.e. browser interpreted) language.
* JavaScript can build interactivity Websites.
* JavaScript is Object-Based and Event (click, hover key press, load, scroll etc) based programming language.
* JavaScript is Case Sensitive.
* JavaScript can put dynamic content into a webpage.
* JavaScript can react to events like Click, mouse over, mouse out, form submit etc known as JavaScript Events.
* JavaScript can validate form data.
* JavaScript can detect user browser using navigator Object.
* JavaScript can be used to create cookies.
* JavaScript can add cool animation to a webpage JS timing functions.
* JavaScript can detect user physical location using HTML5 Geolocation API.
* JavaScript can also be used to draw shapes, graphs, create animations and games development using HTML5 Canvas.
* At present, JavaScript has lot of libraries and framework, exp JQuery, Angular JS, React JS, Backbone JS etc, thus making JavaScript more popular.

# Benefits of JAVASCRIPT
* Web Develpomet
* Desktop App Development
* Mobile App Development

# Write JavaScript in Webpage
Based on where JavaScript coding is written, JavaScript is categorized in three parts, Internal JavaScript, External JavaScript, and Inline JavaScript. 
1. Internal JavScript :- In Internal JavaScript, JavaScript coding is written inside head or body within
```<script> tag``` 
``` 
<script>
  document.write('Hello Javascript');
</script>
```

2. External JavaScript :- In External JavaScript, javascript code is written in external file with .js extension and then linked with script tag.
```
<script src="custom.js"></script>  
```

3. Inline JavaScript :- In Inline JavaScript, javascript code is written directly inside html tags. All though this is not recommended. Script should be written in separate file( external) or in ```<script> tag.```
```
<button onclick="alert('Hello JS')">Check</button>

<marquee onmouseover="stop()" onmouseout="start()">Hello Javascript</marquee>

<a href="javascript:void(0)" onclick="print()">Print</a>
```
NOTE: Write JavaScript coding in head tag only when we want script to execute first, like to disable text selection, page redirection, notifications etc. Rest all script like JQuery, Angular JS or custom JS should be written just before body closing tag.

# JavaScript Dialog Box
JavaScript supports three dialog box. These dialog boxes are build in functions of window object. Three dialog box in JavaScript are alert, prompt and confirm.
1) alert():- Alert box, i.e alert() or window.alert() is used to show output in dialog box. For alerts, use alert(). Alert generally block the code, thus next code block will run only after alert is closed. 
```
Example : 
<script>
  var x = 'hello js';
  alert(x);
</script>
```
2) prompt():- prompt() or window.prompt() dialog box is used to receive input from user.
```
Example :
<script>
  var x = prompt('Enter Name');
  alert(x);
</script>
```
3) confirm():- confirm() or window.confirm() dialog box is used to get confirmation from user. This will show Ok or Cancel in dialog box.
```
Example :
<script>
  var x = confirm('Press Ok or Cancel');
  alert(x);
</script>
```
* Noscript Tag :- This tag is an html element used when JavaScript is disabled in web browser. If JavaScript is enable, noscript tag is invisible.
* NOTE :- If we want to add any html tag inside js then that tag should be in double quotes.

# Variables
There are three variables: Var, Let, Const
* How to write varibale name: 1) firstname, 2) first_name, 3) first-name, 4) firstName, 5) firstname99
* NOTE: If we display a variable which has no value then output would be "undefined"
* Difference between Var & let :- we can declare variables in var again but we can't declare variables again in let. 

# Data Types
* var x = "Hello"; --> String
* var x = 123; ---> Number
* var x = true / false ---> Boolean
* var x = ["a", "b"]; ---> Array
* var x = {first : "Jane", last : "Doe"}; ---> Object
* var x = null; ---> Null
* var x; ---> Undefined

# Operators
* Arithmetic Operator: +, -, *, ** (Exponentiation), /, %, ++, --
* Assignment Operator: =, +=, -=, *=, **=, /*. %=
* Comparison Operator: ==, === (equal value and equal type), !=, !==, >, <, >=, <=
* Logical Operator: &&, ||, !
* Conditional Operator: (Condition) ? True Statement : False Statement

# Array Iteration 
## forEach() -> 
The forEach() method calls a function (a callback function) once for each array element. 
```
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}
```

## map() ->
The map() method creates a new array by performing a function on each array element.
```
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}
```

## filter() ->
The filter() method creates a new array with array elements that pass a test. 
```
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}
```

## reduce() ->
It is used to produce a single value output. It works from left to right in array. 
```
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
```

## reduceRight() -> 
Same as reduce() method but the difference is; it works from right to left in array. 

## every() ->
The every() method checks if all array values pass a test. It produces output as true/ false.
```
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
```

## some() ->
The some() method checks if some array values pass a test.

## indexOf() & lastIndexOf() ->
The indexOf() method searches an array for an element value and returns its position whereas Array.lastIndexOf() returns the position of the last occurrence of the specified element.

## find() & findIndex() ->
The find() method returns the value of the first array element that passes a test function. <br>
The findIndex() method returns the index of the first array element that passes a test function.

## from() ->
The Array.from() method returns an Array object from any object with a length property or any iterable object.
```
<script>
  const myArr = Array.from("ABCDEFG");
  document.getElementById("demo").innerHTML = myArr;
</script>

O/P :- A,B,C,D,E,F,G
```

## keys() ->
The Array.keys() method returns an Array Iterator object with the keys of an array.
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  text += x + "<br>";
}

O/P :- 1 2 3 4 in seperate lines.
```

## entries() ->
The entries() method returns an Array Iterator object with key/value pairs :
```
[0, "Banana"]
[1, "Orange"]
[2, "Apple"]
[3, "Mango"]
```

# Date
### Creating Date Object :-
* <b>Syntax</b> -> var now = new Date();
* There are 9 ways to create it -
1. new Date()
2. new Date(date string)
3. new Date(year,month)
4. new Date(year,month,day)
5. new Date(year,month,day,hours)
6. new Date(year,month,day,hours,minutes)
7. new Date(year,month,day,hours,minutes,seconds)
8. new Date(year,month,day,hours,minutes,seconds,ms)
9. new Date(milliseconds)

### Methods to displaying dates :- 
toString() , toDateString() , toUTCString() , toISOString()

### Date Methods :- 
toDateString(), getDate(), getFullYear(), getMonth(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), setDate(), setFullYear(), setHours(), setMilliseconds(), setMinutes(), setMonth(), setSeconds()

### UTC Date Get Methods :-
getUTCDate(), getUTCFullYear(), getUTCMonth(), getUTCDay(), getUTCHours(), getUTCMinutes(), getUTCSeconds(), getUTCMilliseconds()

### The getTimezoneOffset() Method :-
The getTimezoneOffset() method returns the difference (in minutes) between local time and UTC time.

## The Nullish Coalescing Operator (??) :- 
The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second argument.
```
let name = null;
let text = "missing";
let result = name ?? text;

O/P :- The name is missing
```

## The Optional Chaining Operator (?.) :-
The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
```
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
document.getElementById("demo").innerHTML = car?.name;

O/P :- Undefined 
```

# Events 
* Click (onclick), Double Click (ondblclick), Right Click (oncontextmenu), Mouse Hover (onmouseenter), Mouse Out (onmouseout), Mouse Down (onmousedown), Mouse Up (onmouseup), Key Press (onkeypress), Key Up (onkeyup), Load (onload), Unload (onunload), Resize (onresize), Scroll (onscroll).  
NOTE: onkeypress works on body tag or inside form tag. 

# While Loop
```
Initialize Variable
while(condition){
  Statement
  Increment / Decrement 
}
```
# Do While Loop
```
Initialize Variable
do{
  statement
  Increment / Decrement 
}while(condition)
```
# For Loop
```
for(var initialization; condition; increment/decrement)
```
# for/in Loop
* Used to print the value of object
```
for(var i in a){
  statement
}
```
# Data Type
* String, Number, Boolean, Array, Object, Null, Undefined
# Array Methods
```
sort(), reverse(), pop()--> delete the value of last index, push()--> add the value in last index, shift()--> delete first element, unshift()--> add the value in starting index, concat(), join(), slice(), splice(), isArray(), indexOf(), lastIndexOf(), entries(), every()--> It checks every value of array , filter()--> it creates an aaray filled with all elements that passes a test   , find(), findIndex(), includes(), some()--> it checks if any of the elements in array pass a test , foreach(), toString()--> converts an array into String and returns the result , valueOf()--> returns the array, fill()--> fill all elements in array with static value . 
```
# Object
* It is advanced version of array. 
* Syntax 
```
var a = {index_name(properties) : value};
```
* We can create array into object. 
* We can multiple functions inside object. 

# String Methods
```
length--> Property, toLowerCase(), toUpperCase(), includes(), startsWith(), endsWith(), search(), match(), indexOf(), lastIndexOf(), replace(), trim(), charAt(), charCodeAt(), fromCharCode(), concat(), split(), repeat(), slice(), substr(), substring(), toString(), valueOf().
```
# Number Methods
```
number(), parseInt(), parseFloat(), isFinite(), isInteger(), toFixed(x), toPrecision()
```
# Math Methods
* Used in animations, vedio game development, complex accouting web applications
```
ceil(), floor(), round(), trunc(), max(x,y,z...n), min(x,y,z...n), sqrt(), cbrt(), pow(x,y), random(), abs(x), PI
``` 

# JavaScript Objects vs Maps
```
                Object	                                Map
Iterable	    Not directly iterable	                Directly iterable
Size	        Do not have a size property	            Have a size property
Key Types	    Keys must be Strings (or Symbols)	    Keys can be any datatype
Key Order	    Keys are not well ordered	            Keys are ordered by insertion
Defaults	    Have default keys	                    Do not have default keys
```

# Regular Expression :-
* A regular expression is a sequence of characters that forms a search pattern.
* The search pattern can be used for text search and text replace operations.
* <b> Syntax:- </b> /pattern/modifiers;
* regular expressions are often used with the two string methods: search() and replace().<br>
<b> Examples :- </b>
```
let text = "Visit W3Schools";         |   let text = "Visit Microsoft!";
let n = text.search(/w3schools/i);    |   let result = text.replace(/microsoft/i, "W3Schools");
```

## Regular Expression Modifiers :-
```
Modifier	    Description	
  i	            Perform case-insensitive matching	
  g	            Perform a global match (find all matches rather than stopping after the first match)	
  m	            Perform multiline matching
```

# Error Name Values :-
```
Error Name	                      Description
  EvalError	                     An error has occurred in the eval() function
  RangeError	                 A number "out of range" has occurred
  ReferenceError	             An illegal reference has occurred
  SyntaxError	                 A syntax error has occurred
  TypeError	                     A type error has occurred
  URIError	                     An error in encodeURI() has occurred
```
## Arrow Function :-
<b>Syntax :- </b> let myFunc(a, b) => a*b;

# Modules :-
* JavaScript modules allow you to break up your code into separate files.
* Modules are imported from external files with the import statement.
* Modules also rely on type="module" in the script tag.
```
<script type="module">
import message from "./message.js";
</script>
```

# Export :-
* Modules with functions or variables can be stored in any external file.
* There are two types of exports: Named Exports and Default Exports.

<b> A) Named Export :- </b>
Let us create a file named person.js, and fill it with the things we want to export. You can create named exports two ways. In-line individually, or all at once at the bottom.
```
In-line individually:
person.js

export const name = "Jesse";
export const age = 40;
```
```
All at once at the bottom:
person.js

const name = "Jesse";
const age = 40;

export {name, age};
```

<b> B) Default Export :- </b>
Let us create another file, named message.js, and use it for demonstrating default export. You can only have one default export in a file.
```
message.js

const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;
```

# Import :-
You can import modules into a file in two ways, based on if they are named exports or default exports. Named exports are constructed using curly braces. Default exports are not.
```
Import named exports from the file person.js:

import { name, age } from "./person.js";    
```
```
Import a default export from the file message.js:

import message from "./message.js";
```

# Converting a JSON Text to a JavaScript Object :-
* JSON is JavaScript Object Notation used to when data is sent from server to web page. 
* First, create a JS string containing JSON syntax :-
```
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
```
* Then use built-in function <b> JSON.parse() </b> to convert string into JSON object.
```
const obj = JSON.parse(text);
```
* Finally, use the new JavaScript object in your page:
```
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
</script>
```
## JSON.stringify() :-
Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
```
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString; 

O/P :- {"name":"John","age":30,"city":"New York"}
```

## Nested Object :-
```
myObj = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
```
* We can access it :- myObj.cars.car1 OR myObj.cars[car1] OR myObj["cars"]["car2"];

## Object.defineProperty() :-
```
// Define object
const obj = {counter : 0};

// Define setters and getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
```

## Prototype Inheritance :-
* All JavaScript objects inherit properties and methods from a prototype:
* Date objects inherit from Date.prototype
* Array objects inherit from Array.prototype
* Person objects inherit from Person.prototype
* The Object.prototype is on the top of the prototype inheritance chain: Date objects, Array objects, and Person objects inherit from Object.prototype.
* The JavaScript prototype property allows you to add new properties to object constructors:
```
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";
```

# Function
* A function is a group of statements that perform specific tasks and can be kept and maintained separately from main program. Functions provide a way to create reusable code packages that are more portable and easier to debug.
* <i><b>typeof opertor</b></i> can check the datatype of the function. 
* JavaScript functions are first-class objects. This means they are very powerful in JavaScript as compared to other programming languages. They are even more powerful than objects.
* <b>Why JavaScript Functions are first-class objects?</b>
    1. Functions can be assigned to variables.
    2. Functions can have properties and methods.
    3. Functions can return functions.
    4. Functions can have callbacks.
* Advanges :- Code reusability, Less Coding, Eliminates errors
```
function functionName(){ <-- Function Definition
    Statement
}   
functionName(); <-- Calling a function
```
* Gobal Variable --> It works inside function or outside the function.
* Local Variable --> It works only inside the function.
# Function hoisting
* The function hoisting is a mechanism that the JavaScript engine physically moves function declarations to the top of the code before executing them.

## Self-Invoking Functions :-
Function expressions will execute automatically if the expression is followed by ().
```
(function () {
  let x = "Hello!!";  // I will invoke myself
})();
```

## Function Rest Parameter :-
The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
```
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
```

## The JavaScript call() Method :-
* The call() method is a predefined JavaScript method.
* It can be used to call a method with an owner object as an argument.
```
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);
```

## The JavaScript apply() Method :-
* The apply() method is similar to the call() method.
* In this example the fullName method of person is applied on person1:
```
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);
```

## The Difference Between call() and apply() :-
* The call() method takes arguments separately whereas The apply() method takes arguments as an array.
* <b> The apply() Method with Arguments :- </b>
```
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);
```
* Compared with the call() method: 
```
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");
```

## JavaScript Function bind() :-
* With the bind() method, an object can borrow a method from another object.
```
const person ={
  fName : "Sneha",
  lName : "Varshney",
  fullName : function(){
    return this.fName + " " + this.lName;
  }
}
const member = {
  fName : "Sanaya",
  lName : "Gupta",
}
let fullName = person.fullName.bind(member);
```
# Class Inheritance 
* To create a class inheritance, use the extends keyword.
* The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
* A class created with a class inheritance inherits all the methods from another class:
```
class Car{
  constructor(brand){
    this.carName = brand;
  }
  present(){
    return 'I have a' + this.carName;
  }
}
class Model extends Car{
  constructor(brand, model){
    super(brand);
    this.model = model;
  }
  show(){
    return this.present() + ', it is a ' + this.model;
  }
}
let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").inneHTML = myCar.show();
```

# Static Methods
* Static class methods are defined on the class itself.
* You cannot call a static method on an object, only on an object class.
```
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let myCar = new Car("Ford");

// You can call 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.

//If you want to use the myCar object inside the static method, you can send it as a parameter:
//document.getElementById("demo").innerHTML = Car.hello(myCar);
```

# Waiting for a Timeout 
When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:
```
setTimeout(myFunc, 3000);
function myFunc(){
  document.getElementById("demo").innerHTML = "Say Hello";
}
```

# Waiting for Intervals:
When using the JavaScript function setInterval(), you can specify a callback function to be executed for each interval:
```
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
```

# Promise Object
* A JavaScript Promise object contains both the producing code and calls to the consuming code.
* <b>Syntax :- </b>
```
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```
```
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```

# Async 
* The keyword async before a function makes the function return a promise:
```
async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
```
# Await
* The await keyword can only be used inside an async function.
* The await keyword makes the function pause the execution and wait for a resolved promise before it continues: <br>
let value = await promise;
```
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```

# HTML DOM - Document Object Model
When a web page is loaded, the browser creates DOM. <br>
HTML DOM is a standard for how to get, change. add or delete HTML elements. <br>
The HTML DOM model is constructed as a tree of objects- <br>

            document
                |
            root (html)
              /      \
    element : <head>     element : <body>
            |                 /           \
    element : <title>     element : <nav>   element : <h1>
            |                     |                 |
    Text : 'New Website'  elemenr : <a>     Text : 'Welcome'
                                  |               |
                          Text : 'About Us'  attribute : 'id'
                                  |                 |
                          attribute : 'class'   attribute : 'class'

* With the object model, JS gets all the power it needs to create dynamic HTML:  
1. JS can change all the Html elements, attributes in the page.
2. JS can change all the CSS Style in the page.
3. JS can remove existing HTML elements and attributes.
4. JS can add new HTML elements and attributes. 
5. JS can create new HTML events in the page. 
<br>
              
* How to target DOM Object -> By ID, By Class Name, By Tag Name
* <b>DOM Targeting Model</b> --> document, document.all, document.documentElement, document.head, document.title, document.body, document.images, document.anchors, document.links, document.forms, document.doctype, document.URL, document.baseURI, document.domain, getElementById(), getElementsByClassName(), getElementsByTagName()
* What we can get with DOM --> HTML, Text, Attribute
* <b>DOM Get Method</b> --> innerText, innerHTML, getAttribute, getAttributeNode, attributes
* <b>DOM Set Method</b> --> innerText, innerHTML, setAttribute, Attribute, removeAttribute
* <b>DOM Targeting Methods</b> 1) querySelector -> document.querySelector(CSS Selector), 2) querySelectorAll -> document.querySelectorAll(CSS Selector)
* <b> DOM CSS Styling Methods:</b> 1. Style, 2. className, 3. classList
* <b><u>Assign Event Using the HTML DOM --></u> </b><br>
document.getElementById(Id).onclick = functionName;<br>
* <b><u>addEventListener() Method --></u></b><br>
document.getElementById(Id).addEventListner("click", functionName);
* <b>UseCapture :- </b><br>
addEventListner(event, function, useCapture);
* <b>removeEventListener() Method --> </b><br>
element.removeEventListner(eventName, functionName);
* <b><u>classList Methods: </u></b>
1) add(class1, class2, ....),  2) remove(class1, class2, ...),  3) toogle(class), 4) contains(class), 5) item(index), 6) Length  
* <b><u>Traversal Methods: </u></b>
parentNode, parentElement, children, childNodes, firstChild, firstElementChild, lastChild, lastElementChild, nextElementSibling, nextSibling, previousElementSibling, previousSibling 

## HTML DOM Document Object
1. Finding HTML Elements
<table border="1">
  <tr>
    <td>document.getElementById(id)</td>
    <td>Find an element by element id </td>
  </tr>
  <tr>
    <td>document.getElementsByTagName(name)	</td>
    <td>Find elements by tag name </td>
  </tr>
  <tr>
    <td>document.getElementsByClassName(name)	</td>
    <td>Find elements by class name </td>
  </tr>
</table>

2. Changing HTML Elements
<table border="1">
  <tr>
    <td>element.innerHTML =  new html content</td>
    <td>Change the inner HTML of an element</td>
  </tr>
  <tr>
    <td>element.attribute = new value	</td>
    <td>Change the attribute value of an HTML element </td>
  </tr>
  <tr>
    <td>element.style.property = new style</td>
    <td>Change the style of an HTML element</td>
  </tr>
  <tr>
    <td>element.setAttribute(attribute, value)	</td>
    <td>Change the attribute value of an HTML element</td>
  </tr>
</table>

3. Adding and Deleting HTML Elements
<table border="1">
  <tr>
    <td>document.createElement(element)	</td>
    <td>Create an HTML element</td>
  </tr>
  <tr>
    <td>document.removeChild(element)	</td>
    <td>Remove an HTML element</td>
  </tr>
  <tr>
    <td>document.appendChild(element)	</td>
    <td>Add an HTML element</td>
  </tr>
  <tr>
    <td>document.replaceChild(new, old)	</td>
    <td>Replace an HTML element</td>
  </tr>
  <tr>
    <td>document.write(text)	</td>
    <td>Write into the HTML output stream</td>
  </tr>
</table>

## Finding HTML Elements
1. By Id -> <br>
document.getElementById("Id");

2. By Tag Name -> <br>
document.getElementByTagName("p");

```
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

This example finds the element with id="main", and then finds all <p> elements inside "main"
```

3. By Class Name -> <br>
document.getElementByClassName("class");

4. By CSS Selector -> <br>
document.querySelectorAll("p.intro"); <br>
will return a list of all &lt;p&gt; elements with class="intro".

## Changing HTML Content 

### Change HTML Element -
The easiest way to modify the content of an HTML element is by using <b>innerHTML</b> property.
```
document.getElementById(id).innerHTML = new HTML
```

### Change the Value of HTML Attribute
To modify the attribute use this syntax -
```
document.getElementById(id).attribute = new value
```

## FORMS
HTML Form validation can be done by JavaScript.

### HTML Constraint Validation
* HTML5 introduced a new HTML validation concept called constraint validation.
* HTML constraint validation is based on:
1. Constraint validation HTML Input Attributes
2. Constraint validation CSS Pseudo Selectors
3. Constraint validation DOM Properties and Methods

A. Constraint validation HTML Input Attributes
<table border="1">
  <tr>
    <th>Attribute</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>disabled</td>
    <td>Specifies that the input element should be disabled</td>
  </tr>
  <tr>
    <td>max</td>
    <td>Specifies the maximum value of an input element</td>
  </tr>
  <tr>
    <td>min</td>
    <td>Specifies the minimum value of an input element</td>
  </tr>
  <tr>
    <td>pattern</td>
    <td>Specifies the value pattern of an input element</td>
  </tr>
  <tr>
    <td>required</td>
    <td>Specifies that the input field requires an element</td>
  </tr>
  <tr>
    <td>type</td>
    <td>Specifies the type of an input element</td>
  </tr>
</table>

B. Constraint validation CSS Pseudo Selectors
<table border="1">
  <tr>
    <th>Selector</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>:disabled</td>
    <td>Selects input elements with the "disabled" attribute specified</td>
  </tr>
  <tr>
    <td>:invalid</td>
    <td>Selects input elements with invalid values</td>
  </tr>
  <tr>
    <td>:optional</td>
    <td>Selects input elements with no "required" attribute specified</td>
  </tr>
  <tr>
    <td>:required</td>
    <td>Selects input elements with the "required" attribute specified</td>
  </tr>
  <tr>
    <td>:valid</td>
    <td>Selects input elements with valid values</td>
  </tr>     
</table>

## Changing HTML Style
* Use this syntax to change the style -
```
document.getElementById(id).style.property = new style
```

## DOM Animation
* Animating element on a web page using javascript and CSS properties that manipulates the structure and style of the HTML elements.
* This includes animations like changing element positions, sizes, color, opacity and more.\
* We don't have to use @keyframes here for animation.

## DOM Events 
* These  are actions or occurrences that happen in the HTML document or within its elements, triggered by user interactions or system events.
* Examples of DOM events include mouse clicks, key presses, form submissions, page load, and more.

<table border="1">
  <tr>
    <th>Mouse Events</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>click</td>
    <td>Triggered when the mouse button is clicked.</td>
  </tr>
  <tr>
    <td>dblclick</td>
    <td>Triggered when the mouse button is double-clicked.</td>
  </tr>
  <tr>
    <td>mouseover</td>
    <td>Triggered when the mouse pointer moves over an element.</td>
  </tr>
  <tr>
    <td>mouseout</td>
    <td>Triggered when the mouse pointer moves out of an element.</td>
  </tr>
  <tr>
    <td>mousedown</td>
    <td>Triggered when a mouse button is pressed down over an element.</td>
  </tr>   
  <tr>
    <td>mouseup</td>
    <td>Triggered when a mouse button is released over an element.</td>
  </tr>  
</table>

<table border="1">
  <tr>
    <th>Keyboard Events</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>keydown</td>
    <td>Triggered when a key is pressed down.</td>
  </tr>
  <tr>
    <td>keyup</td>
    <td>Triggered when a key is released.</td>
  </tr>
  <tr>
    <td>keypress</td>
    <td>Triggered when a key is pressed and released.</td>
  </tr>
</table>

<table border="1">
  <tr>
    <th>Form Events</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>submit</td>
    <td>Triggered when a form is submitted.</td>
  </tr>
  <tr>
    <td>input</td>
    <td>Triggered when the value of an input field changes.</td>
  </tr>
  <tr>
    <td>change</td>
    <td>Triggered when the value of a form element changes and loses focus.</td>
  </tr>
  <tr>
    <td>focus</td>
    <td>Triggered when an element gains focus.</td>
  </tr>
  <tr>
    <td>blur</td>
    <td>Triggered when an element loses focus.</td>
  </tr>     
</table>

<table border="1">
  <tr>
    <th>Window Events</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>load</td>
    <td>Triggered when the window and its content finish loading.</td>
  </tr>
  <tr>
    <td>resize</td>
    <td>Triggered when the window is resized.</td>
  </tr>
  <tr>
    <td>scroll</td>
    <td>Triggered when the document is scrolled.</td>
  </tr>
  <tr>
    <td>unload</td>
    <td>Triggered when the window is being unloaded (e.g., when navigating away from the page).</td>
  </tr>
</table>

## Event Listener

### The addEventListener() method
Add an event listener that fires when a user clicks a button:
```
document.getElementById("myBtn").addEventListener("click", displayDate);
```

### The removeEventListener() method
The removeEventListener() method removes event handlers that have been attached with the addEventListener() method:
```
element.removeEventListener("mousemove", myFunction);
```

## Event Bubbling or Event Capturing?
* <b>Event Propagation : </b> It is a way of defining the element order when an event occurs. <br>
* There are two ways of defining the event propagation- 
1. Event Bubbling
2. Event Capturing

In Bubbling - the inner most element's event is handled first and then outer. Example- If there is a &lt;p&gt; inside &lt;div&gt; then &lt;p&gt will click first then &lt;div&gt;

In Capturing - the outer most element's event is handled first and then inner. Example- If there is a &lt;p&gt; inside &lt;div&gt; then &lt;div&gt will click first then &lt;p&gt;