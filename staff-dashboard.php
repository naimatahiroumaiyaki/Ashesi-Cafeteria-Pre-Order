<?php
session_start();
include('connect.php');

// Only staff can access
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'staff') {
    header("Location: login.php");
    exit();
}

//$cafeteria_id = $_SESSION['cafeteria_id'];
//$cafeteria_name = $_SESSION['cafeteria_name']; 

?>

<!DOCTYPE html>
<html>
<head>
    <title> Staff Dashboard</title>
    <style>
        body { font-family: Arial; padding: 20px; }
        table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
        th { background-color: #eee; }
        button { padding: 5px 10px; margin: 2px; }
    </style>
</head>
<body>
<h1>Welcome to  your staff dashboard</h1>

<h2>Orders</h2>
<table>
<tr>
    <th>Order ID</th>
    <th>User</th>
    <th>Items</th>
    <th>Status</th>
    <th>Feedback</th>
    <th>Actions</th>
</tr>
<?php
// Fetch orders for this cafeteria
$sql = "SELECT orders.*, users.name as user_name FROM orders 
        JOIN users ON orders.user_id = users.id 
        WHERE orders.cafeteria_id = ? ORDER BY created_at DESC";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $cafeteria_id);
$stmt->execute();
$result = $stmt->get_result();

while ($order = $result->fetch_assoc()) {
    echo "<tr>
        <td>{$order['id']}</td>
        <td>{$order['user_name']}</td>
        <td>{$order['items']}</td>
        <td>{$order['status']}</td>
        <td>{$order['feedback']}</td>
        <td>
            <form style='display:inline;' method='post' action='update-order.php'>
                <input type='hidden' name='order_id' value='{$order['id']}'>
                <button name='action' value='complete'>Complete</button>
                <button name='action' value='cancel'>Cancel</button>
            </form>
            <form style='display:inline;' method='post' action='send-notification.php'>
                <input type='hidden' name='user_id' value='{$order['user_id']}'>
                <input type='text' name='message' placeholder='Notify user' required>
                <button type='submit'>Send</button>
            </form>
        </td>
    </tr>";
}
?>
</table>

<h2>Menu</h2>
<table>
<tr>
    <th>Item Name</th>
    <th>Price</th>
    <th>Description</th>
    <th>Actions</th>
</tr>
<?php
// Fetch menu items
$sql = "SELECT * FROM menu WHERE cafeteria_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $cafeteria_id);
$stmt->execute();
$result = $stmt->get_result();

while ($menu = $result->fetch_assoc()) {
    echo "<tr>
        <td>{$menu['item_name']}</td>
        <td>{$menu['price']}</td>
        <td>{$menu['description']}</td>
        <td>
            <form style='display:inline;' method='post' action='update-menu.php'>
                <input type='hidden' name='menu_id' value='{$menu['id']}'>
                <button name='action' value='edit'>Edit</button>
                <button name='action' value='delete'>Delete</button>
            </form>
        </td>
    </tr>";
}
?>
</table>

<h3>Add New Menu Item</h3>
<form method="post" action="add-menu.php">
    <input type="text" name="item_name" placeholder="Item Name" required>
    <input type="number" name="price" placeholder="Price" step="0.01" required>
    <input type="text" name="description" placeholder="Description" required>
    <button type="submit">Add Item</button>
</form>

</body>
</html>
