function closeMobileNav() {
    if ($(".navbar-collapse").hasClass("in")) {
        $(".navbar-collapse").collapse('hide');
    }
}

function smoothScroll(e,options){
	//default options
	var offset = 0;
	var speed = 500;

	if (options != null){
		if (options.offset != null){
			var offset = options.offset;
		}
		if (options.speed != null){
			speed = options.speed;
		}
	}

	$(e).bind("click",function(e){
        closeMobileNav();
        var toElement = $($(this).data("target"));
        var offsetlocal = $(this).data("offset");
        if (offsetlocal != null){
	        os = offsetlocal;
	    }else{
	    	os = offset;
	    }
        if (toElement.length > 0){
        	e.preventDefault();
        	$("body").animate({ scrollTop: toElement.offset().top - os }, speed);
        }
	});
}

function parallax(e,options){
	$(window).bind("scroll",function(){
		$(e).each(function(i,v){
		    if ($(window).scrollTop() + $(window).height() > $(v).offset().top && $(window).scrollTop() < $(v).offset().top + $(v).outerHeight()) {
		        var range = $(window).height() + $(v).outerHeight();
		        var yPos = $(window).scrollTop() + $(window).height() - $(v).offset().top;
		        $(v).css("background-position-y", 100 * (1 - (yPos / range)) + "%");
		    }
		});
	});
}