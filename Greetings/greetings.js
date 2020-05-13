var hour = new Date().getHours();


/*morning 4am - 11am
day 12pm - 6pm
evening 7pm - 10pm
night 11pm -3am
*/

if (hour >= 4 && hour <=11){
    document.getElementById("welcomeMsg").innerHTML="Good Morning!";
    document.body.style.backgroundColor="#F9FF80";
} else if (hour >= 12 && hour <=18){
    document.getElementById("welcomeMsg").innerHTML="Good Day!";
    document.body.style.backgroundColor="#F5791B";
    document.getElementById("welcomeImg").src="day.jpg";
} else if (hour >= 19 && hour <=22){
    document.getElementById("welcomeMsg").innerHTML="Good Evening!";
    document.body.style.backgroundColor="#91979C";
    document.getElementById("welcomeImg").src="evening.jpg";
} else {
    document.getElementById("welcomeMsg").innerHTML="Good Night!";
    document.body.style.backgroundColor="#15170D";
    document.getElementById("welcomeImg").src="night.jpg";
}


