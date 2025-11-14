<?php
session_start();
require_once 'connect.php';

// Check if staff is logged in
if (!isset($_SESSION['staff_id']) || !isset($_SESSION['cafeteria_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit();
}

// Get JSON data
$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['orderId']) || !isset($data['status'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit();
}

$order_id = $data['orderId'];
$new_status = $data['status'];
$cafeteria_id = $_SESSION['cafeteria_id'];

// Verify the order belongs to this cafeteria
$check_sql = "SELECT id FROM orders WHERE id = ? AND cafeteria_id = ?";
$check_stmt = $conn->prepare($check_sql);
$check_stmt->bind_param("ii", $order_id, $cafeteria_id);
$check_stmt->execute();

if ($check_stmt->get_result()->num_rows === 0) {
    http_response_code(403);
    echo json_encode(['error' => 'Order not found or unauthorized']);
    exit();
}

// Update order status
$update_sql = "UPDATE orders SET status = ? WHERE id = ?";
$update_stmt = $conn->prepare($update_sql);
$update_stmt->bind_param("si", $new_status, $order_id);

if ($update_stmt->execute()) {
    // Get user_id for notification
    $user_sql = "SELECT user_id FROM orders WHERE id = ?";
    $user_stmt = $conn->prepare($user_sql);
    $user_stmt->bind_param("i", $order_id);
    $user_stmt->execute();
    $user_result = $user_stmt->get_result()->fetch_assoc();
    
    // Insert notification
    $message = "Your order #" . $order_id . " is now " . $new_status;
    $notification_sql = "INSERT INTO notifications (user_id, message, order_id) VALUES (?, ?, ?)";
    $notification_stmt = $conn->prepare($notification_sql);
    $notification_stmt->bind_param("isi", $user_result['user_id'], $message, $order_id);
    $notification_stmt->execute();
    
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to update order status']);
}