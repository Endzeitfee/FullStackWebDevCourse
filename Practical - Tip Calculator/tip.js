function calculateTip() {
var totalAmount =document.getElementById("billAmount").value;
var qualityOfService = document.getElementById("serviceQuality").value;
var numOfPeople = document.getElementById("peopleAmount").value;

if(totalAmount === "") {
    alert("Please enter the total bill amount")
} else if (numOfPeople == "") {
    alert ("Please put in the number of people")
} else {
    var tipPerPerson = Math.round((totalAmount* qualityOfService)/numOfPeople);
    document.getElementById("resultAmount").innerHTML="Tip amount: <br>"+"$"+tipPerPerson + "<br>Per Person";
}

}
