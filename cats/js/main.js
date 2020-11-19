$(function(){

    $('.menu-btn').on('click', function(){
        $('.menu').toggleClass('active');
        $('.menu-btn').toggleClass('open');
      });


      $(function(){
        $('.scroll_btn').on('click', function(){
            $('html, body').animate({scrollTop: 0}, 600);
            return false;
        });
    });
  
});