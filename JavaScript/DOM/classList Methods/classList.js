
document.getElementById("outer").addEventListener("click", abc);
 
function abc(){
    // document.getElementById("outer").classList.add("xyz", "efg");
    // document.getElementById("outer").classList.remove("xyz");
    // document.getElementById("outer").classList.length;
    document.getElementById("outer").classList.toggle("xyz"); //toggle is used to remove and add class simultaneously 

    // var a = document.getElementById("outer").classList.item(0);
    // var a = document.getElementById("outer").classList.contains("abc");
    console.log(a);
}
