$(document).ready(function() {
    $("input").click(function()
  {
 var numberOflistitem = $("#choices li").length;
 var randomChildNumber = Math.floor(Math.random()*numberOflistitem);
       
 $("H1").text($("#choices li").eq(randomChildNumber).text());
    });
    });