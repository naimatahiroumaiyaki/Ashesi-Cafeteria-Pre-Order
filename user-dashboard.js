/* ==============================================================
   DATA (normally fetched from the DB – kept here for demo)
   ============================================================== */
const queueData = {
    akorno:   { count: 8,  status: 'moderate', wait: 15 },
    hallmark: { count: 5,  status: 'short',    wait: 8 },
    munchies: { count: 12, status: 'long',     wait: 25 }
};

const menus = {
    akorno: [
        {id:1, name:'Kenkey', price:20, cat:'lunch', img:'assets/kenkey.jpeg', desc:'Kenkey is a traditional Ghanaian dish made from fermented corn dough, wrapped in corn husks, and steamed'},
        {id:2, name:'Chawarma', price:15, cat:'singles', img:'assets/chawarma.jpeg', desc:'Perfectly seasoned'},
        {id:3, name:'Grilled Chicken', price:25, cat:'lunch', img:'assets/grilled_chicken.jpeg', desc:'Rice & beans'},
        {id:4, name:'Fish', price:18, cat:'singles', img:'assets/fish.jpeg', desc:'Grilled fish'},
        {id:5, name:'Blue Skies', price:25, cat:'drinks', img:'assets/blues.jpeg', desc:'Fruit juice'},
        {id:6, name:'Small Water', price:3, cat:'drinks', img:'assets/water.jpeg', desc:'Bottled water'},
        {id:7, name:'Red Red', price:38, cat:'lunch', img:'assets/redred.jpeg', desc:'Ghanaian dish composed of black-eyed peas, cooked in palm oil or other vegetable oil with plantain'},
        {id:8, name:'Banku', price:38, cat:'lunch', img:'assets/banku.jpeg', desc:'Banku is a staple Ghanaian dish made from fermented corn and cassava dough'},
        {id:9, name:'Gari Fortor', price:20, cat:'lunch', img:'assets/gari_fortor.jpeg', desc:'Gari Fortor is a Ghanaian delicacy which can be served as a main dish mixed with vegetables or an accompaniment for rice, beans or jollof'},
        {id:10, name:'Jollof Rice', price:30, cat:'lunch', img:'assets/jollof.jpeg', desc:'Spicy African rice dish'},
        {id:11, name:'Boiled Yam', price:30, cat:'lunch', img:'assets/boiled_yam.jpeg', desc:'Boiled yam served with a spicy sauce'},
        {id:12, name:'Plain Rice', price:28, cat:'lunch', img:'assets/plain_rice.jpeg', desc:'Plain rice served with a choice of sauce'},
        {id:13, name:'Can Coke', price:12, cat:'drinks', img:'assets/can_coke.jpeg', desc:'Soft drink'},
        {id:14, name:'Fanta', price:6, cat:'drinks', img:'assets/fanta.jpeg', desc:'Orange soda'},
        {id:15, name:'Coca Cola', price:6, cat:'drinks', img:'assets/coke.jpeg', desc:'Classic Coke'},
        {id:16, name:'Sprite', price:6, cat:'drinks', img:'assets/sprite.jpeg', desc:'Lemon-lime soda'},
        {id:17, name:'Kalipo', price:5, cat:'drinks', img:'assets/kalipo.jpeg', desc:'juice drink'},
        {id:18, name:'French Fries', price:38, cat:'singles', img:'assets/french_fries.jpeg', desc:'Crispy French fries'},
        {id:19, name:'Fish', price:45, cat:'singles', img:'assets/fish.jpeg', desc:'Grilled fish'},
        {id:20, name:'Burger', price:40, cat:'singles', img:'assets/burger.jpeg', desc:'Grilled chicken'},
        {id:21, name:'French Fries and proteins', price:38, cat:'dinner', img:'assets/french_f_p.jpeg', desc:'French fries with choice of protein'},
        {id:22, name:'Indomie', price:38, cat:'dinner', img:'assets/indomie.jpeg', desc:'Indomie noodles with choice of protein'},
        {id:23, name:'Waakye', price:38, cat:'breakfast', img:'assets/waakye1.jpeg', desc:'Waakye with choice of protein'},
        {id:24, name:'Chapati', price:15, cat:'breakfast', img:'assets/chapati.jpeg', desc:'Chapati with choice of protein'},
        {id:25, name:'Fried Egg', price:10, cat:'breakfast', img:'assets/fried_egg.jpeg', desc:'Fried egg '},
        {id:26, name:'Sosage', price:10, cat:'breakfast', img:'assets/sosage.jpeg', desc:'Sosage '},
        {id:27, name:'Pancakes', price:10, cat:'breakfast', img:'assets/pancake.jpeg', desc:'Pancakes '},
        {id:28, name:'Coffee', price:15, cat:'breakfast', img:'assets/coffee.jpeg', desc:'Freshly brewed coffee'},
        {id:29, name:'Tea', price:15, cat:'breakfast', img:'assets/tea.jpeg', desc:'Freshly brewed tea'},
        {id:30, name:'Smoothie', price:30, cat:'breakfast', img:'assets/smoothie.jpeg', desc:'Fruit smoothie'},
        {id:31, name:'Oatmeal', price:27, cat:'breakfast', img:'assets/oatmeal.jpeg', desc:'Warm oatmeal'},
        {id:32, name:'Yogurt', price:25, cat:'breakfast', img:'assets/yogurt.jpeg', desc:'Greek yogurt'},
        {id:33, name:'Pack', price:6, cat:'packs', img:'assets/pack.jpeg', desc:'Pack'},
        {id:34, name:'Paper Bag', price:3, cat:'packs', img:'assets/paper.jpeg', desc:'Paper Bag'},
   
   
    ],  
    hallmark: [
        {id:35, name:'Pasta Bolognese', price:25, cat:'lunch', img:'assets/pasta.jpg', desc:'Spaghetti with meat sauce'},
        {id:36, name:'Club Sandwich', price:18, cat:'snack', img:'assets/sandwich.jpg', desc:'Triple-decker sandwich'},
        {id:37, name:'breakfast Pack', price:15, cat:'breakfast', img:'assets/breakfast.jpg', desc:'Eggs, bread, sausage'},
        {id:38, name:'Fruit Salad', price:12, cat:'snack', img:'assets/fruit-salad.jpg', desc:'Fresh fruits'},
        {id:39, name:'Soft Drinks', price:8, cat:'drinks', img:'assets/soft-drinks.jpg', desc:'Carbonated'},
        {id:40, name:'Coffee', price:10, cat:'drinks', img:'assets/coffee.jpg', desc:'Freshly brewed'}
    ],
    munchies: [
        {id:13, name:'Burger', price:30, cat:'singles', img:'assets/burger.jpg', desc:'Beef burger'},
        {id:14, name:'Pizza Slice', price:22, cat:'singles', img:'assets/pizza.jpg', desc:'Pepperoni slice'},
        {id:15, name:'French Fries', price:15, cat:'snack', img:'assets/fries.jpg', desc:'Crispy fries'},
        {id:16, name:'Chicken Wings', price:25, cat:'singles', img:'assets/wings.jpg', desc:'Buffalo wings'},
        {id:17, name:'Milkshake', price:18, cat:'drinks', img:'assets/milkshake.jpg', desc:'Vanilla'},
        {id:18, name:'Ice Tea', price:12, cat:'drinks', img:'assets/ice-tea.jpg', desc:'Lemon iced tea'}
    ]
};

