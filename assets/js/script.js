$(document).ready(function() {

	$('#carousel-next').click(function() {
	    var curr = parseInt($('#carousel').css('margin-left').replace("px", ""));
	    if (curr == -3840) {
	      return false;
	    } else {
	      document.getElementById("carousel").style.marginLeft = "" + (curr - 960) + "px";
	    }
	  });

	$('#carousel-prev').click(function() {
	    var curr = parseInt($('#carousel').css('margin-left').replace("px", ""));
	    if (curr == 0) {
	      return false;
	    } else {
	      document.getElementById("carousel").style.marginLeft = "" + (curr + 960) + "px";
	    }
	  });

    $('.navcontent').hover(function() {
      $(this).css("color","#111");}, function() {
        $(this).css('color', "white");})

    $(".contactpic").hover(function(){
        $("#mail").fadeIn(400);}, function() {$("#mail").fadeOut(400);}
        )

     $(".contactpic").hover(function(){
        $("#facebook").fadeIn(400);}, function() {$("#facebook").fadeOut(400);}
        )

         $(".contactpic").hover(function(){
        $("#instagram").fadeIn(400);}, function() {$("#instagram").fadeOut(400);}
        )

         $(".contactpic").hover(function(){
        $("#linkedin").fadeIn(400);}, function() {$("#linkedin").fadeOut(400);}
        )


	$('a').click(function() {
 	$( "body" ).removeClass("no-scroll");
 	$('html, body').animate({
    scrollTop: $( $.attr(this, 'href')).offset().top
  	}, 300);
  	setTimeout(function() {
    $('.sidebar-container').removeClass('sidebar-active');
    $('#sidebar-button').removeClass('button-active');
    $('.page-wrapper').removeClass('wrapper-active')
    }, 300);
  return false;
});
});
