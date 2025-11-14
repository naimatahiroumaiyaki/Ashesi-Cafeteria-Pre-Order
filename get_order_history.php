<?php
session_start();
include('connect.php');

header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['error' => 'Not authenticated']);
    exit;
}

$filter = $_GET['filter'] ?? 'all';
$userId = $_SESSION['user_id'];

$query = "SELECT o.*, c.name as cafeteria_name 
          FROM orders o 
          JOIN cafeterias c ON o.cafeteria_id = c.id 
          WHERE o.user_id = ?";

if ($filter !== 'all') {
    $query .= " AND o.status = ?";
}

$query .= " ORDER BY o.created_at DESC";

$stmt = $conn->prepare($query);

if ($filter === 'all') {
    $stmt->bind_param('i', $userId);
} else {
    $stmt->bind_param('is', $userId, $filter);
}

$stmt->execute();
$result = $stmt->get_result();

$orders = [];
while ($row = $result->fetch_assoc()) {
    $orders[] = $row;
}

echo json_encode($orders);