<html>
 <head>
  <title>首頁</title>
 </head>
 <body>
<?php session_start(); ?>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
include("mysql_connect.inc.php");

$username = $_SESSION['username'] ;
echo '<h2>歡迎回來'.
		$username .
		'</h2>';

//此判斷為判定觀看此頁有沒有權限
//說不定是路人或不相關的使用者
//因此要給予排除
if($_SESSION['username'] != null)
{
        //echo '<a href="register.php">新增</a>    ';
        echo '<a href="update.php">修改</a> ';
		echo '<a href="logout.php">登出</a> ';
      //  echo '<a href="delete.php">刪除</a>  <br><br>';
    
        //將資料庫裡的所有會員資料顯示在畫面上
        $sql = "SELECT * FROM member_table";
        $result = mysql_query($sql);
        echo '<h2>會員列表</h2>';
	   while($row = mysql_fetch_row($result))
        {
               
				echo "$row[0] - 名字(帳號)：$row[1], " . 
                 "電話：$row[3], 地址：$row[4], 備註：$row[5]<br>";
        }
}
else
{
        echo '您無權限觀看此頁面!';
        echo '<meta http-equiv=REFRESH CONTENT=2;url=index.php>';
}
?>
<h2>留言板</h2>
<form name="form" method="post" action="memo_finish.php">
留言
<textarea name="memo" cols="45" rows="5"></textarea> <input type="submit" name="button" value="確定" />
</form>
<br/>

<?php
if($_SESSION['username'] != null)
{
    
        //將資料庫裡的所有留言資料顯示在畫面上
        $sql2 = "SELECT o.id, m.username, o.memo, o.time FROM  `member_table` AS m JOIN  `memo` AS o WHERE m.no = o.userid order by o.id ";
        $result2 = mysql_query($sql2);
        while($row = mysql_fetch_row($result2))
        {
				if($username ==$row[1]){
			   echo "序號: $row[0]  留言人： $row[1],(本人) " . 
                 "內容 $row[2] ,時間： $row[3] <br>";
				 }else{
				  echo "序號: $row[0]  留言人： $row[1], 內容 $row[2] ,時間： $row[3] <br>";
				 }
        }
}
else
{
        echo '您無權限觀看此頁面!';
        echo '<meta http-equiv=REFRESH CONTENT=2;url=index.php>';
}
?>
 </body>
</html>