const momoNumbers = { akorno:'0551234567', hallmark:'0241234567', munchies:'0501234567' };

/* ==============================================================
   STATE
   ============================================================== */
let currentCafeteria = '';
let cart = {};                     // { itemId: {qty, price, name} }
let orderInterval = null;

/* ==============================================================
   DOM REFERENCES
   ============================================================== */
const els = {
    cafeteriaSel : document.getElementById('cafeteriaSelect'),
    menuList     : document.getElementById('menuList'),
    queueStatus  : document.getElementById('queueStatus'),
    totalSpan    : document.getElementById('orderTotal'),
    orderType    : document.getElementById('orderType'),
    paymentMethod: document.getElementById('paymentMethod'),
    mealPlan     : document.getElementById('mealPlanFields'),
    momoFields   : document.getElementById('momoFields'),
    momoNumber   : document.getElementById('momoNumber'),
    delivery     : document.getElementById('deliveryFields'),
    orderForm    : document.getElementById('orderForm'),
    feedbackForm : document.getElementById('feedbackForm'),
    feedbackResp : document.getElementById('feedbackResponse'),
    historyFilter: document.getElementById('historyFilter'),
    historyList  : document.getElementById('orderHistoryList'),
    orderModal   : document.getElementById('orderStatusModal'),
    orderContent : document.getElementById('orderStatusContent'),
    detailsModal : document.getElementById('orderDetailsModal'),
    detailsContent: document.getElementById('orderDetailsContent'),
    cancelBtn    : document.getElementById('cancelOrderBtn')
};

