$(function() {
	$('.owl-carousel').owlCarousel({
	animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	});

	var stickyNavTop = $('.header').offset().top;
		   	
		   	// our function that decides weather the navigation bar should have "fixed" css position or not.
   	var stickyNav = function(){
	    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
	         
	    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
	    // otherwise change it back to relative
	    if (scrollTop > stickyNavTop) { 
	        $('.header').addClass('sticky');
	    } else {
	        $('.header').removeClass('sticky'); 
	    }
	};

	stickyNav();
	// and run it again every time you scroll
	$(window).scroll(function() {
		stickyNav();
	});

	$('.btn_scroll').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });

    $(window).scroll(function() {
    	
    	var st = $(this).scrollTop();

    	$(".slider_image").css({
    		"transform" : "translate(0%," + st/20 + "%"
    	});
    });

    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      //columnWidth: '.grid-item',
    });

    $('.gallery_item').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
          enabled:true
        }
    });

});

