<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit();
}
include 'connect.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>User Dashboard — Ashesi Cafeteria</title>
    <link rel="stylesheet" href="user-dashboard.css">
</head>
<body>
<header class="dashboard-header">
    <h1>Welcome, <?php echo htmlspecialchars($_SESSION['name']); ?>!</h1>
    <a href="logout.php" class="logout-btn">Logout</a>
</header>

<main class="dashboard-container">
    <!--  CAFETERIA SELECT -->
    <section class="cafeteria-section">
        <h2>Select a Restaurant</h2>
        <select id="cafeteriaSelect">
            <option value="">-- Choose a Restaurant --</option>
            <option value="akorno">Akorno</option>
            <option value="hallmark">Hallmark</option>
            <option value="munchies">Munchies</option>
        </select>
    </section>

    <!--  MENU -->
    <section class="menu-section">
        <h2>Menu</h2>

        <div class="menu-categories">
            <button class="category-btn active" data-category="all">All</button>
            <button class="category-btn" data-category="breakfast">breakfast</button>
            <button class="category-btn" data-category="lunch">Lunch</button>
            <button class="category-btn" data-category="dinner">dinner</button>
            <button class="category-btn" data-category="snack">Snack</button>
            <button class="category-btn" data-category="drinks">Drinks</button>
            <button class="category-btn" data-category="singles">Singles</button>
            <button class="category-btn" data-category="packs">Packs</button>
        </div>

        <div class="menu-search">
            <input type="search" placeholder="Search menu items…" id="menuSearch">
        </div>

        <div id="menuList" class="menu-container">
            <div class="empty-state">Please select a restaurant to view its menu.</div>
        </div>
    </section>

    <!--  TOTAL -->
    <section class="total-section">
        <h3>Total Amount: ¢<span id="orderTotal">0.00</span></h3>
    </section>

    <div class="order-queue-container">
        <!--  ORDER FORM -->
        <section class="order-section">
            <h2>Place an Order</h2>
            <form id="orderForm">
                <div class="form-group">
                    <label for="orderType">Order Type:</label>
                    <select id="orderType" required>
                        <option value="">-- Select Order Type --</option>
                        <option value="delivery">Delivery</option>
                        <option value="dine-in">Dine In</option>
                        <option value="takeout">Take Out</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="paymentMethod">Payment Method:</label>
                    <select id="paymentMethod" required>
                        <option value="">-- Select Payment Method --</option>
                        <option value="mealplan">Meal Plan</option>
                        <option value="cash">Cash</option>
                        <option value="momo">Mobile Money</option>
                    </select>
                </div>

                <!-- Meal-plan fields -->
                <div id="mealPlanFields" class="hidden">
                    <div class="form-group"><label for="studentId">Student ID:</label><input type="text" id="studentId"></div>
                    <div class="form-group"><label for="mealPlanPin">PIN:</label><input type="password" id="mealPlanPin"></div>
                </div>

                <!-- MoMo fields -->
                <div id="momoFields" class="hidden">
                    <div class="form-group"><label>Cafeteria MoMo Number:</label><div id="momoNumber" class="momo-display"></div></div>
                    <p class="momo-instructions">Send the total amount to the number above and enter the reference below.</p>
                    <div class="form-group"><label for="momoReference">Reference:</label><input type="text" id="momoReference"></div>
                </div>

                <!-- Delivery fields -->
                <div id="deliveryFields" class="hidden">
                    <div class="form-group"><label for="deliveryLocation">Location:</label><input type="text" id="deliveryLocation"></div>
                    <div class="form-group"><label for="deliveryInstructions">Instructions:</label><textarea id="deliveryInstructions"></textarea></div>
                </div>

                <button type="submit" class="submit-btn">Place Order</button>
            </form>

            <!-- Order status modal -->
            <div id="orderStatusModal" class="modal hidden">
                <div class="modal-content">
                    <h3>Order Status</h3>
                    <div id="orderStatusContent"></div>
                    <div class="order-progress">
                        <div class="progress-step" id="stepReceived"><div class="step-indicator"></div><div class="step-label">Received</div></div>
                        <div class="progress-step" id="stepProcessing"><div class="step-indicator"></div><div class="step-label">Processing</div></div>
                        <div class="progress-step" id="stepReady"><div class="step-indicator"></div><div class="step-label">Ready</div></div>
                    </div>
                </div>
            </div>
        </section>

    </div>

    <!--  FEEDBACK -->
    <section class="feedback-section">
        <h2>Send Feedback</h2>
        <form id="feedbackForm">
            <textarea id="feedbackMessage" placeholder="Write your feedback…" required></textarea>
            <button type="submit">Submit Feedback</button>
        </form>
        <div id="feedbackResponse"></div>
    </section>

    <!--  ORDER HISTORY -->
    <section class="order-history-section">
        <h2>Order History</h2>
        <div class="order-history-filters">
            <select id="historyFilter">
                <option value="all">All Orders</option>
                <option value="active">Active Orders</option>
                <option value="completed">Completed Orders</option>
                <option value="cancelled">Cancelled Orders</option>
            </select>
        </div>
        <div id="orderHistoryList" class="order-history-list"></div>
    </section>

    <!--  ORDER DETAILS MODAL -->
    <div id="orderDetailsModal" class="modal hidden">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Order Details</h3>
                <button class="close-modal">×</button>
            </div>
            <div id="orderDetailsContent"></div>
            <div class="modal-footer">
                <button id="cancelOrderBtn" class="danger-btn">Cancel Order</button>
                <button class="close-modal-btn">Close</button>
            </div>
        </div>
    </div>
</main>

<script src="user-dashboard.js"></script>
</body>
</html>
