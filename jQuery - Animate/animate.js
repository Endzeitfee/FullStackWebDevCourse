$(".box").animate({height:"250px", width:"500px", opacity:1},5000);

$(".box").click(function() {$(this).animate({
    "left":"350px",
    "top":"500px",
    "height":"30px",
    "width": "220px"
}, 900)})