var correctName = "Gummiente";
var correctPassword = "Ghostbusters";

function returnInfo() {
    var nameVar = document.getElementById("nameForm").value;
    var namePass = document.getElementById("passForm").value;

    if (nameVar == correctName && namePass == correctPassword) {
        document.body.style.backgroundColor="pink";
        alert("Access granted! Welcome!");
    } else {
        document.body.style.backgroundColor="grey";
        alert("Access DENIED!!!");

    }
}

function calculate() {
    var one = document.getElementById("numOne").value;
    var two = document.getElementById("numTwo").value;
    var three = one*two;
    alert("Your result is: "+three);
}

var correctUserName = "Rambo Meyer";
var correctPw = "bling";
var currentBalance = 500;

function withdraw() {
    var nameAttempt = document.getElementById("userName").value;
    var passwordAttempt = document.getElementById("userPass").value;
    var amountAttempt = document.getElementById("amountForm").value;
    var newBalance = currentBalance-amountAttempt;
    
    if (nameAttempt != correctUserName) {
            document.getElementById("feedback").innerHTML="Incorrect name. Try again!"
        } else if (passwordAttempt != correctPw) {
            document.getElementById("feedback").innerHTML="Incorrect password. Try again!"
        } else if (amountAttempt > currentBalance) {
            document.getElementById("feedback").innerHTML="Insufficient funds!"
        } else {
            document.getElementById("feedback").innerHTML="Withdrawal success! Your funds are now: " +newBalance;
        }
}