/* ==============================================================
   HELPERS
   ============================================================== */
const fmt = n => n.toFixed(2);
const show = el => el.classList.remove('hidden');
const hide = el => el.classList.add('hidden');

/* --------------------------------------------------------------
   RENDER MENU
   -------------------------------------------------------------- */
function renderMenu(items, filterCat = 'all', search = '') {
    const filtered = items.filter(it => {
        const catOk = filterCat === 'all' || it.cat === filterCat;
        const searchOk = it.name.toLowerCase().includes(search.toLowerCase());
        return catOk && searchOk;
    });

    els.menuList.innerHTML = filtered.length
        ? `<div class="menu-grid">${filtered.map(renderItem).join('')}</div>`
        : `<div class="empty-state">No items match your filter.</div>`;
}

/* one menu card */
function renderItem(item) {
    const inCart = cart[item.id];
    const qty = inCart ? inCart.qty : 1;
    const checked = inCart ? 'checked' : '';

    return `
    <div class="menu-item" data-id="${item.id}">
        <img src="${item.img}" alt="${item.name}">
        <div class="menu-item-content">
            <div class="menu-item-title">${item.name}</div>
            <div class="menu-item-description">${item.desc}</div>
            <div class="menu-item-price">¢${fmt(item.price)}</div>

            <label class="menu-item-label">
                <input type="checkbox" ${checked} data-id="${item.id}">
                <span class="add-to-order">${inCart ? 'Added' : 'Add to order'}</span>
            </label>

            <div class="quantity-control" style="display:${inCart?'flex':'none'};">
                <button type="button" class="qty-btn" data-id="${item.id}" data-dir="-">-</button>
                <input type="number" class="qty-input" value="${qty}" min="1" max="99" data-id="${item.id}">
                <button type="button" class="qty-btn" data-id="${item.id}" data-dir="+">+</button>
            </div>
        </div>
    </div>`;
}

/* --------------------------------------------------------------
   CART LOGIC
   -------------------------------------------------------------- */
function addToCart(itemId, price, name) {
    if (!cart[itemId]) cart[itemId] = {qty:1, price, name};
    updateTotal();
    rerenderItem(itemId);
}
function removeFromCart(itemId) {
    delete cart[itemId];
    updateTotal();
    rerenderItem(itemId);
}
function changeQty(itemId, delta) {
    if (!cart[itemId]) return;
    const newQty = cart[itemId].qty + delta;
    if (newQty < 1) { removeFromCart(itemId); return; }
    cart[itemId].qty = newQty;
    updateTotal();
    rerenderItem(itemId);
}
function updateTotal() {
    let total = 0;
    for (const id in cart) {
        total += cart[id].price * cart[id].qty;
    }
    els.totalSpan.textContent = fmt(total);
}

/* re-render only the changed card (keeps scroll position) */
function rerenderItem(id) {
    const card = document.querySelector(`.menu-item[data-id="${id}"]`);
    if (!card) return;
    const item = menus[currentCafeteria].find(i => i.id == id);
    card.outerHTML = renderItem(item);
    attachItemListeners(card);
}

/* --------------------------------------------------------------
   EVENT DELEGATION
   -------------------------------------------------------------- */
