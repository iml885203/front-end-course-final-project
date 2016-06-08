$(function(){
  $(document).ready(function() {
    $('#fullpage').fullpage({
      afterLoad: function(){
        $('.section.active').each(function(){
          if($(this).hasClass('menu-button-white')){
            console.log('white');
            $('.mobile-menu-button').addClass('white');
          }
          else{
            $('.mobile-menu-button').removeClass('white');
          }
        })
      }
    });
  });
});
