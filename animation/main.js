$(document).ready(function() {
       var c=0;
       setInterval(function(){
           $("#third").css("transform","rotate("+c+"deg)");
           c=c+10;
       },80); 
});
