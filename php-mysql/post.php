<html>
 <head>
  <title>首頁</title>
 </head>
 <body>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
  include("mysql_connect.inc.php");
  $title = $_POST['title'];
  $url = $_POST['url'];
  $content = $_POST['content'];
  $imageurl = $_POST['imageurl'];
  $kind = $_POST['kind'];

  //echo $title.$url.$content.$imageurl.$kind;

  //echo $title != null;

  if($title == null || $url == null || $content == null || $imageurl == null || $kind == null){
    echo '投稿失敗!';
    echo '<meta http-equiv=REFRESH CONTENT=2;url=../index.php>';
    return;
  }

  // insert post to database
  $sql = "INSERT INTO post (title, url, content, imageurl, kind) value ('$title', '$url', '$content', '$imageurl', '$kind')";
  //mysql_query("SET NAMES 'UTF8'");
  if(mysql_query($sql))
  {
    echo '投稿成功!';
    echo '<meta http-equiv=REFRESH CONTENT=2;url=../index.php>';
  }
  else
  {
    echo '投稿失敗!';
    echo mysql_error();
    echo '<meta http-equiv=REFRESH CONTENT=2;url=../index.php>';
  }
?>
