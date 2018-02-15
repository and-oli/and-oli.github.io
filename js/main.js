
  "use strict";

  $(window).on("load", function() { // makes sure the whole site is loaded
    //preloader
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.
  });

  $(document).ready(function(){

    //active menu
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash;
      var $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });


    //scroll js
    smoothScroll.init({
      selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
      selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
      speed: 500, // Integer. How fast to complete the scroll in milliseconds
      easing: 'easeInOutCubic', // Easing pattern to use
      updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
      offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
      callback: function ( toggle, anchor ) {} // Function to run after scrolling
    });

    //menu
    var bodyEl = document.body,
    content = document.querySelector( '.content-wrap' ),
    openbtn = document.getElementById( 'open-button' ),
    closebtn = document.getElementById( 'close-button' ),
    isOpen = false;



    function intervaloGranPollo(){
      $(".fadeIn1").text("¡Hola!")
      .animate({opacity:1},1500,function(){
        $(".fadeIn1").animate({opacity:0},function(){
          $(this).text("Bienvenido")
          .animate({opacity:1},1500,function(){
            $(".fadeIn1").animate({opacity:0},function(){
              $("#gran-pollo")
              .animate({opacity:1},1500,function(){
                $("#gran-pollo")
                .animate({'opacity':'0'},function(){
                  $("#gran-yo")
                  .animate({opacity:1},1500,function(){
                    $("#gran-yo")
                    .animate({'opacity':'0'},function(){

                    });
                  });
                });
              });
            });
          });
        });
      });
    }
    intervaloGranPollo();
    setInterval(intervaloGranPollo, 8000);

    //owl carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      autoPlay: false, //Set AutoPlay to 3 seconds
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,1],
      itemsMobile : [479,1],
      nav:false,
      // CSS Styles
      baseClass : "owl-carousel",
      theme : "owl-theme"
    });

    $('.bg-about').click(function() {
      if($('div.active').index() === 0)
      owl.trigger('next.owl.carousel');
      else
      owl.trigger('prev.owl.carousel');
    });

    var owl2 =$('.owl-carousel2');
    owl2.owlCarousel({
      autoPlay: false, //Set AutoPlay to 3 seconds
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,1],
      itemsMobile : [479,1],
      // CSS Styles
      baseClass : "owl-carousel",
      theme : "owl-theme"
    });
    $(".left").click(function(){
      owl2.trigger('prev.owl.carousel');
    });
    $(".right").click(function(){
      owl2.trigger('next.owl.carousel');
    });


    //contact
    $('input').blur(function() {

      // check if the input has any value (if we've typed into it)
      if ($(this).val())
      $(this).addClass('used');
      else
      $(this).removeClass('used');
    });



    //Skill
    $('.skillbar').each(function() {
      $(this).appear(function() {
        $(this).find('.count-bar').animate({
          width:$(this).attr('data-percent')
        },1000);
        var percent = $(this).attr('data-percent');
        $(this).find('.count').html('<span>' + percent + '</span>');
      });
    });


  });




  //nav-active
  function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.menu-list a').each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr("href"));
      if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('.menu-list a').removeClass("active");
        currentLink.addClass("active");
      }
      else{
        currentLink.removeClass("active");
      }
    });
  }
