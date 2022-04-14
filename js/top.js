$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
    $('.slick01').slick({
      dots: true,
      arrows: false,
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
    var show = 8; //最初に表示する件数
    var num = 6;  //clickごとに表示したい件数
    var contents = '.list li'; // 対象のlist
    $(contents + ':nth-child(n + ' + (show + 1) + ')').addClass('is-hidden');
    $('.more').on('click', function () {
      $(contents + '.is-hidden').slice(0, num).removeClass('is-hidden');
      if ($(contents + '.is-hidden').length == 0) {
        $('.more').fadeOut();
      }
    });
    
    
    });
