/* ============================================================
   Greg Patisserie – Main JavaScript
   ============================================================ */

/* ============================================================
   NOTIFICATION CONFIG
   Fill in each service after signing up (all free tiers available)
   ============================================================ */

/* --- Formspree (order storage + email to Gregory) ---
   Sign up: https://formspree.io
   Free: 50 submissions/month per form                    */
const FORMSPREE = {
  order:      'xyzorder1',    // ← replace with your Order form ID
  newsletter: 'xyznews1',     // ← replace with your Newsletter form ID
  contact:    'xyzcontact1',  // ← replace with your Contact form ID
  quote:      'xyzquote1',    // ← replace with your Catering Quote form ID
};

/* --- EmailJS (receipt email to customer) ---
   Sign up: https://emailjs.com
   Free: 200 emails/month
   1. Add Gmail service → note Service ID
   2. Create template with variables below → note Template ID
   3. Account → API Keys → note Public Key               */
const EMAILJS_CONFIG = {
  serviceId:  'service_xxxxxxx',   // ← your EmailJS Service ID
  templateId: 'template_xxxxxxx',  // ← your EmailJS Template ID
  publicKey:  'xxxxxxxxxxxx',      // ← your EmailJS Public Key
};

/* --- Twilio SMS (text message to customer) ---
   Sign up: https://twilio.com (free trial ~$15 credit ≈ 500 SMS)
   Deploy the worker: see NOTIFICATIONS-GUIDE.md
   Leave blank ('') to skip SMS                          */
const TWILIO_WORKER_URL = ''; // ← your Cloudflare Worker URL e.g. https://gp-notify.workers.dev

/* Gregory's WhatsApp number (do not change) */
const OWNER_WHATSAPP = '15148848463';

/* ---------- Products Data ---------- */
const products = [
  // Cakes
  { id: 1, category: 'cakes', emoji: '🎂', nameKey: 'Classic Birthday Cake', price: 45, desc: 'Vanilla sponge, buttercream, custom decoration', popular: true },
  { id: 2, category: 'cakes', emoji: '🎂', nameKey: 'Chocolate Dream Cake', price: 55, desc: 'Rich dark chocolate layers, ganache', popular: true },
  { id: 3, category: 'cakes', emoji: '🎂', nameKey: 'Caribbean Coconut Cake', price: 50, desc: 'Coconut cream, tropical fruits, Haitian inspired', popular: false },
  { id: 4, category: 'cakes', emoji: '🎂', nameKey: 'Red Velvet Cake', price: 52, desc: 'Classic red velvet with cream cheese frosting', popular: false },
  { id: 5, category: 'cakes', emoji: '🎂', nameKey: 'Wedding Tiered Cake', price: 150, desc: 'Custom multi-tier, personalized decoration', popular: false },
  { id: 6, category: 'cakes', emoji: '🎂', nameKey: 'Mango Passion Cake', price: 48, desc: 'Fresh mango mousse, passion fruit glaze', popular: true },

  // Cupcakes
  { id: 7,  category: 'cupcakes', emoji: '🧁', nameKey: 'Vanilla Cupcakes (dz)', price: 28, desc: 'Classic vanilla with swirled buttercream', popular: true },
  { id: 8,  category: 'cupcakes', emoji: '🧁', nameKey: 'Chocolate Cupcakes (dz)', price: 30, desc: 'Double chocolate with fudge filling', popular: true },
  { id: 9,  category: 'cupcakes', emoji: '🧁', nameKey: 'Strawberry Cupcakes (dz)', price: 30, desc: 'Fresh strawberry cake with cream frosting', popular: false },
  { id: 10, category: 'cupcakes', emoji: '🧁', nameKey: 'Lemon Cupcakes (dz)', price: 28, desc: 'Zesty lemon with cream cheese frosting', popular: false },
  { id: 11, category: 'cupcakes', emoji: '🧁', nameKey: 'Red Velvet Cupcakes (dz)', price: 32, desc: 'Classic red velvet, mini version', popular: false },
  { id: 12, category: 'cupcakes', emoji: '🧁', nameKey: 'Coconut Cupcakes (dz)', price: 30, desc: 'Caribbean coconut, Haitian inspired', popular: false },

  // Cookies
  { id: 13, category: 'cookies', emoji: '🍪', nameKey: 'Chocolate Chip Cookies (dz)', price: 18, desc: 'Crispy edge, chewy center, premium chips', popular: true },
  { id: 14, category: 'cookies', emoji: '🍪', nameKey: 'Sugar Cookies (dz)', price: 20, desc: 'Decorated sugar cookies for events', popular: false },
  { id: 15, category: 'cookies', emoji: '🍪', nameKey: 'Snickerdoodle Cookies (dz)', price: 18, desc: 'Cinnamon sugar classic', popular: false },
  { id: 16, category: 'cookies', emoji: '🍪', nameKey: 'Peanut Butter Cookies (dz)', price: 20, desc: 'Rich peanut butter, soft & chewy', popular: false },
  { id: 17, category: 'cookies', emoji: '🍪', nameKey: 'Shortbread Cookies (dz)', price: 22, desc: 'Buttery French-style shortbread', popular: false },
  { id: 18, category: 'cookies', emoji: '🍪', nameKey: 'Custom Decorated Cookies', price: 36, desc: 'Personalized designs for any event', popular: true },
];

