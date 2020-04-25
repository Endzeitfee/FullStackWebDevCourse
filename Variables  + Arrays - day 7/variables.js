var myVariable = 1337;

function myFunction(x){
    document.getElementById("para").innerHTML=x;
}

var userCount = 0;
var colorArray = ["blue", "slateblue", "skyblue", "lightblue", "cyan", "purple", "violet", "magenta", "red", "orangered"]

function plusButton() {
    userCount = userCount +1;
    document.getElementById("valuePara").innerHTML=("Count: " + userCount);
    document.body.style.backgroundColor= colorArray[userCount];
}

function minusButton() {
    userCount = userCount -1;
    document.getElementById("valuePara").innerHTML=("Count: " + userCount);
    document.body.style.backgroundColor= colorArray[userCount];
}

function show() {
    var myArray = ["England", "Spain", "France", "Germany"];
    var arrValue = myArray [3];
    document.getElementById("show").innerHTML=arrValue;
    document.body.style.backgroundColor= colorArray[3];
}