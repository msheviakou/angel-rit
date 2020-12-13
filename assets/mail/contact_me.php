<?php
if(empty($_POST['name']) ||
   empty($_POST['phone']))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));

$to = 'shevyakovmmbsuir@gmail.com';
$email_subject = "Заказан обратный звонок от: $phone";
$email_body = "$name заказал звонок. Перезвоните по телефону $phone.";
$headers = "From: noreply@yourdomain.com\n";
$headers .= "Reply-To: $to";
mail($to,$email_subject,$email_body,$headers);
return true;         
?>
