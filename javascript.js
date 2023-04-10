function trademark(){
    var text = "@Made by Andy Luong";
    document.getElementById("trademark").innerHTML = text;
}

function squat(){
    document.getElementById('gym').src='./Images/squat.gif';
}

function deadlift(){
    document.getElementById('gym').src='./Images/deadlift.gif';
}

function bench(){
    document.getElementById('gym').src='./Images/bench.gif';
}

//W3Schools
function slider(){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
      output.innerHTML = this.value;
    }
}

function alertMessage() {
    alert("Work in Progress");
  }

function ifVariableEquals(p3) {
    if (p3 == 5) { document.getElementById("ifVariableEquals").innerHTML = 5; }
    if (p3 != 5) { document.getElementById("ifVariableEquals").innerHTML = p3; }
}

function myFunction(p1, p2) {
    document.getElementById("myFunction").innerHTML = (p1 * p2);
}

function whileLoop(i) {
    let text = "";
    let i = 0;
    while (i < 10) {
      text += "<br>The number is " + i;
      i++;
    }
    document.getElementById("whileLoop").innerHTML = i;
}

function W3Schools(i) {
    for (i = 0; i <- 5; i++)
    //This is a comment
    /*This comment has
    more than one line*/ 
    var colors = ["red", "green", "blue"]  
    Math.round(7.25) 
    Math.max(x, y)  
    w2 = window.open("http://www.w3schools.com");  
    //JavaScript is not the same as Java
    navigator.appName  
    onclick 
    var carName;
    carName = "McQueen"
    Boolean(10 > 9)
    //JavaScript is case-sensitive
}


