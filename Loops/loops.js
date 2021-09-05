/*
for (i=0; i<10; i++){
    alert("i is: "+1);
}
*/

/*var arrFruit = ["banana", "apple", "orange", "raspberry"];

for(i=0; i<arrFruit.length; i++){
alert(arrFruit[i]);
}
*/

var availableModels = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var para = "";
for (i=0; i<availableModels.length; i++){
    para += availableModels[i] + "<br>";
}

document.getElementById("availableModels").innerHTML = para;

var count=1;

while (count<10) {
    alert("This is count: "+count);
    count ++

}

