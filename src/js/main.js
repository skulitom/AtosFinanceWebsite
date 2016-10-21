$(document).ready(function(){
    $("#about-us").click(function(){
        $("#main-body").slideToggle("slow");
    });
});

document.getElementById("navMenu").innerHTML =
    '<nav class="navbar navbar-inverse navbar-fixed-top">'+
    '<div class = "container-fluid">'+
    '<div class = "navbar-header">'+
    '<a class="navbar-brand active" href="index.php"><span class="glyphicon glyphicon-home"></span> Home</a>'+
    '</div>'+
    '<ul class="nav navbar-nav">'+
    '<li>'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-education"></span> Background' +
    '<span class = "caret"></span></a>'+
    '</li>'+
    '<li>'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-education"></span> Project' +
    '<span class = "caret"></span></a>'+
    '</li>'+
    '<li>'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="#"> <span class="glyphicon glyphicon-calendar"></span> Prototype' +
    '<span class = "caret"></span></a>'+
    '</li>'+
    '<li>'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-pushpin"></span> Development' +
    '<span class = "caret"></span></a>'+
    '</li>'+
    '<li>'+
    '<a class="dropdown-toggle" data-toggle="dropdown" href="#"><span class="glyphicon glyphicon-calendar"></span> Plans' +
    '<span class = "caret"></span></a>'+
    '</li>'+
    '</ul>'+
    '</div>'+
    '</nav>';