$(function(){
  var isMobile = false;
  var _slideIndex = 0;

  $(document).ready(function() {
    craeteFullPage();
  });

  function craeteFullPage(){
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
      },
      afterRender: function(){
        if($('.searchEnd').length != 0){
          $('#fp-nav').removeClass('fp-nav-top');
        }
        else{
          $('#fp-nav').addClass('fp-nav-top');
        }

      }
    });
  }
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
      $('.contact').fadeOut(300);
    }
    var index = $(this).index();
    $(this).children('.memberPic').attr("src","images/memberPic" + index + ".png");
  });
  $('.contactUs .member').mouseleave(function(){
    if($(window).width() <= 768){
      $(this).animate({height:"20%"},'slow');
    }
    else{
      $(this).animate({height:"50%"},'slow');
    }
    $(this).children('.intro').removeClass("showIntro");
    $(this).children('.memberPic').attr("src","images/testMember.png");
    $('.contact').fadeIn(300);
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



  //search
  $('.searchbar span button').click(function(){
    var k = $(this).parent().parent().children('input').val();
    if(k == ''){
      alert('請輸入探索關鍵字');
      //return;
    }
    $.ajax({url: "php-mysql/search.php",
            data: {keyword : k},
            type: "GET",
            dataType: "json",
            success: function(json) {
              if(json == 'search not found'){
                alert('探索不到真相');
                return;
              }
              $('.search-hide').removeClass('section').fadeOut();
              NProgress.start();

              $('.loading .background').css('opacity', '1');
              $('.loading').css({
                'transition': 'all 0s',
                'transform': 'translateY(0%)'
              });

              //search home page
              createSearchEndButton();

              var numOfJson = json.length;
              for(var i = 0; i<numOfJson; i++){
                $('#fullpage').append("<div class='section search s"+i+"'></div>");
                $('.s'+i).append("<div class='truth'></div>");
                $('.s'+i+" .truth").append("<div class='content'></div>");
                $content = $('.s'+i+" .truth .content");
                $content.append("<div class='left'></div>");
                $content.children('.left').append("<div class='title'><h3>#"+json[i]["id"]+"<h4>"+json[i]["title"]+"</h4></h3></div>");
                $content.children('.left').append("<div class='image'><img src='"+json[i]["imageurl"]+"' /></div>");

                $content.append("<div class='right'></div>");
                $content.children('.right').append(json[i]["content"]+'<div class="fb-like" data-href="http://lguo.ddns.net/final-project/index.php#'+json[i]["id"]+'" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div><div class="fb-comments fb-computer" data-href="http://lguo.ddns.net/final-project/index.php#'+json[i]["id"]+'" data-width="auto" data-numposts="1" data-mobile="true"></div><button type="button" class="btn btn-primary btn-xs fb-mobile" data-toggle="modal" data-target="#myModal'+json[i]["id"]+'">留言</button>');

                $content.append("<div class='clear'></div>");

              }
              FB.XFBML.parse();
              
              // $.fn.fullpage.reBuild();
              $.fn.fullpage.destroy('all');
              craeteFullPage();
              $.fn.fullpage.setAutoScrolling(false);
              $.fn.fullpage.setFitToSection(false);
            }
          });
  });
  function createSearchEndButton(){
    $('body').append("<div class='searchEnd'>BACK</div>");
    $('.searchEnd').click(function(){
      $('#fp-nav').addClass('fp-nav-top');
      NProgress.start();
      $('.search').remove();
      $('.searchEnd').remove();
      $('.search-hide').addClass('section').css('display', '');
      $.fn.fullpage.destroy('all');
      craeteFullPage();
      NProgress.done();

    });
  }
});

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

//loading
function loadingResize(){
  $('.loading').width($(window).width());
  $('.loading').height($(window).height());
}
