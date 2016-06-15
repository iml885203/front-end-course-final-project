window.fbAsyncInit = function() {
  FB.init({
    appId: '1765673766980323',
    cookie: true,
    xfbml: true,
    version: 'v2.6'
  });
  checkLoginState();
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
    $('#fb_button').text('Logout').unbind('click', fb_login).bind('click', fb_logout);
  } else if (response.status === 'not_authorized') {

  }
  else{
    // console.log('notLogin');
    $('#fb_button').text('Login').unbind('click', fb_logout).bind('click', fb_login);
  }
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function fb_login(){
  FB.login(function(response) {
    checkLoginState();
  });
}
function fb_logout(){
  FB.logout(function(response) {
    checkLoginState();
  });
}
