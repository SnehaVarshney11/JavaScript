# Full_HTML
* HTML stands for Hypertext Markup Language, and it is the most widely used language to write Web Pages.
* HTML was developed with the intent of defining the structure of documents like headings, paragraphs, lists, and so forth to facilitate the sharing of scientific information between researchers...
Now, HTML is being widely used to format web pages with the help of different tags available in HTML language.
* HTML was originally developed by Tim Berners-Lee in 1990. He is also known as the father of the web.

# Structure of HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Title Here</title>
  </head>
  <body>
    Page content goes here
  </body>
</html>


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

# Explicit Function Binding :-
The call() and apply() methods are predefined JavaScript methods. They can both be used to call an object method with another object as argument.
```
const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

// Return "John Doe":
person1.fullName.call(person2);
```
```
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
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



# DOM - Document Object Model
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
              
* How to target DOM Object -> By ID, By Class Name, By Tag Name
* <b>DOM Targeting Model</b> --> document, document.all, document.documentElement, document.head, document.title, document.body, document.images, document.anchors, document.links, document.forms, document.doctype, document.URL, document.baseURI, document.domain, getElementById(), getElementsByClassName(), getElementsByTagName()
* What we can get with DOM --> HTML, Text, Attribute
* <b>DOM Get Method</b> --> innerText, innerHTML, getAttribute, getAttributeNode, attributes
* <b>DOM Set Method</b> --> innerText, innerHTML, setAttribute, Attribute, removeAttribute
* <b>DOM Targeting Methods</b> 1) querySelector -> document.querySelector(CSS Selector), 2) querySelectorAll -> document.querySelectorAll(CSS Selector)
* <b> DOM CSS Styling Methods: 1. Style, 2. className, 3. classList
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