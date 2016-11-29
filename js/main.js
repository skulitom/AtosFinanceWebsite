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

    

document.getElementById("navMenu").innerHTML =
    '<nav class="navbar navbar-inverse navbar-fixed-top">'+
    '<div class = "container-fluid">'+
    '<div class = "navbar-header">'+
    '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#heading" aria-expanded="false">'+
        '<span class="sr-only">Toggle navigation</span>'+
        '<span class="icon-bar"></span>'+
        '<span class="icon-bar"></span>'+
        '<span class="icon-bar"></span>'+
      '</button>'+
    '<a class="navbar-brand active" href="index.html"><span class="glyphicon glyphicon-home"></span> Home</a>'+
    '</div>'+
    '<div class="collapse navbar-collapse" id="heading">'+
    '<ul class="nav navbar-nav">'+
    '<li>'+
    '<a href="Background.html"><span class="glyphicon glyphicon-education"></span> Background' +
    '</li>'+
    '<li>'+
    '<a href="Project.html"><span class="gglyphicon glyphicon-cog"></span> Project' +
    '</li>'+
    '<li>'+
    '<a href="Prototype.html"> <span class="glyphicon glyphicon-gift"></span> Prototype' +
    '</li>'+
    '<li>'+
    '<a href="Development.html"><span class="glyphicon glyphicon-pushpin"></span> Development' +
    '</li>'+
    '<li>'+
    '<a href="Plans.html"><span class="glyphicon glyphicon-calendar"></span> Plans' +
    '</li>'+
    '</ul>'+
    '</div>'+
    '</div>'+
    '</nav>';
