<?php
  include 'mysql_connect.inc.php';
  $keyword = $_GET["keyword"];

  $sql = "SELECT * FROM post WHERE title LIKE '%$keyword%' ORDER BY id DESC";
  $result = mysql_query($sql);
  $response = array();
  $resCounter = 0;

  while($row = mysql_fetch_row($result)){
    $response[$resCounter] =
    array("id"        => $row[0],
          "title"     => $row[1],
          "url"       => $row[2],
          "content"   => $row[3],
          "imageurl"  => $row[4],
          "kind"      => $row[5]);
    // echo $row[0].'<br>';
    // echo $row[1].'<br>';
    // echo $row[2].'<br>';
    // echo $row[3].'<br>';
    // echo $row[4].'<br>';
    // echo $row[5].'<br>';
    // echo '--------'.'<br>';
    $resCounter++;
  }
  if(!!$response){
    echo json_encode($response);
  }
  else{
    echo json_encode('search not found');
  }
?>
