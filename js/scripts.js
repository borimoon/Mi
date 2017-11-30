// header height resize

    $(window).scroll(function() {
        if ($(this).scrollTop() > $('.landing').outerHeight()){
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
    	$('#toggleOn').click(function() {
    		if (menuVisible) {
    			$('#menu').css({'display':'none'});
    			$('#toggleOn').removeClass('menuopen');
    			menuVisible = false;
    			return;
    		}
    		$('#menu').css({'display':'block'});
    		$('#toggleOn').toggleClass('menuopen');
    		menuVisible = true;
    	});
    	$('#menu').click(function() {
    		$(this).css({'display':'none'});
    		$('#toggleOn').removeClass('menuopen');
    		menuVisible = false;
    	});
    });
