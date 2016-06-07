$(function(){
  var $window = $(window);
  var $main = $('.main');
  var windowHeight = 0;
  var windowWidth = 0;
  var scrollHeight = 0;
  var scrollWidth = 0;
  var scrollIndex = 0;
  var scrollFinsh = 5;
  var $viewMulti = $('.view-multi');
  var key_UP = 38;//UP
  var key_RIGHT = 39;//RIGHT
  var key_DOWN = 40;//DOWN
  var key_LEFT = 37;//LEFT

  $window.on('load resize', function(){
    $('body').height(windowHeight = $(this).height());
    windowWidth = $window.width();
    $viewMulti.width($viewMulti.children().length * windowWidth);
    $viewMulti.children('.view-sub').width($viewMulti.width() / $viewMulti.children('.view-sub').length);
    $main.children('.view').each(function(){
      if($(this).hasClass('active')){
        scrollHeight = ($(this).index()) * windowHeight;
        return false;
      }
    });
    $main.scrollTop(scrollHeight);
  });

  //按鍵控制
  $window.on('keyup', function(e){
    if(!$main.is(':animated')){
      if(e.keyCode == key_DOWN){ //press S
        console.log("press S");
        $main.children('.view.active').each(function(){
          if($(this).next('.view').length!=0){
            $(this).removeClass('active');
            $(this).next('.view').addClass('active');
            scrollHeight = ($(this).next('.view').index()) * windowHeight;
            $viewMulti.css('transform', 'translate3d(0px, 0px, 0px)');
            resetViewMulti();
            return false;
          }
        });
      }
      else if(e.keyCode == key_UP){ //press W
        console.log("press W");
        $main.children('.view.active').each(function(){
          if($(this).prev('.view').length!=0){
            $(this).removeClass('active');
            $(this).prev('.view').addClass('active');
            scrollHeight = ($(this).prev('.view').index()) * windowHeight;
            $viewMulti.css('transform', 'translate3d(0px, 0px, 0px)');
            resetViewMulti();
            return false;
          }
        });
      }
      else if(e.keyCode == key_RIGHT){ //press D
        console.log("press D");
        console.log($('.view-multi.active'));
        $('.view-multi.active .view-sub.active').each(function(){
          if($(this).next('.view-sub').length!=0){
            $(this).removeClass('active');
            $(this).next('.view-sub').addClass('active');
            $(this).parent().css({
              'transform':'translate3d(' + $(this).next('.view-sub').index() * -windowWidth + 'px, 0px, 0px)',
              'transition' : '1s'
            });
            return false;
          }
        });
      }
      else if(e.keyCode == key_LEFT){ //press A
        console.log("press A");
        $('.view-multi.active .view-sub.active').each(function(){
          if($(this).prev('.view-sub').length!=0){
            $(this).removeClass('active');
            $(this).prev('.view-sub').addClass('active');
            $(this).parent().css({
              'transform':'translate3d(' + $(this).prev('.view-sub').index() * -windowWidth + 'px, 0px, 0px)',
              'transition' : '1s'
            });
            return false;
          }
        });
      }
      $main.animate({scrollTop: scrollHeight}, 'slow');
    }
  });

  function resetViewMulti(){
    $viewMulti.children().removeClass('active');

    $viewMulti.each(function(){
      $(this).children(':first').addClass('active');
    });
    $viewMulti.css({
      'transform':'translate3d(0px, 0px, 0px)',
      'transition' : '1s'
    });
  }

  //上下滾動
  $window.on('DOMMouseScroll mousewheel', function(e){
    //$main.is(':animated');
    if(!$main.is(':animated')){
      if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
        //scroll down
        $main.children('.view.active').each(function(){
          if($(this).next('.view').length!=0){
            $(this).removeClass('active');
            $(this).next('.view').addClass('active');
            scrollHeight = ($(this).next('.view').index()) * windowHeight;
            return false;
          }
        });
      } else {
        //scroll up
        $main.children('.view.active').each(function(){
          if($(this).prev('.view').length!=0){
            $(this).removeClass('active');
            $(this).prev('.view').addClass('active');
            scrollHeight = ($(this).prev('.view').index()) * windowHeight;
            return false;
          }
        });
      }
      //prevent page fom scrolling
      $main.animate({scrollTop: scrollHeight}, 'slow');
    }
    return false;
  });

  //mobile 滑動
  var ts;
  var isTouchStart = false;
  $window.bind('touchstart', function (e){
    ts = e.originalEvent.touches[0].clientY;
    isTouchStart = true;
    $main.css('overflow-y', 'auto');
  });

  $window.bind('touchmove', function (e){
    if(isTouchStart){
      var te = e.originalEvent.changedTouches[0].clientY;
      if(ts > te+5){
         //slide_down();
         $main.css('overflow-y', 'hidden');
         //scroll down
         $main.children('.view.active').each(function(){
           if($(this).next('.view').length!=0){
             $(this).removeClass('active');
             $(this).next('.view').addClass('active');
             scrollHeight = ($(this).next('.view').index()) * windowHeight;
             return false;
           }
         });

      }else if(ts < te-5){
         //slide_up();
         $main.css('overflow-y', 'hidden');
         //scroll up
         $main.children('.view.active').each(function(){
           $('.mobile-menu-button').slideToggle();
           if($(this).prev('.view').length!=0){
             $(this).removeClass('active');
             $(this).prev('.view').addClass('active');
             scrollHeight = ($(this).prev('.view').index()) * windowHeight;
             return false;
           }
         });



      }

      $main.animate({scrollTop: scrollHeight}, 'slow');
      isTouchStart = false;

    }



  });

})
