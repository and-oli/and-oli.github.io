
  "use strict";



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





//Animación del cuadro de introducción
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
      autoPlay: false,
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,1],
      itemsMobile : [479,1],
      nav:false,
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
      autoPlay: false,
      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,1],
      itemsMobile : [479,1],
      baseClass : "owl-carousel",
      theme : "owl-theme"
    });
    $(".left").click(function(){
      owl2.trigger('prev.owl.carousel');
    });
    $(".right").click(function(){
      owl2.trigger('next.owl.carousel');
    });


    //contacto
    $('input').blur(function() {

      // Revisar si hay valores
      if ($(this).val())
      $(this).addClass('used');
      else
      $(this).removeClass('used');
    });



    //Habilidades
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
    $('.navbar-it').each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr("href"));
      if (refElement.position()&& refElement.position()) {
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
          $('.navbar-it').removeClass("active");
          currentLink.addClass("active");
        }
        else{
          currentLink.removeClass("active");
        }
      }

    });
  }

