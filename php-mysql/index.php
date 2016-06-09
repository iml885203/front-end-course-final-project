<html>
  <head>
    <title>首頁</title>
  </head>
  <body>
    <?php session_start(); ?>
    <!-- 設定網頁編碼為UTF-8 -->
    <?php
      if (isset($_SESSION['username'])) {
          echo '<meta http-equiv=REFRESH CONTENT=0;url=member.php>';
      } else {
    ?>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <form name="form" method="post" action="connect.php">
      帳號：<input type="text" name="id" /> <br>
      密碼：<input type="password" name="pw" /> <br>
      <input type="submit" name="button" value="登入" />&nbsp;&nbsp;
      <a href="register.php">申請帳號</a>
    </form>
    <?php } ?>


  </body>
</html>
