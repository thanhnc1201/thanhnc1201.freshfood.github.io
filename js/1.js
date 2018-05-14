$(function(){

	 $("img").lazyload({
      effect : "fadeIn",

     });
      new WOW().init();

      // resize screen

	$(window).resize(function(){
	 var docao=$(window).height();
      $('.slider').css({'height':docao})
	});
    // CounterUp Js
     $('.03').counterUp({
                delay: 50,
                time: 300
            });
        $('.22').counterUp({
                delay: 70,
                time: 400
            });
         $('.05').counterUp({
                delay: 100,
                time: 400
            });
          $('.09').counterUp({
                delay: 150,
                time: 500
            });
     
   
	 
	 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        },

    }
})
})