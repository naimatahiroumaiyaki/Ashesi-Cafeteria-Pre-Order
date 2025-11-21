<?php
session_start();
header('Content-Type: application/json');
include 'connect.php';

// DEBUG: Log everything
error_log("=== ORDER PROCESSING START ===");

if (!isset($_SESSION['user_id'])) {
    error_log("USER NOT LOGGED IN");
    echo json_encode(['success'=>false,'message'=>'Not logged in']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if ($data === null) {
    error_log("JSON DECODE FAILED");
    echo json_encode(['success'=>false,'message'=>'Invalid JSON data']);
    exit;
}

$user_id = (int)$_SESSION['user_id'];
$cafeteria_id = (int)$data['cafeteria'];
$order_items = json_encode($data['items']);
$total_amount = (float)$data['total'];
$order_type = $data['orderType'];
$payment_method = $data['paymentMethod'];
$student_id = $data['studentId'] ?? null;
$pin = $data['pin'] ?? null;
$momo_reference = $data['momoReference'] ?? null;
$delivery_location = $data['deliveryLocation'] ?? null;
$delivery_instructions = $data['deliveryInstructions'] ?? null;

// FIXED: Changed 'cafeteria' to 'cafeteria_id'
$stmt = $conn->prepare("INSERT INTO orders
(user_id, cafeteria_id, order_items, total_amount, order_type, payment_method, student_id, pin, momo_reference, delivery_location, delivery_instructions, status, created_at)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'received', NOW())");

if (!$stmt) {
    error_log("PREPARE FAILED: " . $conn->error);
    echo json_encode(['success'=>false, 'message'=>'Prepare failed: ' . $conn->error]);
    exit;
}

$stmt->bind_param("iisdsssssss",
    $user_id, $cafeteria_id, $order_items, $total_amount, $order_type, 
    $payment_method, $student_id, $pin, $momo_reference, $delivery_location, $delivery_instructions
);

if ($stmt->execute()) {
    $orderId = $stmt->insert_id;
    error_log("ORDER SUCCESS - ID: $orderId");
    echo json_encode(['success'=>true, 'orderId'=>$orderId]);
} else {
    error_log("EXECUTE FAILED: " . $stmt->error);
    echo json_encode(['success'=>false, 'message'=>$stmt->error]);
}

error_log("=== ORDER PROCESSING END ===");
?>