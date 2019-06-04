$(document).ready(function() {
  $(".clickable-rainbow span").click(function() {
    $("#rainbow").toggle();
  });

  $(".clickable-monkey span").click(function() {
    $("#monkey").fadeToggle();
    $("")
  });

  $(".clickable-lollipop span").click(function() {
    $("#lollipop").slideToggle();
    });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#default").click(function() {
    $("body").removeClass();
  });
});
