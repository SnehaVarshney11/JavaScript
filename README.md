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

# DOM
* How to target DOM Object -> By ID, By Class Name, By Tag Name
* <b>DOM Targeting Model</b> --> document, document.all, document.documentElement, document.head, document.title, document.body, document.images, document.anchors, document.links, document.forms, document.doctype, document.URL, document.baseURI, document.domain, getElementById(), getElementsByClassName(), getElementsByTagName()
* What we can get with DOM --> HTML, Text, Attribute
* <b>DOM Get Method</b> --> innerText, innerHTML, getAttribute, getAttributeNode, attributes
* <b>DOM Set Method</b> --> innerText, innerHTML, setAttribute, Attribute, removeAttribute

              