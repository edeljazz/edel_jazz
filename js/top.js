$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
    /*$('.slick01').slick({
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '15%',
        focusOnSelect: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
    }); */
    $('.slick01').slick({
      dots: true,
      arrows: true,
      centerMode: true,
      centerPadding: '25%',
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 800,
          settings: {
          centerMode: true,
          centerPadding: '10%',
          slidesToShow: 1,
          slidesToScroll: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
});
