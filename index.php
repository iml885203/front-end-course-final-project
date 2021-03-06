<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=320px; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
    <link rel="icon" href="images/icon.png" type="image/png" sizes="32x32">
    <title>再說</title>
  </head>
  <link rel="stylesheet" href="css/index.css?ver=3">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/mobile-menu.css">
  <link rel="stylesheet" href="css/jquery.fullPage.css" />
  <link rel='stylesheet' href='css/nprogress.css'/>
  <script src='js/nprogress.js'></script>
  <body>
    <!-- header -->
    <?php include 'layout/header.html'; ?>
    <!-- loading page -->
    <?php include 'layout/loading.html'; ?>
    <!-- main -->
    <div id="fullpage">

      <!-- home page -->
      <div class="section">
        <?php include 'layout/home.html'; ?>
      </div>
      <!-- about page -->
      <div class="section search-hide">
        <?php include 'layout/about.html'; ?>
      </div>
      <!-- truth page -->
      <div class="section menu-button-white search-hide">
        <?php include 'php-mysql/truth.php'; ?>
        <?php //include 'layout/truth.html'; ?>
      </div>
      <!-- post page -->
      <div class="section menu-button-white search-hide">
        <?php include 'layout/post.html'; ?>
      </div>
      <!-- contactUs page -->
      <div class="section search-hide">
        <?php include 'layout/contactUs.html'; ?>
      </div>

    </div>
    <?php include 'layout/fb_comment.php'; ?>
  </body>
  <!-- <script type="text/javascript" src="js/less.min.js"></script> -->
  <script type="text/javascript" src="js/jquery-1.12.0.min.js"></script>
  <!-- <script type="text/javascript" src="js/fullControl.js"></script> -->
  <script type="text/javascript" src="js/mobile-menu.js"></script>
  <script type="text/javascript" src="js/jquery.fullPage.js"></script>
  <script type="text/javascript" src="js/index.js"></script>
  <script type="text/javascript" src="js/fb.js"></script>
  <script type="text/javascript" src="js/bootstrap.min.js"></script>

</html>
