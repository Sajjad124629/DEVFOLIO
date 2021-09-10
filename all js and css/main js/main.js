(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
     // Initiate the aos js

     AOS.init({
     
      once:"true"

      });

       // Preloader
       $(window).on('load', function() {
        if ($('#preloader').length) {
          $('#preloader').delay(1000).fadeOut('slow', function() {
            $(this).remove();
          });
        }
      });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    

     // Smooth scrolling on the navbar links
     $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    

    //typed js

    var typed = new Typed('.typed',{
        strings: [   
        'Web Designer', 
        'Web Developer',
        'Front End Developer',
        'Apps Designer',
        'Apps Developer'],
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
      });

       // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});

    
        // Class filter
    var classIsotope = $('.class-container').isotope({
        itemSelector: '.class-item',
        layoutMode: 'fitRows'
    });

    $('#class-filter li').on('click', function () {
        $("#class-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        classIsotope.isotope({filter: $(this).data('filter')});
    });




     // Testimonials carousel
     $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });



   



    
    
    
  
    
})(jQuery);