function attachItemListeners(root = document) {
    root.addEventListener('click', e => {
        const btn = e.target.closest('.qty-btn');
        if (btn) {
            const id = btn.dataset.id;
            const dir = btn.dataset.dir;
            changeQty(+id, dir === '+' ? 1 : -1);
            return;
        }
    });

    root.addEventListener('change', e => {
        if (e.target.type !== 'checkbox') return;
        const id = +e.target.dataset.id;
        const item = menus[currentCafeteria].find(i => i.id === id);
        if (e.target.checked) addToCart(id, item.price, item.name);
        else removeFromCart(id);
    });

    root.addEventListener('input', e => {
        if (!e.target.classList.contains('qty-input')) return;
        const id = +e.target.dataset.id;
        let val = parseInt(e.target.value) || 1;
        if (val < 1) val = 1;
        if (val > 99) val = 99;
        e.target.value = val;
        if (cart[id]) {
            cart[id].qty = val;
            updateTotal();
        }
    });
}

/* 
   CAFETERIA CHANGE
   */
els.cafeteriaSel.addEventListener('change', () => {
    currentCafeteria = els.cafeteriaSel.value;
    cart = {};                 
    updateTotal();

    if (!currentCafeteria) {
        els.menuList.innerHTML = '<div class="empty-state">Please select a restaurant.</div>';
        els.queueStatus.innerHTML = '<div class="empty-state">Select a cafeteria to see queue info.</div>';
        return;
    }

    const items = menus[currentCafeteria];
    renderMenu(items);
    attachItemListeners();

    // queue
    const q = queueData[currentCafeteria];
    const cls = q.count <= 5 ? 'green' : q.count < 12 ? 'orange' : 'red';
    els.queueStatus.innerHTML = `<div class="queue-indicator ${cls}">
        ${q.count} people – ${q.wait} min estimated
    </div>`;
});

/* 
   CATEGORY FILTER
   */
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.category;
        renderMenu(menus[currentCafeteria], cat, document.getElementById('menuSearch').value);
    });
});

/* 
   SEARCH
   */
document.getElementById('menuSearch').addEventListener('input', e => {
    const activeCat = document.querySelector('.category-btn.active').dataset.category;
    renderMenu(menus[currentCafeteria], activeCat, e.target.value);
});

/* 
   PAYMENT / ORDER TYPE
   */
els.paymentMethod.addEventListener('change', () => {
    const v = els.paymentMethod.value;
    els.mealPlan.classList.toggle('hidden', v !== 'mealplan');
    els.momoFields.classList.toggle('hidden', v !== 'momo');
    if (v === 'momo' && currentCafeteria) {
        els.momoNumber.textContent = momoNumbers[currentCafeteria];
    }
});
els.orderType.addEventListener('change', () => {
    els.delivery.classList.toggle('hidden', els.orderType.value !== 'delivery');
});

/* 
   ORDER SUBMISSION
   */
els.orderForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (Object.keys(cart).length === 0) {
        alert('Your cart is empty.');
        return;
    }

    const payload = {
        cafeteria: currentCafeteria,
        items: Object.values(cart).map(it => ({
            id: parseInt(Object.keys(cart).find(k => cart[k] === it)),
            name: it.name,
            price: it.price,
            quantity: it.qty
        })),
        orderType: els.orderType.value,
        paymentMethod: els.paymentMethod.value,
        total: parseFloat(els.totalSpan.textContent)
    };

    if (payload.paymentMethod === 'mealplan') {
        payload.studentId = document.getElementById('studentId').value.trim();
        payload.pin = document.getElementById('mealPlanPin').value;
    }
    if (payload.paymentMethod === 'momo') {
        payload.momoReference = document.getElementById('momoReference').value.trim();
    }
    if (payload.orderType === 'delivery') {
        payload.deliveryLocation = document.getElementById('deliveryLocation').value.trim();
        payload.deliveryInstructions = document.getElementById('deliveryInstructions').value.trim();
    }

    try {
        const res = await fetch('process_order.php', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(payload)
        });
        const data = await res.json();

        if (data.success) {
            showOrderStatus('Order received!', 'received');
            startOrderPolling(data.orderId);
            cart = {}; updateTotal(); renderMenu(menus[currentCafeteria]);
        } else {
            showOrderStatus(data.message || 'Failed', 'error');
        }
    } catch (err) {
        showOrderStatus('Network error', 'error');
    }
});

