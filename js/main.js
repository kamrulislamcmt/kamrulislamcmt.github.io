(function ($) {
	"use strict";

    jQuery(document).ready(function($){

//---=============== homepage slider owl-carousel start ===============---//
         $(".homepage-slides").owlCarousel({
			items:1,
			smartSpeed:1500,
			loop:true,
			autoplay:true,
			nav:true,
			dots:false,
			navText:['<i class="fa fa-long-arrow-left"></i>','<i class="fa fa-long-arrow-right"></i>'],			
		});
		
//---=============  homepage slider owl-carousel end ===================---//
		
//---============= product promotion owl-carousel start =================---//
        $(".product-promotion").owlCarousel({
			items:1,
			smartSpeed:1500,
			loop:true,
			autoplay:true,
			nav:false,
			dots:true,	
		});
//---============== product promotion owl-carousel end ===============---//
		
//---============== masonry js start ===============---//
		$(".products-list").masonry();

//---============== masonry js end ===============---//
		
//---============== WOW js start ===============---//
	new WOW().init();	
//---============== WOW js end ===============---//


		


    });


    jQuery(window).load(function(){
//---============== site preloader start ===============---//
		jQuery(".site-preloader-wrap").fadeOut(2000); 
//---============== site preloader end ===============---//
	$(".menu-trigger").on("click", function() {
		$(".off-canvas-menu, .off-canvas-overlay").addClass("active");
		return false;
	});
	$(".menu-class, .off-canvas-overlay").on("click", function() {
		$(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
	});

		
    });


}(jQuery));	
