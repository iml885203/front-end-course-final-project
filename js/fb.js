window.fbAsyncInit = function() {
  FB.init({
    appId: '1765673766980323',
    cookie: true,
    xfbml: true,
    version: 'v2.6'
  });
  checkLoginState();
  // fbApiInit = true; //init flag
  // FB.getLoginStatus(function(response){
  //     fbApiInit = true;
  // });
  var loadcount = 0;
  FB.Event.subscribe('xfbml.render', function(response){
    console.log('xfbml load');
    loadcount++;
    if(loadcount == 2){
      NProgress.done();
      $('.loading .background').css('opacity', '0');
      $('.loading').css('transform', 'translateY(-100%)');
      homePageReset();
      homePageShow();
    }
    else if(searchLoad){
      searchLoad = false;
      NProgress.done();
      $('.loading .background').css('opacity', '0');
      $('.loading').css({
        'transition': 'all 2s',
        'transform': 'translateY(-100%)'
      });
      homePageReset();
      loadingResize();
      $.fn.fullpage.moveTo(2);
      console.log('search end');

    }

  });
};

// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {
//     return;
//   }
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "//connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.6&appId=1765673766980323";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function statusChangeCallback(response) {
  // console.log('statusChangeCallback');
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // console.log('isLogin');
    // FB.api('/me', function(response) {
    //   console.log('Successful login for: ' + response.name);
    // });
    $('#fb_button').unbind('click', fb_login).bind('click', fb_logout);
    $('#fb_button span').text('Logout');
  } else if (response.status === 'not_authorized') {

  }
  else{
    // console.log('notLogin');
    $('#fb_button').unbind('click', fb_logout).bind('click', fb_login);
    $('#fb_button span').text('Login');
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function fb_login(){
  FB.login(function(response) {
    location.reload();

  });
}
function fb_logout(){
  FB.logout(function(response) {
    location.reload();

  });
}
