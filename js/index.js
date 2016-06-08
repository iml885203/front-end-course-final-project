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
  $(window).load(function(){
    $lie = $('.slogan div h1 span');
    var i = 0;
    var showLie = function(){
      var $this = $(this);
      setTimeout(function(){
        $this.css('color', '#da3b34');
      },++i * 500);
    }
    $lie.each(showLie);
  });
});
