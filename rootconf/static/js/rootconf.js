
function scroll(scrollToId)
{   
    p = $("#" + scrollToId);
    scrollTo = p.position().top;
    $('html, body').animate({scrollTop: scrollTo}, 600);
}
function cursorAnimation()
{ 
  $(".cursor").animate({opacity: 0}, 200, "swing").animate({opacity: .6}, 400).animate({opacity: 0.6}, 400).animate({opacity:0}, 200);
}
$(document).ready(function()
{
  $(window).resize(function(){    $('header').css('margin-left', (-($('header').width())/2) + "px");});
  setInterval ( "cursorAnimation()", 1000 );
  $('header').css('margin-left', (-($('header').width())/2) + "px");
  $('.page-header').css('margin-top', '130px');
});