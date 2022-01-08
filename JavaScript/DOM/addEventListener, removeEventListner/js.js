
document.getElementById("outer").addEventListener("mouseleave", abc);

document.getElementById("outer").addEventListener("click", xyz);

function abc(){
    document.getElementById("outer").style.background = "RED";
}

function xyz(){
    document.getElementById("outer").removeEventListener("mouseleave", abc);
}
