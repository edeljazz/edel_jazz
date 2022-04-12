$(function() {
    $('html,body').animate({ scrollTop: 0 }, '1');


    $('.slick01').slick({
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '25%',
        focusOnSelect: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>'
        
    });
});