/* 
   ORDER STATUS MODAL + POLLING
   */
function showOrderStatus(msg, type) {
    els.orderContent.textContent = msg;
    els.orderContent.style.color = type === 'error' ? 'red' : 'inherit';
    show(els.orderModal);
    setTimeout(() => hide(els.orderModal), 4000);
}
function startOrderPolling(orderId) {
    if (orderInterval) clearInterval(orderInterval);
    orderInterval = setInterval(async () => {
        try {
            const r = await fetch(`get_order_status.php?id=${orderId}`);
            const st = await r.json();
            document.getElementById('stepReceived').classList.toggle('active', st === 'received');
            document.getElementById('stepProcessing').classList.toggle('active', st === 'processing');
            document.getElementById('stepReady').classList.toggle('active', st === 'ready');
            if (['ready','completed','cancelled'].includes(st)) clearInterval(orderInterval);
        } catch (_) {}
    }, 3000);
}

/* 
   ORDER HISTORY
   */
async function loadHistory(filter = 'all') {
    try {
        const r = await fetch(`get_order_history.php?filter=${filter}`);
        const orders = await r.json();
        els.historyList.innerHTML = orders.map(o => `
            <div class="order-card" onclick="showDetails(${o.id})">
                <div class="order-status status-${o.status.toLowerCase()}">${o.status}</div>
                <div class="order-info">
                    <div class="order-id">#${o.id}</div>
                    <div class="order-date">${new Date(o.created_at).toLocaleString()}</div>
                </div>
                <div class="order-total">¢${fmt(o.total_amount)}</div>
            </div>`).join('');
    } catch (e) { console.error(e); }
}
els.historyFilter.addEventListener('change', () => loadHistory(els.historyFilter.value));
document.addEventListener('DOMContentLoaded', () => loadHistory());

/* 
   ORDER DETAILS MODAL
   */
window.showDetails = async id => {
    try {
        const r = await fetch(`get_order_details.php?id=${id}`);
        const o = await r.json();
        els.detailsContent.innerHTML = `
            <p><strong>Cafeteria:</strong> ${o.cafeteria_name}</p>
            <p><strong>Type:</strong> ${o.order_type}</p>
            <p><strong>Payment:</strong> ${o.payment_method}</p>
            <ul>${o.items.map(i=>`<li>${i.quantity}× ${i.name} – ¢${fmt(i.price*i.quantity)}</li>`).join('')}</ul>
            <p><strong>Total:</strong> ¢${fmt(o.total_amount)}</p>
            ${o.delivery_location ? `<p><strong>Delivery:</strong> ${o.delivery_location}</p>` : ''}
        `;
        els.cancelBtn.style.display = ['received','processing'].includes(o.status.toLowerCase()) ? 'inline-block' : 'none';
        els.cancelBtn.onclick = () => cancelOrder(id);
        show(els.detailsModal);
    } catch (e) { console.error(e); }
};
async function cancelOrder(id) {
    if (!confirm('Cancel this order?')) return;
    const r = await fetch('cancel_order.php', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({orderId:id})});
    const res = await r.json();
    alert(res.success ? 'Cancelled' : res.message || 'Error');
    hide(els.detailsModal);
    loadHistory(els.historyFilter.value);
}

/* close modals */
document.querySelectorAll('.close-modal, .close-modal-btn').forEach(b => b.onclick = () => {
    hide(els.detailsModal); hide(els.orderModal);
});

/* 
   FEEDBACK
   */
els.feedbackForm.addEventListener('submit', e => {
    e.preventDefault();
    els.feedbackResp.textContent = 'Thank you for your feedback!';
    els.feedbackForm.reset();
    setTimeout(() => els.feedbackResp.textContent = '', 3000);
});
