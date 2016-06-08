$(function(){
  $('.mobile-menu-button').on('click', function() {

    if(!$(this).hasClass('active')){
      $('.mobile-menu').css({
        'opacity': '1',
        'left': '0%'
      });

      $('body').css('overflowY', 'hidden');
      $('.veil').fadeIn();
      $(this).addClass('active');
    }
    else{
      $('.veil').click();
    }
  });
  $('.veil').on('click', function() {
    $('.mobile-menu').css({
      'opacity': '0',
      'left': '50%'
    });

    $('body').css('overflowY', 'auto');
    $('.veil').fadeOut();
    $('.mobile-menu-button').removeClass('active');
  });

});
