<?php 
	
	$con = mysqli_connect('localhost', 'root');
	if (!$con) {
		die("Error in connecting to the database due to ".mysql_connect_error());
	}
	echo "<script>alert('Connected to the database successfully');</script>";
	mysqli_select_db($con, 'codeit');

	$user = $_POST['name'];
	$email = $_POST['email'];	
	$message = $_POST['message'];

	$query = "INSERT INTO `userinfo` (`id`, `name`, `email`, `message`) VALUES ('', '$user', '$email', '$message');";
	mysqli_query($con, $query);
	header('location: index.html');
 ?>