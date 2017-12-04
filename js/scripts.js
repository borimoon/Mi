// animate scroll down
$(document).ready(function (){
    $('.cta-main').click(function (){
        $('html, body').animate({
            scrollTop: $('.uvp').offset().top
        }, 700);
    });
});

// animate scroll top
$(document).ready(function (){
    $('.top').click(function (){
        $('html, body').animate({
            scrollTop: $('.landing').offset().top
        }, 700);
    });
});

// header height resize
$(window).scroll(function() {
    if ($(this).scrollTop() > $('.landing').offset().top){
      $('.header').addClass("header-narrow");
    }
    else {
      $('.header').removeClass("header-narrow");
    }

    if ($('.header').hasClass("header-narrow")){
      $('.logo').attr("src", "assets/Mi-logo-s.svg");
    }
    else if ($('.header').removeClass("header-narrow")) {
      $('.logo').attr("src", "assets/Mi-logo.svg");
    }
});

// mobile menu show-hide
$(function() {
  var menuVisible = false;
  $('#toggle').click(function() {
    if (menuVisible) {
      $('#menu').css({'display':'none'});
      $('#toggle').removeClass('menuopen');
      menuVisible = false;
      return;
    }
    $('#menu').css({'display':'block'});
    $('#toggle').toggleClass('menuopen');
    menuVisible = true;
  });
  $('#menu').click(function() {
    $(this).css({'display':'none'});
    $('#toggle').removeClass('menuopen');
    menuVisible = false;
  });
});
