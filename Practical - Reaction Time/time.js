window.onload = appear();

var start;
var clicked;


function disappear() {
    document.getElementById("box").style.display="none";
    clicked=Date.now();
    var reactionTime = (clicked-start)/1000;
    alert(reactionTime+" seconds!");
    var randomDelay= ((Math.random()*3))*1000;
    setTimeout(appear, randomDelay);
    
}

function appear(){
    var randomTop = Math.random()*400;
    var randomLeft = Math.random()*300;
    var randomHeight = Math.random()*200+10;
    var randomWidth = Math.random()*200+10;
    var randomCurve = Math.random();
    var randomColor = "#" + ((1<<24)*Math.random()|0).toString(16);
    if (randomCurve < 0.5) {
        document.getElementById("box").style.borderRadius=25+"px";
    }else {
        document.getElementById("box").style.borderRadius=0+"px";
    }
    document.getElementById("box").style.top=randomTop+"px";
    document.getElementById("box").style.left=randomLeft+"px";
    document.getElementById("box").style.height=randomHeight+"px";
    document.getElementById("box").style.width=randomWidth+"px";
    document.getElementById("box").style.display="block";
    document.getElementById("box").style.backgroundColor=randomColor;
    start=Date.now();
}