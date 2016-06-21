<?php
include("class.phpmailer.php"); //匯入PHPMailer類別

$Subject=$_POST['title'];
$Mail=$_POST['email'];
$Sendbody=$_POST['report'];

$mail= new PHPMailer(); //建立新物件
$mail->IsSMTP(); //設定使用SMTP方式寄信
$mail->SMTPAuth = true; //設定SMTP需要驗證
$mail->SMTPSecure = "ssl"; // Gmail的SMTP主機需要使用SSL連線
$mail->Host = "smtp.gmail.com"; //Gamil的SMTP主機
$mail->Port = 465;  //Gamil的SMTP主機的埠號(Gmail為465)。
$mail->CharSet = "utf-8"; //郵件編碼

$mail->Username = "angus013028@gmail.com"; //Gamil帳號
$mail->Password = "wupin112"; //Gmail密碼

$mail->From = $Mail; //寄件者信箱
$mail->FromName = "客服再說"; //寄件者姓名

$mail->Subject = "來信再說: ".$Subject.", By: ".$Mail;  //郵件標題
$mail->Body = "主旨: ".$Subject."<br>來信信箱: ".$Mail."<br>內容: ".$Sendbody; //郵件內容

$mail->IsHTML(true); //郵件內容為html ( true || false)
$mail->AddAddress("angus013028@gmail.com"); //收件者郵件及名稱

if(!$mail->Send()) {
	echo "發送錯誤: " . $mail->ErrorInfo;
} else {
	echo "<div align=center>感謝您的回覆，我們將會盡速處理!</div>";
  echo '<meta http-equiv=REFRESH CONTENT=2;url=../index.php>';
}
?>