/* ---------- Cart State ---------- */
let cart = JSON.parse(localStorage.getItem('gp_cart') || '[]');

function saveCart() {
  localStorage.setItem('gp_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.nameKey, price: product.price, emoji: product.emoji, qty: 1 });
  }
  saveCart();
  renderCart();
  showToast(`✓ ${product.nameKey} ${t('add_cart') || 'added to cart'}!`, 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else { saveCart(); renderCart(); }
}

function getCartTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function renderCart() {
  const itemsEl = document.querySelector('.cart-items');
  const totalEl = document.querySelector('.cart-total-amount');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--gray)">
      <div style="font-size:3rem">🛒</div>
      <p style="margin-top:1rem">Your cart is empty</p>
    </div>`;
  } else {
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-icon">${item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)} CAD</div>
        </div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span style="min-width:20px;text-align:center;font-weight:600">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, +1)">+</button>
        </div>
      </div>
    `).join('');
  }
  if (totalEl) totalEl.textContent = `$${getCartTotal().toFixed(2)} CAD`;
}

/* ---------- Product Grid ---------- */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img">${p.emoji}</div>
      <div class="product-info">
        <div class="product-category">${getCatLabel(p.category)}</div>
        <div class="product-name">${p.nameKey}${p.popular ? ' <span style="font-size:.65rem;background:var(--gold);color:var(--brown-dark);padding:2px 7px;border-radius:50px;vertical-align:middle;font-family:Montserrat,sans-serif;font-weight:700">★ POPULAR</span>' : ''}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <button class="add-to-cart" onclick="addToCart(${p.id})" title="${t('add_cart') || 'Add to cart'}" style="width:100%;border-radius:50px;padding:.55rem 1.2rem;font-size:.85rem">
            <i class="fas fa-shopping-bag" style="font-size:.8rem"></i> ${t('add_cart') || 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function getCatLabel(cat) {
  const map = { cakes: '🎂 Cakes', cupcakes: '🧁 Cupcakes', cookies: '🍪 Cookies' };
  return map[cat] || cat;
}

/* ---------- Filter Tabs ---------- */
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProducts(tab.dataset.filter);
    });
  });
}

/* ---------- Navigation ---------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Hamburger
  const ham = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  const mobileOverlay = document.querySelector('.nav-overlay');
  if (ham && mobileNav) {
    ham.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      mobileOverlay?.classList.toggle('open');
    });
    mobileOverlay?.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      mobileOverlay.classList.remove('open');
    });
  }

  // Active link based on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  });
}

/* ---------- Cart Sidebar ---------- */
function initCartSidebar() {
  const cartIcons = document.querySelectorAll('.cart-icon');
  const sidebar = document.querySelector('.cart-sidebar');
  const overlay = document.querySelector('.cart-overlay');
  const closeBtn = document.querySelector('.cart-close');

  function openCart() {
    sidebar?.classList.add('open');
    overlay?.classList.add('open');
    renderCart();
  }
  function closeCart() {
    sidebar?.classList.remove('open');
    overlay?.classList.remove('open');
  }

  cartIcons.forEach(icon => icon.addEventListener('click', openCart));
  closeBtn?.addEventListener('click', closeCart);
  overlay?.addEventListener('click', closeCart);
}

