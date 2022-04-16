$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');
    /*ムービーカルーセル*/
    $('.movie-list').slick({
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
    /*もっと見るボタン*/
    var show = 8; //最初に表示する件数
    var num = 6;  //clickごとに表示したい件数
    var contents = '.info1all li'; // 対象のlist
    $(contents + ':nth-child(n + ' + (show + 1) + ')').addClass('is-hidden');
    $('.motto').on('click', function () {
      $(contents + '.is-hidden').slice(0, num).removeClass('is-hidden');
      if ($(contents + '.is-hidden').length == 0) {
        $('.motto').fadeOut();
      }
    });
    
    
    });
