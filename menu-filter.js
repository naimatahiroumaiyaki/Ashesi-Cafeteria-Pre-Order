// Menu filtering
document.addEventListener('DOMContentLoaded', function() {
    let activeCategory = 'all';
    
    // Category buttons click handler
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            activeCategory = category;
            
            // Update active button
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter menu items
            filterMenuItems(category);
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('menuSearch');
    searchInput.addEventListener('input', function() {
        filterMenuItems(activeCategory, this.value);
    });
});

function filterMenuItems(category, searchTerm = '') {
    const cafeteria = document.getElementById('cafeteriaSelect').value;
    if (!cafeteria) return;
    
    const menuItems = menus[cafeteria];
    const filteredItems = menuItems.filter(item => {
        const matchesCategory = category === 'all' || item.category.toLowerCase() === category;
        const matchesSearch = !searchTerm || 
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    updateMenuDisplay(filteredItems);
}

function updateMenuDisplay(items) {
    const menuList = document.getElementById('menuList');
    if (!items.length) {
        menuList.innerHTML = '<div class="empty-state">No items found matching your criteria</div>';
        return;
    }

    menuList.innerHTML = `
        <div class="menu-grid">
            ${items.map(item => `
                <div class="menu-item">
                    <div class="menu-item-image">
                        <img 
                            src="${item.image}" 
                            alt="${item.name}" 
                            loading="lazy"
                            onerror="this.src='assets/placeholder.jpg'; this.onerror=null;">
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-details">
                            <div class="menu-item-title">${item.name}</div>
                            <div class="menu-item-description">${item.description || 'No description available'}</div>
                        </div>
                        <div class="menu-item-price">
                            <span>Price:</span>
                            <span>¢${item.price.toFixed(2)}</span>
                            
                            <button class="add-to-order-btn" 
                        data-item-id="${item.id}" 
                        data-item-name="${item.name}">
                        add
                        </button>
                    </div>
                        
                    </div>
                    
                </div>
            `).join('')}
        </div>`;

    // Make sure the total section exists and is visible
    const totalSection = document.querySelector('.total-section');
    if (totalSection) {
        totalSection.style.display = 'flex';
    }
    updateTotal();
}


function updateTotal() {
    const total = Array.from(document.querySelectorAll('input[name="orderItems"]:checked'))
        .reduce((sum, item) => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(document.getElementById(`qty-${item.value}`).value);
            return sum + (price * quantity);
        }, 0);
    
    document.getElementById('orderTotal').textContent = total.toFixed(2);
}

function incrementQuantity(itemId) {
    const input = document.getElementById(`qty-${itemId}`);
    if (input.value < 10) {
        input.value = parseInt(input.value) + 1;
        updateTotal();
    }
}

function decrementQuantity(itemId) {
    const input = document.getElementById(`qty-${itemId}`);
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
        updateTotal();
    }
}

// Enhanced order feedback system
function showOrderFeedbackForm(orderId) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Order Feedback</h3>
            <form id="orderFeedbackForm">
                <input type="hidden" name="order_id" value="${orderId}">
                <div class="rating-container">
                    <label>Rate your experience:</label>
                    <div class="star-rating">
                        ${[1,2,3,4,5].map(num => `
                            <input type="radio" name="rating" value="${num}" id="star${num}">
                            <label for="star${num}">★</label>
                        `).join('')}
                    </div>
                </div>
                <div class="feedback-message">
                    <label for="feedbackMessage">Your feedback:</label>
                    <textarea id="feedbackMessage" name="message" required
                        placeholder="Tell us about your experience..."></textarea>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="submit-btn">Submit Feedback</button>
                    <button type="button" class="close-modal-btn">Cancel</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    const form = modal.querySelector('#orderFeedbackForm');
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        
        try {
            const response = await fetch('assets/order-feedback.php', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            
            if (result.success) {
                showNotification(result.message, 'success');
                modal.remove();
            } else {
                showNotification(result.message, 'error');
            }
        } catch (error) {
            showNotification('Error submitting feedback. Please try again.', 'error');
        }
    });
    
    modal.querySelector('.close-modal-btn').onclick = () => modal.remove();
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}