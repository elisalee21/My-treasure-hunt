$(".gold").hide();
$(".doubleclick").hide();


$(".clickhere").click(function(){
  $(".treasure").fadeToggle();
  $(".gold").fadeIn();
  $(".doubleclick").slideDown();
  $(".clickhere").fadeOut();
});