<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $projectDetails = $_POST['project-details'];
  $consultationDate = $_POST['consultation-date'];
  $consultationTime = $_POST['consultation-time'];

  

  
  $to = 'cameron.fidler4259@outlook.com';
  $subject = 'Art Project Consultation Booking';
  $message = "Name: $name\n";
  $message .= "Email: $email\n";
  $message .= "Phone: $phone\n";
  $message .= "Project Details: $projectDetails\n";
  $message .= "Preferred Consultation Date: $consultationDate\n";
  $message .= "Preferred Consultation Time: $consultationTime\n";
  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    
    header('Location: thank-you.html');
    exit();
  } else {
    
    echo 'Error sending email.';
  }
}
?>