/* ---------- Order Form ---------- */
function initOrderForm() {
  const form = document.getElementById('order-form');
  if (!form) return;

  // Show/hide address field based on delivery selection
  const typeRadios = form.querySelectorAll('input[name="order_type"]');
  const addressGroup = form.querySelector('.address-group');
  typeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (addressGroup) {
        addressGroup.style.display = radio.value === 'delivery' ? 'block' : 'none';
      }
    });
  });

  // Payment selection
  form.querySelectorAll('.payment-option').forEach(opt => {
    opt.addEventListener('click', () => {
      form.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input').checked = true;
      showPaymentInstructions(opt.querySelector('input').value);
    });
  });

  // Submit → Full notification flow
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const origHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
    btn.disabled = true;

    // ── Collect order data ────────────────────────────────────
    const fd = new FormData(form);
    const order = {
      name:       fd.get('name')       || '',
      email:      fd.get('email')      || '',
      phone:      fd.get('phone')      || '',
      product:    fd.get('product')    || '',
      quantity:   fd.get('quantity')   || '1',
      date:       fd.get('date')       || '',
      order_type: fd.get('order_type') || 'pickup',
      address:    fd.get('address')    || 'N/A',
      payment:    fd.get('payment')    || '',
      notes:      fd.get('notes')      || 'None',
      ref:        'GP-' + Date.now().toString(36).toUpperCase(),
    };

    // Cart items
    const cartLines = cart.length > 0
      ? cart.map(i => `${i.emoji} ${i.name} x${i.qty} — $${(i.price * i.qty).toFixed(2)} CAD`).join('\n')
      : order.product + ' x' + order.quantity;
    const cartTotal = cart.length > 0
      ? `$${getCartTotal().toFixed(2)} CAD`
      : 'Pricing will be confirmed by Gregory';

    // Append to FormData for Formspree
    fd.set('order_ref',  order.ref);
    fd.set('cart_items', cartLines);
    fd.set('cart_total', cartTotal);

    // ── Receipt text (shared across all channels) ─────────────
    const receiptText =
