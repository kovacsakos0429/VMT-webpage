<?php
	if (isset($_POST['submit'])){
		$name = $_POST['name'];
		$subject = $_POST['subject'];
		$mailForm = $_POST['mail'];
		$message = $_POST['message'];
		
		$mailTo = "kovacsakos0429@gmail.com";
		$headers = "From: ".$mailFrom;
		$txt = "You have received az email from ".$name.".\n\n".$message;
		
		mail($mailTo, $subject, $txt, $headers);
		header("Location: index.php?mailsend");
	}
?>