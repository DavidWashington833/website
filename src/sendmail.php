<?php
require_once ("phpmailer/class.phpmailer.php");
require_once ("phpmailer/class.smtp.php");

error_reporting(E_ALL);
error_reporting(E_STRICT);
date_default_timezone_set('America/Sao_Paulo');

$ip = getenv("REMOTE_ADDR");
$name = utf8_decode($_POST['name']);
$email = utf8_decode($_POST['email']);
$subject = utf8_decode($_POST['subject']);
$message = utf8_decode($_POST['message']);

$Email = new PHPMailer();
$Email->SetLanguage("br");
$Email->IsMail();
$Email->IsHTML(true);

$Email->From = $email;
$Email->FromName = $name;
$Email->AddAddress('davidwashington833@gmail.com');
$Email->Subject = $subject;
$Email->AddBcc('davidwashington833@gmail.com');

$body = "<html
<body
<table>
<tr>
<td>CONTATO
<tr>
<td>Nome completo: <td> $name
<tr>
<td>E-mail atual: <td> $email
<tr>
<td>E-mail atual: <td> $subject
<tr>
<td>Mensagem: <td> $message";

$Email->MsgHTML($body);
$Email->AltBody = 'Para conseguir essa e mail corretamente, u um visualizador de email com suporte a HTML';
$Email->WordWrap = 50;

if ($Email->Send()) {
    echo 'Obrigado por entrar em contato <img src="./img/ic_sentiment_very_satisfied_black_18px.svg"alt=":)">.';
}
else {
    echo '<p>Desculpe, ocorreu um erro, por favor entrar em contato com <a href="mailto:davidwashington833@gmail.com" class="c-aqua c-aqua-event">davidwashington833@gmail.com</a>.</p>';
}