`🎂 GREG PATISSERIE — Order Confirmation
━━━━━━━━━━━━━━━━━━━━━━━━━━
Order Ref: ${order.ref}
━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name:    ${order.name}
📧 Email:   ${order.email}
📱 Phone:   ${order.phone}
━━━━━━━━━━━━━━━━━━━━━━━━━━
🛒 Items:
${cartLines}

💰 Total:   ${cartTotal}
📅 Date:    ${order.date}
🚚 Type:    ${order.order_type === 'delivery' ? 'Delivery to: ' + order.address : 'Pickup at 1597 Montée Monette, Laval'}
💳 Payment: ${order.payment}
📝 Notes:   ${order.notes}
━━━━━━━━━━━━━━━━━━━━━━━━━━
Gregory will confirm your order within 24h.
📞 (514) 884-8463 | gregpatisserie@gmail.com
www.patisseriegregory.ca`;

    let formspreeOk = false;

    try {
      // ── 1. Formspree (stores order + emails Gregory) ──────────
      const fsRes = await fetch(`https://formspree.io/f/${FORMSPREE.order}`, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });
      formspreeOk = fsRes.ok;

      // ── 2. EmailJS (receipt email to customer) ────────────────
      if (typeof emailjs !== 'undefined' &&
          EMAILJS_CONFIG.serviceId !== 'service_xxxxxxx') {
        emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
          to_name:    order.name,
          to_email:   order.email,
          order_ref:  order.ref,
          order_date: order.date,
          order_type: order.order_type === 'delivery'
                        ? 'Delivery to ' + order.address
                        : 'Pickup at 1597 Montée Monette, Laval, QC',
          cart_items: cartLines,
          cart_total: cartTotal,
          payment:    order.payment,
          phone:      order.phone,
          notes:      order.notes,
          receipt:    receiptText,
        }, EMAILJS_CONFIG.publicKey).catch(() => {});
      }

      // ── 3. SMS via Cloudflare Worker → Twilio ─────────────────
      if (TWILIO_WORKER_URL && order.phone) {
        fetch(TWILIO_WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to: order.phone, body: receiptText }),
        }).catch(() => {});
      }

      // ── 4. WhatsApp (auto-open chat to Gregory with receipt) ──
      const waMsg = encodeURIComponent(
        `Bonjour Greg Patisserie! 👋\n\nI just placed an order:\n\n` + receiptText
      );
      // Show success + open WhatsApp after short delay
      if (formspreeOk) {
        showOrderSuccessModal(order, receiptText);
        setTimeout(() => {
          window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${waMsg}`, '_blank');
        }, 1500);
        form.reset();
        cart = [];
        saveCart();
        renderCart();
      } else {
        throw new Error('Formspree failed');
      }

    } catch {
      showToast('⚠ Could not send order. Please message us on WhatsApp directly.', 'error');
    } finally {
      btn.innerHTML = origHTML;
      btn.disabled = false;
    }
  });
}

function showPaymentInstructions(method) {
  const infoBox = document.getElementById('payment-info');
  if (!infoBox) return;

  const instructions = {
    interac: `<strong>Interac e-Transfer:</strong> Send payment to phone number <em>(514) 884-8463</em>. Include your name and order details in the message. We will confirm your order upon receipt.`,
    credit: `<strong>Credit Card:</strong> You will be redirected to our secure Stripe payment page after order confirmation.`,
    debit: `<strong>Debit / Chequing:</strong> In-person debit accepted at pickup, or e-Transfer to our account. Details sent by email.`,
    paypal: `<strong>PayPal:</strong> A PayPal payment request will be sent to your email. Complete payment to confirm your order.`,
    cash: `<strong>Cash on Pickup:</strong> Pay when you collect your order at our location in Laval, QC.`,
  };

  infoBox.innerHTML = instructions[method] || '';
  infoBox.style.display = instructions[method] ? 'block' : 'none';
}

/* ---------- Order Success Modal ---------- */
function showOrderSuccessModal(order, receiptText) {
  // Remove any existing modal
  document.getElementById('order-success-modal')?.remove();

  const modal = document.createElement('div');
  modal.id = 'order-success-modal';
  modal.style.cssText = `
    position:fixed;inset:0;z-index:9999;display:flex;align-items:center;
    justify-content:center;background:rgba(44,24,16,0.85);padding:1rem;
  `;
  modal.innerHTML = `
    <div style="background:#fff;border-radius:16px;max-width:520px;width:100%;
                box-shadow:0 20px 60px rgba(0,0,0,0.4);overflow:hidden;animation:fadeInUp .35s ease">
      <!-- Header -->
      <div style="background:var(--brown-dark,#2C1810);padding:2rem;text-align:center">
        <div style="font-size:3rem;margin-bottom:.5rem">🎂</div>
        <h2 style="color:#D4AF37;font-family:'Cormorant Garamond',serif;margin:0;font-size:1.8rem">
          Order Received!
        </h2>
        <p style="color:rgba(255,248,220,.75);font-size:.85rem;margin:.4rem 0 0;font-family:'Montserrat',sans-serif">
          Ref: <strong style="color:#D4AF37">${order.ref}</strong>
        </p>
      </div>

      <!-- Body -->
      <div style="padding:1.8rem">
        <p style="color:#5C3317;font-size:.95rem;margin-bottom:1.2rem;line-height:1.7">
          Hi <strong>${order.name}</strong>! Your order has been submitted. Gregory will confirm
          within <strong>24 hours</strong> by email and WhatsApp.
        </p>

        <!-- Notification status -->
        <div style="background:#fdf6ee;border:1px solid #e8d5b7;border-radius:10px;padding:1.2rem;margin-bottom:1.4rem">
          <p style="font-family:'Montserrat',sans-serif;font-size:.72rem;letter-spacing:.15em;
                     text-transform:uppercase;color:#8B6914;margin-bottom:.9rem;font-weight:600">
            Notifications Sent
          </p>
          <div style="display:flex;flex-direction:column;gap:.55rem">
            <div style="display:flex;align-items:center;gap:.6rem;font-size:.88rem;color:#5C3317">
              <span style="color:#4CAF50;font-size:1rem">✓</span>
              <span>📧 Order saved — Gregory notified by email</span>
            </div>
            <div style="display:flex;align-items:center;gap:.6rem;font-size:.88rem;color:#5C3317">
              <span style="color:#4CAF50;font-size:1rem">✓</span>
              <span>📨 Receipt sent to <strong>${order.email}</strong></span>
            </div>
            <div style="display:flex;align-items:center;gap:.6rem;font-size:.88rem;color:#5C3317">
              <span style="color:#25D366;font-size:1rem">✓</span>
              <span>💬 WhatsApp opening with your order details…</span>
            </div>
            ${order.phone ? `
            <div style="display:flex;align-items:center;gap:.6rem;font-size:.88rem;color:#5C3317">
              <span style="color:#4CAF50;font-size:1rem">✓</span>
              <span>📱 SMS receipt queued to ${order.phone}</span>
            </div>` : ''}
          </div>
        </div>

        <!-- Receipt preview -->
        <details style="margin-bottom:1.4rem">
          <summary style="cursor:pointer;font-family:'Montserrat',sans-serif;font-size:.78rem;
                          color:#8B6914;font-weight:600;letter-spacing:.08em">
            VIEW ORDER SUMMARY ▾
          </summary>
          <pre style="margin:.8rem 0 0;background:#fdf6ee;border-radius:8px;padding:1rem;
                      font-size:.75rem;color:#5C3317;white-space:pre-wrap;line-height:1.6;
                      font-family:'Courier New',monospace;overflow-x:auto">${receiptText}</pre>
        </details>

        <!-- Action buttons -->
        <div style="display:flex;gap:.75rem;flex-wrap:wrap">
          <a href="https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent('Bonjour! My order ref is ' + order.ref + '. Please confirm.')}"
             target="_blank" rel="noopener"
             style="flex:1;min-width:140px;display:flex;align-items:center;justify-content:center;
                    gap:.5rem;background:#25D366;color:#fff;border-radius:50px;padding:.75rem 1rem;
                    font-size:.82rem;font-weight:600;text-decoration:none;font-family:'Montserrat',sans-serif">
            <i class="fab fa-whatsapp"></i> Chat on WhatsApp
          </a>
          <button onclick="document.getElementById('order-success-modal').remove()"
                  style="flex:1;min-width:120px;background:var(--brown-dark,#2C1810);color:#D4AF37;
                         border:none;border-radius:50px;padding:.75rem 1rem;font-size:.82rem;
                         font-weight:600;cursor:pointer;font-family:'Montserrat',sans-serif">
            Close ✕
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

/* ---------- Catering Quote Modal ---------- */
const EVENT_ICONS = {
  'Birthday Party':           '🎂',
  'Wedding Reception':        '💍',
  'Baby Shower':              '👶',
  'Engagement / Fiançailles': '💒',
  'Corporate Event':          '🏢',
  'Custom Event':             '🎉',
  '':                         '🎉',
};

function openQuoteModal(eventType) {
  const modal     = document.getElementById('quote-modal');
  const iconEl    = document.getElementById('quote-event-icon');
  const labelEl   = document.getElementById('quote-event-label');
  const inputEl   = document.getElementById('quote-event-input');
  const selectWrap= document.getElementById('quote-event-select-wrap');
  const selectEl  = document.getElementById('quote-event-select');
  const dateEl    = document.getElementById('quote-date');

  // Set min date (2 days from today)
  if (dateEl) {
    const d = new Date(); d.setDate(d.getDate() + 2);
    dateEl.min = d.toISOString().split('T')[0];
  }

  if (eventType) {
    iconEl.textContent   = EVENT_ICONS[eventType] || '🎉';
    labelEl.textContent  = eventType;
    inputEl.value        = eventType;
    selectWrap.style.display = 'none';
  } else {
    // Opened from generic button — show select
    iconEl.textContent   = '🎉';
    labelEl.textContent  = 'Select below';
    inputEl.value        = '';
    selectWrap.style.display = 'block';
    if (selectEl) selectEl.value = '';
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeQuoteModal() {
  const modal = document.getElementById('quote-modal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

function updateQuoteEventFromSelect(val) {
  document.getElementById('quote-event-input').value = val;
  document.getElementById('quote-event-icon').textContent  = EVENT_ICONS[val] || '🎉';
  document.getElementById('quote-event-label').textContent = val || 'Select below';
}

function initQuoteForm() {
  const modal = document.getElementById('quote-modal');
  const form  = document.getElementById('quote-form');
  if (!form) return;

  // Close on backdrop click
  modal?.addEventListener('click', e => { if (e.target === modal) closeQuoteModal(); });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('quote-submit-btn');
    const origHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
    btn.disabled = true;

    const fd = new FormData(form);
    const name      = fd.get('name') || '';
    const email     = fd.get('email') || '';
    const phone     = fd.get('phone') || '';
    const eventType = fd.get('event_type') || fd.get('event_type_select') || 'Not specified';
    const eventDate = fd.get('event_date') || '';
    const guests    = fd.get('guests') || '';
    const budget    = fd.get('budget') || '';
    const message   = fd.get('message') || '';

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE.quote}`, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        // WhatsApp notification to Gregory
        const waMsg = encodeURIComponent(
          `📋 NEW CATERING QUOTE REQUEST\n\n` +
          `Event: ${eventType}\n` +
          `Date: ${eventDate}\n` +
          `Guests: ${guests}\n` +
          `Budget: ${budget}\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone}\n` +
          `Message: ${message}`
        );
        setTimeout(() => {
          window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${waMsg}`, '_blank');
        }, 800);

        closeQuoteModal();
        form.reset();
        showToast(`✓ Quote request sent! Gregory will contact you within 24h.`, 'success');
      } else {
        throw new Error();
      }
    } catch {
      showToast('⚠ Could not send quote. Please WhatsApp us directly.', 'error');
    } finally {
      btn.innerHTML = origHTML;
      btn.disabled = false;
    }
  });
}

