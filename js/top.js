$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
    $('.slick01').slick({
      dots: true,
      arrows: true,
      centerMode: true,
      centerPadding: '25%',
      responsive: [
        {
          breakpoint: 499,
          settings: {
          centerPadding: '10%',
          }
        }
      ]
    });
    });
