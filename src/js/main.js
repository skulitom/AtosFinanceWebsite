$(document).ready(function(){
    $("#extender1").click(function(){
        $("#extended1").slideToggle("slow");
    });
    $("#extender2").click(function(){
        $("#extended2").slideToggle("slow");
    });
    $("#extender3").click(function(){
        $("#extended3").slideToggle("slow");
    });
    $("#extender4").click(function(){
        $("#extended4").slideToggle("slow");
    });
});

$(function(){
    $("#header").load("other/header.html");
    $("#footer").load("other/footer.html");
});

document.getElementById("navMenu").innerHTML =
    '<nav class="navbar navbar-inverse navbar-fixed-top">'+
    '<div class = "container-fluid">'+
    '<div class = "navbar-header">'+
    '<a class="navbar-brand active" href="index.html"><span class="glyphicon glyphicon-home"></span> Home</a>'+
    '</div>'+
    '<ul class="nav navbar-nav">'+
    '<li>'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-education"></span> Background' +
    '</li>'+
    '<li>'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="gglyphicon glyphicon-cog"></span> Project' +
    '</li>'+
    '<li>'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="#"> <span class="glyphicon glyphicon-gift"></span> Prototype' +
    '</li>'+
    '<li>'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-pushpin"></span> Development' +
    '</li>'+
    '<li>'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-calendar"></span> Plans' +
    '</li>'+
    '</ul>'+
    '</div>'+
    '</nav>';