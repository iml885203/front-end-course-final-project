$(function(){
  var isMobile = false;
  var _slideIndex = 0;

  $(document).ready(function() {
    $('#fullpage').fullpage({
      easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      navigation: true,
			navigationPosition: 'right',
      navigationTooltips: ['Home', 'About', 'Truth', 'Post', 'Contact Us'],

      afterLoad: function(anchorLink, index){
        var showLie_t;

        mobileMenyAutoColor();
        if(index == 1){
          homePageShow();
        }else if(index == 3){
            changeTruthColor(_slideIndex);
        }else{
          homePageReset();
        }

      },
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
        _slideIndex = slideIndex;
        changeTruthColor(slideAnchor);
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
    // $.fn.fullpage.moveTo(3);
    if($(window).width() >= 768){
      $('.image').height($(window).height()/2);
    }
    else{
      $('.image').height($(window).height()/3);
    }
    loadingResize();
  });

  $(window).resize(function(){
    if($(window).width() >= 768){
      $('.image').height($(window).height()/2);
    }
    else{
      $('.image').height($(window).height()/3);
    }
    loadingResize();
  });

  $('.mobile-menu ul li').click(function(){
    $.fn.fullpage.moveTo($(this).index()+1);
    $('.veil').click();
  });

  /*關於頁面*/
  /*流程圖連結*/
  $('.about .circuit div').click(function(){
     if($(this).attr("id") == 'ask'){
           $.fn.fullpage.moveTo(4);
     }
     else{
         $.fn.fullpage.moveTo(3);
     }
  });
  /**/
  $('.contactUs .member').mouseenter(function(){
    if(!$(this).is(":animated")){
      $(this).animate({height:"100%"},'slow');
      $(this).children('.intro').addClass("showIntro");
    }
    var index = $(this).index();
    $(this).children('.memberPic').attr("src","images/memberPic" + index + ".png");
  });
  $('.contactUs .member').mouseleave(function(){
    $(this).animate({height:"50%"},'slow');
    $(this).children('.intro').removeClass("showIntro");
    $(this).children('.memberPic').attr("src","images/testMember.png");
  });

  function changeTruthColor(index){
    var $bgcolor = $('.truth .truth-bg-color');
    $bgcolor.each(function(i){
      if(i == index){
        if($(this).hasClass('gray')){
          $('.truth .background').removeClass('yellow green').addClass('gray');
          $('.truth .content').removeClass('yellow green').addClass('gray');
        }
        else if($(this).hasClass('yellow')){
          $('.truth .background').removeClass('gray green').addClass('yellow');
          $('.truth .content').removeClass('gray green').addClass('yellow');
        }
        else if($(this).hasClass('green')){
          $('.truth .background').removeClass('yellow gray').addClass('green');
          $('.truth .content').removeClass('yellow gray').addClass('green');
        }
        return;
      }
    });
  }

  // nprogress
  $(window).load(function(){
    NProgress.start();
  });

  //loading
  function loadingResize(){
    $('.loading').width($(window).width());
    $('.loading').height($(window).height());
  }


});
