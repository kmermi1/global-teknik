<?php

include 'config.php';

$name = $_POST['name'];
/*$email = $_POST['email'];*/
$email = "info@globalteknikmuhendislik.com"; 
$subject = $_POST['subject'];
$message = "Email address of the sender is ".$_POST['email']."<br/>".$_POST['message'];

$error = '';

$string_exp = "/^[A-Za-z0-9 .'-]+$/";
$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

$headers  =  'MIME-Version: 1.0' . "\r\n";
$headers .=  'Content-type: text/html; charset=utf-8' . "\r\n";

$headers .=  "From: $name <".$email."> \r\n";
$headers .= "Reply-To: $email \r\n";
$headers .=	'X-Mailer: PHP/' . phpversion();

if(strlen($name)==0) {
	$error = 'Wrong name.';	
	echo 'name-error';
}

if(!preg_match($email_exp,$email)) {
	$error = 'Wrong e-mail.';	
}

if(strlen($message)<1) {
	$error = 'Enter message.';	
}

if(strlen($error)==0) {
	@mail(YOURMAIL, $subject, $message, $headers);
	echo 'OK';
}
else {
	echo 'error';
}
	


?>