/* ---------- Newsletter Form ---------- */
function initPromoForm() {
  const form = document.querySelector('.promo-form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const origText = btn.textContent;
    btn.textContent = '…';
    btn.disabled = true;

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE.newsletter}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        showToast('✓ Subscribed! Welcome to Greg Patisserie 🎂', 'success');
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      showToast('⚠ Subscription failed. Try again or email us directly.', 'error');
    } finally {
      btn.textContent = origText;
      btn.disabled = false;
    }
  });
}

/* ---------- Contact Form ---------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const origHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE.contact}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        showToast('✓ Message sent! Gregory will reply within 24h.', 'success');
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      showToast('⚠ Message not sent. Please try WhatsApp or email.', 'error');
    } finally {
      btn.innerHTML = origHTML;
      btn.disabled = false;
    }
  });
}

/* ---------- Toast ---------- */
function showToast(msg, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 400); }, 4000);
}

/* ---------- Smooth Scroll ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ---------- PWA Install Banner ---------- */
let deferredInstall;
function initPWA() {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredInstall = e;
    const banner = document.querySelector('.install-banner');
    if (banner) setTimeout(() => banner.classList.add('show'), 3000);
  });

  const installBtn = document.querySelector('.install-btn');
  const dismissBtn = document.querySelector('.install-dismiss');
  const banner = document.querySelector('.install-banner');

  installBtn?.addEventListener('click', () => {
    deferredInstall?.prompt();
    banner?.classList.remove('show');
  });
  dismissBtn?.addEventListener('click', () => banner?.classList.remove('show'));
}

/* ---------- Animations on scroll ---------- */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .catering-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCartSidebar();
  initFilterTabs();
  renderProducts();
  initOrderForm();
  initPromoForm();
  initContactForm();
  initQuoteForm();
  initSmoothScroll();
  initPWA();
  updateCartBadge();
  setTimeout(initScrollAnimations, 200);
});
