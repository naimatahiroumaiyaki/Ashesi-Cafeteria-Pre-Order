<?php
session_start();
include('connect.php');

$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST['email']);
    $password = trim($_POST['password']); // For staff, this is the cafeteria password

    //  Try to find a user
    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();

        //  Check if normal user password matches
        if ($user['role'] === 'user' && password_verify($password, $user['password_hash'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['name'] = $user['name'];
            $_SESSION['role'] = 'user';
            header("Location: user-dashboard.php");
            exit();
        }

        if ($user['role'] === 'staff') {
            // Get cafeteria linked to it staff
            $cafeteria_id = $user['cafeteria_id'];

            $sql2 = "SELECT * FROM cafeterias WHERE id = ?";
            $stmt2 = $conn->prepare($sql2);
            $stmt2->bind_param("i", $cafeteria_id);
            $stmt2->execute();
            $result2 = $stmt2->get_result();

            if ($result2->num_rows === 1) {
                $caf = $result2->fetch_assoc();

                // Staff uses cafeteria password directly as their login password
                if (password_verify($password, $caf['login_password_hash'])) {
                    $_SESSION['user_id'] = $user['id'];
                    $_SESSION['name'] = $user['name'];
                    $_SESSION['role'] = 'staff';
                    header("Location: staff-dashboard.php");
                    exit();
                } else {
                    $error = "Invalid cafeteria password.";
                }
            } else {
                $error = "Cafeteria not found for this staff.";
            }
        }




        // If none matched
        if ($error === "") {
            $error = "Incorrect password!";
        }

    } else {
        $error = "No account found with that email.";
    }
}
?>





<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Login — Ashesi Cafeteria</title>
  <link rel="stylesheet" href="login.css" />
</head>
<body>
  <main class="login-page">
    <section class="form-card">
      <h2>Welcome Back</h2>
      <p>Login to access your cafeteria dashboard.</p>

      <?php if ($error): ?>
          <div class="error-message"><?php echo $error; ?></div>
      <?php endif; ?>

      <form id="loginForm" action="login.php" method="POST">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
          
        </div>

        <button type="submit" class="btn" style="text-color: red;">Login</button>
      </form>

      <p class="switch">Don't have an account? <a href="register.php">Register</a></p>
    </section>
  </main>

  <script src="login.js"></script>
</body>
</html>
