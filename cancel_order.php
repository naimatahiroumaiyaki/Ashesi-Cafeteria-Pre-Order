<?php
session_start();
include('connect.php');

header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['success' => false, 'message' => 'Not authenticated']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$orderId = $data['orderId'] ?? null;

if (!$orderId) {
    echo json_encode(['success' => false, 'message' => 'Order ID not provided']);
    exit;
}

// Check if order exists and belongs to user
$checkQuery = "SELECT status FROM orders WHERE id = ? AND user_id = ?";
$stmt = $conn->prepare($checkQuery);
$stmt->bind_param('ii', $orderId, $_SESSION['user_id']);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    echo json_encode(['success' => false, 'message' => 'Order not found']);
    exit;
}

$order = $result->fetch_assoc();

// Check if order can be cancelled
if (!in_array($order['status'], ['received', 'processing'])) {
    echo json_encode(['success' => false, 'message' => 'Order cannot be cancelled']);
    exit;
}

// Cancel order
$updateQuery = "UPDATE orders SET status = 'cancelled' WHERE id = ?";
$stmt = $conn->prepare($updateQuery);
$stmt->bind_param('i', $orderId);

if ($stmt->execute()) {
    // If order was paid with meal plan, refund the balance
    $refundQuery = "UPDATE users u 
                   JOIN orders o ON o.user_id = u.id 
                   SET u.meal_plan_balance = u.meal_plan_balance + o.total_amount 
                   WHERE o.id = ? AND o.payment_method = 'mealplan'";
    $stmt = $conn->prepare($refundQuery);
    $stmt->bind_param('i', $orderId);
    $stmt->execute();

    // Notify cafeteria staff
    $notifyQuery = "INSERT INTO staff_notifications (order_id, cafeteria_id, message) 
                   SELECT ?, cafeteria_id, 'Order cancelled' 
                   FROM orders WHERE id = ?";
    $stmt = $conn->prepare($notifyQuery);
    $stmt->bind_param('ii', $orderId, $orderId);
    $stmt->execute();

    echo json_encode(['success' => true, 'message' => 'Order cancelled successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error cancelling order']);
}