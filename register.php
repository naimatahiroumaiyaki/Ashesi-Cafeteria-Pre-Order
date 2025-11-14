<?php
include('connect.php'); 
$error = "";
$success = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $role = trim($_POST['role']);

    // Check if email already exists
    $checkSql = "SELECT * FROM users WHERE email = ?";
    $checkStmt = $conn->prepare($checkSql);
    $checkStmt->bind_param("s", $email);
    $checkStmt->execute();
    $result = $checkStmt->get_result();

    if ($result->num_rows > 0) {
        $error = "An account with this email already exists.";
    } else {
        // Hash the password before storing it
        $password_hash = password_hash($password, PASSWORD_DEFAULT);
        
        // Insert new user
        $sql = "INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $name, $email, $password_hash, $role);

        if ($stmt->execute()) {
            $success = "Registration successful! You can now log in.";
        } else {
            $error = "Error: " . $stmt->error;
        }
    }
}
?>




<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Register — Ashesi Cafeteria</title>
  <link rel="stylesheet" href="register.css" />
</head>
<body>
  <main class="register-page">
    <div class="register-overlay"></div>
    <div class="register-container">
      <section class="form-card">
        <h2>Create Your Account</h2>
      <p>Fill in your details to get started </p>

      <form id="registerForm" action="register.php" method="POST">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required minlength="6" />
        </div>



        <button type="submit" class="btn">Register</button>
      </form>

      <p class="switch">Already have an account? <a href="login.php">Login</a></p>
    </section>
    </div>
  </main>

  <script src="register.js"></script>
</body>
</html>
