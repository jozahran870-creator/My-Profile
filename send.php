<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name  = $_POST["name"];
    $email = $_POST["email"];
    $msg   = $_POST["message"];

    $mail = new PHPMailer(true);

    try {
        // إعدادات SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'youssefzahran329@gmail.com'; // إيميلك
        $mail->Password   = 'كلمة السر أو App Password'; // لازم تولد App Password من جيميل
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom('youssefzahran329@gmail.com', 'موقع يوسف');
        $mail->addAddress('youssefzahran329@gmail.com'); // نفس الإيميل

        $mail->isHTML(true);
        $mail->Subject = 'رسالة جديدة من موقعك';
        $mail->Body    = "الاسم: $name<br>الإيميل: $email<br>الرسالة:<br>$msg";

        $mail->send();
        echo 'تم إرسال الرسالة بنجاح ✅';
    } catch (Exception $e) {
        echo "في مشكلة في الإرسال ❌: {$mail->ErrorInfo}";
    }
}
?>
