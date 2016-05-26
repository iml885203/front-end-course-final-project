<?php

  //建立資料連線
  $link=mysql_connect("127.0.0.1","root","lguopassword");

  if(!$link)
  {
  die("無法建立連線");
  }
  echo "成功建立連結<br><br>";
  /*
  //開啟資料庫
  $db_selected=mysql_select_db("myDataBaseName",$link);
  if(!$db_selected)
  {
  die("無法開啟myDataBase<br>".mysql_error($link));
  }
  echo "成功開啟myDataBase";

  //查詢資料 SELECT FROM WHERE
  $sql="SELECT * FROM TableName WHERE firstName ='String'";

  //指定sql命令

  mysql_query("SET NAME 'utf8'");
  $result=mysql_query($sql,$link);
  echo "<br>";
  echo "firstName: ".mysql_num_rows($result)."筆";
  echo ",包含".mysql_num_fields($result)."個欄位";

  echo "<TABLE BORDER='1' ALIGN='CENTER'><TR ALIGN='CENTER'>";


  //查詢表格資料
  //  顯示欄位名稱
  for($i=0;$i<mysql_num_fields($result);$i++)
  {
  $meta=mysql_fetch_field($result,$i);
  echo "<TD>".$meta->name."</TD>";
  }
  echo "</TR>";

  // 顯示欄位內容
  for($j=0;$j<mysql_num_rows($result);$j++)
  {
   echo "<TR>";
   for ($k=0;$k<mysql_num_fields($result);$k++)
   {
     echo "<TD>".mysql_result($result,$j,$k)."</TD>";
   }
   echo "</TR>";
  }
  echo "</TABLE>";

  //釋放查詢結果所佔用的記憶體
  mysql_free_result($result);
*/
  //關閉資料庫
  mysql_close($link);
?>
