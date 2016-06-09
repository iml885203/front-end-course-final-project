$(function(){
  $(document).ready(function() {
    $('#fullpage').fullpage({
      afterLoad: function(anchorLink, index){
        var showLie_t;

        mobileMenyAutoColor();
        if(index == 1){
          homePageShow();
        }else{
          homePageReset();
        }
      }
    });
  });
  function mobileMenyAutoColor(){
    $('.section.active').each(function(){
      if($(this).hasClass('menu-button-white')){
        $('.mobile-menu-button').addClass('white');
      }
      else{
        $('.mobile-menu-button').removeClass('white');
      }
    });
  }
  function homePageShow(){
    $lie = $('.slogan div h1 span');
    var i = 0;
    $lie.css('transition', 'all 2s');
    var showLie = function(){
      var $this = $(this);
      showLie_t = setTimeout(function(){
        $this.css('color', '#da3b34');
      },i++ * 1000);
    }
    $lie.each(showLie);
  }
  function homePageReset(){
    clearTimeout(showLie_t);
    $lie = $('.slogan div h1 span');
    $lie.css({
      'transition': 'all 0s',
      'color': 'rgba(0,0,0,0)'
    });
  }

  var isMobile = false;

  $(window).load(function(){
    if($('.background img').width() == $('body').width()*2){
      isMobile = true;
    }
    if(isMobile){
      $('input, textarea').focus(function() {
        $.fn.fullpage.setAutoScrolling(false);
        $.fn.fullpage.setFitToSection(false);
        console.log($(this));
        $(this).bind('blur', function(){
          $.fn.fullpage.setAutoScrolling(true);
          $.fn.fullpage.setFitToSection(true);
          $(this).unbind('blur');
        });
      });
    }

  });

  $('.mobile-menu ul li').click(function(){
    $.fn.fullpage.moveTo($(this).index()+1);
    $('.veil').click();
  });

  $('.contactUs .member').mouseenter(function(){
    if(!$(this).is(":animated")){
      $(this).animate({height:"100%"},'slow');
    }
    var index = $(this).index();
    $(this).children('.memberPic').attr("src","images/memberPic" + index + ".png");
    //等待放入--紹安：memberPic1.png/育舒：memberPic2.png/育隆：memberPic3.png
  });
  $('.contactUs .member').mouseleave(function(){
    $(this).animate({height:"50%"},'slow');
    $(this).children('.memberPic').attr("src","images/testMember.png");
  });
});
