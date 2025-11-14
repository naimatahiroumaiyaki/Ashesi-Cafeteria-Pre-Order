<?php
$host = "127.0.0.1"; 
$user = "root"; 
$password = "";
$dbname = "fff2025";
$port = 3306; 

// Create connection
$conn = new mysqli($host, $user, $password, $dbname, $port);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// $sql = "INSERT INTO users (NAME, email, PASSWORD, role) VALUES ('Emmanuel', 'emmanuel@ashesi.edu.gh', '1234@Admin', 'student')";

// if ($conn->query($sql) === TRUE) {
//   echo "New record created successfully";
// } else {
//   echo "Error: " . $sql . "<br>" . $conn->error;
// }

//echo "Connected successfully!";
?>