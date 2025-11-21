/*
1. Loads menu and shows items
2. Lets users add items to cart
3. Calculates total price
4. Sends order to server (PHP)
5. Checks order status automatically
6. Shows order history + feedback */




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
        {id:35, name:'Pasta Bolognese', price:25, cat:'lunch', img:'assets/pasta.jpeg', desc:'Spaghetti with meat sauce'},
        {id:36, name:'Club Sandwich', price:18, cat:'breakfast', img:'assets/club_sandwich.jpeg', desc:'Triple-decker sandwich'},
        {id:37, name:'breakfast Pack', price:15, cat:'breakfast', img:'assets/B_Pack.jpeg', desc:'Eggs, bread, sausage'},
        {id:38, name:'Fruit Salad', price:12, cat:'snack', img:'assets/fruit_salad.jpeg', desc:'Fresh fruits'},
        {id:39, name:'Pineaple juice', price:15, cat:'drinks', img:'assets/pineapple.jpeg', desc:'Natural pineaple jusice'},
        {id:40, name:'Black Coffee', price:10, cat:'breakfast', img:'assets/b_coffee.jpeg', desc:'Black Coffee'},
        {id:41, name:'Chicken Sandwich', price:38, cat:'breakfast', img:'assets/ChickenSandwich.jpeg', desc:'Eggs, bread, Chicken'},
        {id:42, name:'Slice Bread', price:6, cat:'breakfast', img:'assets/slice_bread.jpeg', desc:'Slice Bread'},
        {id:43, name:'Fufu', price:38, cat:'lunch', img:'assets/fufu.jpeg', desc:'Fufu with soup'},
        {id:44, name:'Fried Yam', price:20, cat:'lunch', img:'assets/fried_yam.jpeg', desc:'Fried Yam'},
        {id:45, name:'French Fries', price:5, cat:'lunch', img:'assets/frenchF.jpeg', desc:'Crispy French Fries'},
        {id:46, name:'Fried Rice', price:30, cat:'lunch', img:'assets/friedR.jpeg', desc:'Fried Rice'},
        {id:47, name:'Boiled Plantain', price:15, cat:'singles', img:'assets/boiled_plantain.jpeg', desc:'Boiled Plantain'},
        {id:48, name:'Fried Yam', price:20, cat:'dinner', img:'assets/fried_yam.jpeg', desc:'Fried Yam'},
        {id:49, name:'French Fries', price:5, cat:'dinner', img:'assets/frenchF.jpeg', desc:'Crispy French Fries'},
        {id:50, name:'Apple juice', price:15, cat:'drinks', img:'assets/apple.jpeg', desc:'Fresh Apple Juice'},
        {id:51, name:'Pasteque juice', price:15, cat:'drinks', img:'assets/pasteque.jpeg', desc:'Fresh Pasteque Juice'},
        {id:52, name:'Mango juice', price:15, cat:'drinks', img:'assets/Mango.jpeg', desc:'Fresh Mango Juice'},
        {id:53, name:'Pack', price:5, cat:'packs', img:'assets/pack.jpeg', desc:'Pack'},
        {id:54, name:'Paper Bag', price:3, cat:'packs', img:'assets/paper.jpeg', desc:'Paper Bag'},
        {id:55, name:'Chicken Sandwich', price:38, cat:'breakfast', img:'assets/ChickenSandwich.jpeg', desc:'Eggs, bread, Chicken'},
   



    ],
    munchies: [
        {id:56, name:'Burger', price:30, cat:'singles', img:'assets/burger1.jpeg', desc:'Beef burger'},
        {id:57, name:'Waakye', price:22, cat:'lunch', img:'assets/waakye2.jpeg', desc:'Waakye'},
        {id:58, name:'French Fries', price:15, cat:'snack', img:'assets/fries.jpg', desc:'Crispy fries'},
        {id:59, name:'Potato Salad', price:25, cat:'lunch', img:'assets/potato.jpeg', desc:'Buffalo wings'},
        {id:60, name:'Milkshake', price:18, cat:'drinks', img:'assets/milkshake.jpeg', desc:'Vanilla'},
        {id:61, name:'Ice Tea', price:12, cat:'drinks', img:'assets/ice_tea.jpeg', desc:'Lemon iced tea'},
        {id:62, name:'Fried Yam', price:20, cat:'lunch', img:'assets/fried_yam.jpeg', desc:'Fried Yam'},
        {id:63, name:'French Fries', price:5, cat:'lunch', img:'assets/frenchF.jpeg', desc:'Crispy French Fries'},
        {id:64, name:'Pack', price:6, cat:'packs', img:'assets/pack.jpeg', desc:'Pack'},
        {id:65, name:'Paper Bag', price:3, cat:'packs', img:'assets/paper.jpeg', desc:'Paper Bag'},
   

    ]
};

const momoNumbers = { akorno:'0551234567', hallmark:'0241234567', munchies:'0501234567' };

/* 
   STATE
    */
let currentCafeteria = '';
let cart = {};                     // { itemId: {qty, price, name} }
let orderInterval = null;

/* 
   DOM REFERENCES
    */
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

/* --- HELPERS --- */
const fmt = n => n.toFixed(2);
const show = el => el.classList.remove('hidden');
const hide = el => el.classList.add('hidden');

