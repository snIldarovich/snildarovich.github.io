$(function () {
    $('.about__slider').slick({
       infinite: true,
       fade: true,
       prevArrow: '<a href="#" class="slider-arrows slider-arrows__left"><img src="./images/arrows-left.png" alt=""></a>',
       nextArrow: '<a href="#" class="slider-arrows slider-arrows__right"><img src="./images/arrows-right.png" alt=""></a>',
       asNavFor: '.slider-dotshead',
      focusOnSelect: true
    });
 
 
    $('.slider-dotshead').slick({
       slidesToShow: 4,
       slidesToScroll: 4,
       asNavFor: '.about__slider',       
       focusOnSelect: true
    });
 });

 $(document).ready(function() {
   $('.menu__burger').click(function(event) {
      $('.menu__burger,.menu__sides').toggleClass('active');
      $('body').toggleClass('lock');
   });
 });