/* --- RENDER MENU --- */
function renderMenu(items, filterCat='all', search='') {
    const filtered = items.filter(it => {
        const catOk = filterCat === 'all' || it.cat === filterCat;
        const searchOk = it.name.toLowerCase().includes(search.toLowerCase());
        return catOk && searchOk;
    });

    els.menuList.innerHTML = filtered.length
        ? `<div class="menu-grid">${filtered.map(renderItem).join('')}</div>`
        : `<div class="empty-state">No items match your filter.</div>`;

    attachItemListeners();
}

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

/* --- CART LOGIC --- */
function addToCart(id, price, name) {
    if (!cart[id]) cart[id] = {qty:1, price, name};
    updateTotal();
    renderMenu(menus[currentCafeteria]);
}
function removeFromCart(id) {
    delete cart[id];
    updateTotal();
    renderMenu(menus[currentCafeteria]);
}
function changeQty(id, delta) {
    if (!cart[id]) return;
    const newQty = cart[id].qty + delta;
    if (newQty < 1) { removeFromCart(id); return; }
    cart[id].qty = newQty;
    updateTotal();
    renderMenu(menus[currentCafeteria]);
}

function updateTotal() {
    let total = 0;
    for (const id in cart) total += cart[id].price * cart[id].qty;
    els.totalSpan.textContent = fmt(total);
}

/* --- ITEM LISTENERS --- */
function attachItemListeners() {
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.onclick = () => {
            const id = +btn.dataset.id;
            const delta = btn.dataset.dir === '+' ? 1 : -1;
            changeQty(id, delta);
        };
    });
    document.querySelectorAll('.qty-input').forEach(input => {
        input.oninput = () => {
            const id = +input.dataset.id;
            let val = parseInt(input.value) || 1;
            if (val < 1) val = 1; if (val > 99) val = 99;
            input.value = val;
            if (cart[id]) { cart[id].qty = val; updateTotal(); }
        };
    });
    document.querySelectorAll('.menu-item input[type="checkbox"]').forEach(cb => {
        cb.onchange = () => {
            const id = +cb.dataset.id;
            const item = menus[currentCafeteria].find(i=>i.id===id);
            if (cb.checked) addToCart(id, item.price, item.name);
            else removeFromCart(id);
        };
    });
}

/* --- CAFETERIA SELECT --- */
els.cafeteriaSel.onchange = () => {
    currentCafeteria = els.cafeteriaSel.value;
    cart = {};
    updateTotal();
    if (!currentCafeteria) {
        els.menuList.innerHTML = '<div class="empty-state">Please select a cafeteria.</div>';
        return;
    }
    renderMenu(menus[currentCafeteria]);
};

/* --- PAYMENT METHOD --- */
els.paymentMethod.onchange = () => {
    const v = els.paymentMethod.value;
    els.mealPlan.classList.toggle('hidden', v!=='mealplan');
    els.momoFields.classList.toggle('hidden', v!=='momo');
    if (v==='momo' && currentCafeteria) els.momoNumber.textContent = momoNumbers[currentCafeteria];
};

/* --- ORDER TYPE --- */
els.orderType.onchange = () => {
    els.delivery.classList.toggle('hidden', els.orderType.value!=='delivery');
};



/* --- PLACE ORDER --- */

els.orderForm.onsubmit = async (e) => {
    e.preventDefault();


    if (Object.keys(cart).length === 0) { 
        alert('Cart is empty'); return; 
    }

    const payload = {
        cafeteria: currentCafeteria,
        items: Object.keys(cart).map(id=>({
            id: +id,
            name: cart[id].name,
            price: cart[id].price,
            quantity: cart[id].qty
        })),
        orderType: els.orderType.value,
        paymentMethod: els.paymentMethod.value,
        total: parseFloat(els.totalSpan.textContent)
    };
    if (payload.paymentMethod==='mealplan') {
        payload.studentId = document.getElementById('studentId').value.trim();
        payload.pin = document.getElementById('mealPlanPin').value.trim();
    }
    if (payload.paymentMethod==='momo') {
        payload.momoReference = document.getElementById('momoReference').value.trim();
    }
    if (payload.orderType==='delivery') {
        payload.deliveryLocation = document.getElementById('deliveryLocation').value.trim();
        payload.deliveryInstructions = document.getElementById('deliveryInstructions').value.trim();
    }

    //Debug add on 11/20/2025
    console.log('Sending order payload:', payload);

    try {
        const res = await fetch('process_order.php', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(payload)
        });
        const data = await res.json();
        console.log('Received response:', data); // Debug log
        if (data.success) {
            showOrderStatus('Order received! Order ID: ' + data.orderId, 'success');
            cart = {}; 
            updateTotal(); 
            renderMenu(menus[currentCafeteria]);
        } else {
            showOrderStatus(data.message||'Failed', 'error');
        }
    } catch(err) { 
        console.log('Error submitting order:', err); // Debug log
        showOrderStatus('Network error', 'error');
     }
};

/* --- ORDER STATUS MODAL --- */
function showOrderStatus(msg, type) {
    els.orderContent.textContent = msg;
    els.orderContent.style.color = type==='error'?'red':'green';
    show(els.orderModal);
    setTimeout(()=>hide(els.orderModal),4000);
}

/* --- CATEGORY FILTER --- */
document.querySelectorAll('.category-btn').forEach(btn=>{
    btn.onclick = ()=>{
        document.querySelectorAll('.category-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.category;
        renderMenu(menus[currentCafeteria], cat, document.getElementById('menuSearch').value);
    };
});

/* --- SEARCH --- */
document.getElementById('menuSearch').oninput = (e)=>{
    const activeCat = document.querySelector('.category-btn.active').dataset.category;
    renderMenu(menus[currentCafeteria], activeCat, e.target.value);
};