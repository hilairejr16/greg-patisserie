# Greg Patisserie — Project Documentation
> Last updated: April 2026 | Maintained automatically by Claude

---

## 1. Project Overview

**Business:** Greg Patisserie — Artisan bakery, Laval, QC, Canada  
**Owner:** Gregory Olivier  
**Concept:** Complete zero-cost digital platform: website + PWA + Android/iOS apps  

### Contact Info
| Field | Value |
|-------|-------|
| Email | gregpatisserie@gmail.com |
| Phone | (514) 884-8463 |
| WhatsApp | https://wa.me/15148848463 |
| Address | 1597 Montée Monette, Laval, QC, H7M4B6, Canada |

### Social Media
| Platform | Handle / URL |
|----------|-------------|
| Instagram | @gregory1824 — https://www.instagram.com/gregory1824 |
| Facebook | @gregory1824 — https://www.facebook.com/gregory1824 |
| Twitter/X | @gregpatisserie — https://www.twitter.com/gregpatisserie |

---

## 2. Live URLs

| Environment | URL |
|-------------|-----|
| **Primary URL (custom domain)** | https://www.patisseriegregory.ca ✅ |
| **Fallback (Cloudflare Pages)** | https://greg-patisserie.pages.dev |
| **GitHub repo** | https://github.com/hilairejr16/greg-patisserie |
| **Branch** | `master` |
| **Auto-deploy** | Every `git push` to `master` triggers Cloudflare Pages build |

---

## 3. Hosting & Infrastructure

### Cloudflare Pages
- **Project name:** `greg-patisserie`
- **Build command:** `node scripts/build.js`
- **Output directory:** `www`
- **Root directory:** `/`
- **Connected repo:** `hilairejr16/greg-patisserie` (GitHub)
- **Account:** Hilaire16@gmail.com

### Domain
- **Registrar:** Cloudflare Registrar
- **Domain:** patisseriegregory.ca (www.patisseriegregory.ca)
- **DNS:** Managed by Cloudflare — auto-connected to Pages project
- **SSL:** Automatic via Cloudflare (free)

### GitHub
- **Account:** hilairejr16 (Hilaire16@gmail.com)
- **Repo:** https://github.com/hilairejr16/greg-patisserie
- **Branch:** master

---

## 4. Third-Party Services & Accounts

### Formspree (Form Backend)
- **Account:** gregpatisserie@gmail.com
- **URL:** https://formspree.io
- **Free tier:** 50 submissions/month per form
- **Forms configured:**

| Form | Purpose | ID | Formspree URL |
|------|---------|-----|--------------|
| Order | Customer orders → email to Gregory | `mojyglwr` | https://formspree.io/f/mojyglwr |
| Newsletter | Email subscriptions | `xnjlezzj` | https://formspree.io/f/xnjlezzj |
| Contact | General inquiries | `xaqarbbj` | https://formspree.io/f/xaqarbbj |
| Catering Quotes | Event quote requests | `mlgaqllw` | https://formspree.io/f/mlgaqllw |

- **Config location:** `js/main.js` const FORMSPREE block (lines ~10–15)
- **Status:** ✅ All 4 forms live and wired up

### EmailJS (Customer Receipt Emails)
- **Account:** gregpatisserie@gmail.com
- **URL:** https://emailjs.com
- **Free tier:** 200 emails/month
- **Service:** Gmail (gregpatisserie@gmail.com)
- **Config location:** `js/main.js` (`const EMAILJS_CONFIG`) + `index.html` `emailjs.init()`
- **Template variables:** to_name, to_email, order_ref, cart_items, cart_total, order_date, payment, notes, receipt
- **Status:** ⚠️ Needs Service ID, Template ID, Public Key from dashboard

### Twilio (SMS Notifications)
- **Account:** To be created at twilio.com
- **Free trial:** ~$15 USD credit
- **Worker:** `workers/sms-worker.js` (Cloudflare Worker)
- **Worker name:** `gp-sms-notify`
- **Worker URL:** `https://gp-sms-notify.hilaire16.workers.dev` (once deployed)
- **Required secrets:** TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER
- **Config location:** `js/main.js` `const TWILIO_WORKER_URL`
- **Status:** ⚠️ Pending — free account not yet created

### Codemagic (Mobile CI/CD)
- **URL:** https://codemagic.io
- **Purpose:** Cloud build for Android (.aab) and iOS (.ipa) without needing a Mac
- **Config file:** `codemagic.yaml`
- **Status:** ⚠️ Account not yet created

---

## 5. File Structure

```
Greg Patisserie/
├── index.html              ← Main single-page website (all sections)
├── privacy.html            ← Privacy policy (PIPEDA / Quebec Law 25)
├── manifest.json           ← PWA manifest
├── sw.js                   ← Service worker (PWA offline cache) — current: v2
├── capacitor.config.json   ← Capacitor mobile app config
├── package.json            ← Node dependencies + build scripts
├── codemagic.yaml          ← Cloud mobile CI/CD config
├── _headers                ← Cloudflare Pages cache headers
├── _redirects              ← Cloudflare Pages URL redirects
├── .gitignore
├── DOCS.md                 ← This file
│
├── css/
│   └── styles.css          ← Complete responsive stylesheet
│
├── js/
│   ├── main.js             ← Cart, products, forms, notifications
│   └── i18n.js             ← 4-language translation system
│
├── images/
│   ├── logo-main.svg       ← Horizontal dark logo (website header)
│   ├── logo-social.svg     ← Square logo (social media / PWA icon)
│   └── icon-app.svg        ← 1024×1024 app store icon
│
├── flyer/
│   └── promo-flyer.html    ← Printable 8.5×11 advertising flyer
│
├── scripts/
│   └── build.js            ← Copies source files → www/ for Capacitor
│
├── workers/
│   ├── sms-worker.js       ← Cloudflare Worker: Twilio SMS sender
│   └── wrangler.toml       ← Worker deployment config
│
├── www/                    ← Built output (gitignored, generated by build.js)
├── android/                ← Capacitor Android project
└── ios/                    ← Capacitor iOS project
```

---

## 6. Brand & Design

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Brown Dark | `#2C1810` | Navbar, footer, dark sections, app background |
| Brown Mid | `#8B4513` | Headings, accents |
| Gold | `#D4AF37` | Primary buttons, highlights, icons |
| Gold Light | `#F0D060` | Hover states |
| Cream | `#FFF8DC` | Light backgrounds, text on dark |
| Linen | `#FAF0E6` | Section backgrounds |

### Fonts
- **Headings:** Cormorant Garamond (Google Fonts) — weights 400, 600, 700
- **Body/UI:** Montserrat (Google Fonts) — weights 400, 500, 600, 700

### Icons
- Font Awesome 6.5 via CDN

---

## 7. How the Website Works

### Single-Page Architecture
All content lives in `index.html`. Navigation uses anchor links (`#hero`, `#menu`, `#order`, etc.). Smooth scrolling handled by JS.

### Multilingual System (`js/i18n.js`)
- Default language: **French (fr)**
- Supported: FR, EN, HT (Haitian Creole), ES (Spanish)
- Language stored in `localStorage` as `gp_lang`
- HTML elements use `data-i18n="key"` attribute
- `applyTranslations()` swaps all text on language change

### Product Catalog (`js/main.js`)
- 18 products hardcoded in the `products` array
- 6 Cakes, 6 Cupcakes, 6 Cookies
- Prices stored in products array (used in cart only — **hidden on cards**)
- Filter tabs: All / Cakes / Cupcakes / Cookies

### Shopping Cart
- State stored in `localStorage` as `gp_cart`
- Cart sidebar opens on bag icon click
- Add/remove/quantity change all update localStorage
- Cart summary injected into order form before submission

### Order Flow
1. Customer adds items to cart (or uses dropdown in order form)
2. Fills order form: name, email, phone, product, date, pickup/delivery, payment method
3. Clicks "Confirm Order"
4. System fires 4 notifications simultaneously:
   - **Formspree** → stores order + emails Gregory
   - **EmailJS** → sends receipt to customer's email
   - **WhatsApp** → auto-opens with order details pre-filled
   - **Twilio SMS** → texts receipt to customer's phone (when configured)
5. Success modal shows with order ref (GP-XXXXXXX), notification status, receipt preview

### Payment Methods (display-only, no live processing)
| Method | Instructions shown |
|--------|-------------------|
| Interac e-Transfer | Send to phone (514) 884-8463 |
| Credit Card | Stripe payment page after confirmation |
| Debit | In-person at pickup |
| PayPal | PayPal request sent to email |
| Cash | Pay at pickup |

### PWA (Progressive Web App)
- `manifest.json` enables "Add to Home Screen" on Android/iOS
- `sw.js` caches assets for offline use — **bump version (v2→v3 etc.) to force updates**
- Install prompt shown after 3 seconds via `beforeinstallprompt` event

---

## 8. Mobile Apps (Capacitor)

### Config
- **App ID:** `ca.gregpatisserie.app`
- **App Name:** Greg Patisserie
- **Web directory:** `www/` (built by `node scripts/build.js`)
- **Android scheme:** https

### Build Workflow
```bash
node scripts/build.js    # copy source → www/
npx cap sync             # sync www/ → android/ and ios/
npx cap open android     # open in Android Studio
npx cap open ios         # open in Xcode
```

### Cloud Build (Codemagic)
- Config: `codemagic.yaml`
- Android: builds `.aab` → Google Play internal track
- iOS: builds `.ipa` → TestFlight
- Notification email: gregpatisserie@gmail.com
- Status: ⚠️ Codemagic account not yet created

### Store Info
- **Google Play:** App ID `ca.gregpatisserie.app` | $25 one-time
- **Apple App Store:** Bundle ID `ca.gregpatisserie.app` | $99 USD/year

---

## 9. Deployment Workflow

### Standard Code Update
```bash
# Edit files in project root
node scripts/build.js    # rebuild www/
git add <files>
git commit -m "Description"
git push origin master   # → Cloudflare auto-deploys in ~30 sec
```

### Force Browser Cache Refresh
When changing CSS or JS, bump version params in `index.html`:
```html
<link rel="stylesheet" href="css/styles.css?v=3">
<script src="js/main.js?v=4">
```
Also bump `sw.js` CACHE_NAME: `greg-patisserie-v2` → `greg-patisserie-v3`

### Cloudflare Pages Build Settings
| Setting | Value |
|---------|-------|
| Build command | `node scripts/build.js` |
| Output directory | `www` |
| Root directory | `/` |
| Production branch | `master` |

---

## 10. Monthly Maintenance

A scheduled Claude task runs on the **1st of every month at 9:00 AM**:
- Task name: `greg-patisserie-monthly-maintenance`
- Location: `C:\Users\hilai\.claude\scheduled-tasks\greg-patisserie-monthly-maintenance\`
- Checks: site health, content, security, forms, PWA, SEO, mobile config, multilingual, git status
- Auto-fixes: copyright year, cache version mismatches, broken links
- Produces a full report with seasonal promo suggestions

---

## 11. Pending / To-Do

| Item | Status | Notes |
|------|--------|-------|
| Formspree form IDs | ✅ Done | mojyglwr / xnjlezzj / xaqarbbj / mlgaqllw |
| EmailJS setup | ⚠️ Pending | Need Service ID, Template ID, Public Key |
| Twilio SMS Worker | ⚠️ Pending | Free account + deploy worker + set TWILIO_WORKER_URL |
| Real gallery photos | ⚠️ Pending | Send to gregpatisserie@gmail.com or drop in images/gallery/ |
| Codemagic (mobile CI) | ⚠️ Pending | Sign up at codemagic.io |
| Android keystore | ⚠️ Pending | Generate with keytool before Play Store submission |
| PayPal.me link | ⚠️ Pending | Create paypal.me/gregpatisserie |
| patisseriegregory.ca DNS | ⚠️ Add custom domain in CF Pages dashboard | Workers & Pages → greg-patisserie → Custom Domains → Add www.patisseriegregory.ca |

---

## 12. Change Log

| Date | Change | Commit |
|------|--------|--------|
| Apr 2026 | Initial build: full website, PWA, multilingual, logos | — |
| Apr 2026 | Added Capacitor iOS + Android, Codemagic CI | — |
| Apr 2026 | Privacy policy, JSON-LD SEO, cookie consent | — |
| Apr 2026 | Cloudflare _headers + _redirects | 27b3985 |
| Apr 2026 | Replaced Netlify Forms with Formspree on all 3 forms | f8e79d9 |
| Apr 2026 | Bumped sw.js cache to v2 for force-refresh | 3905bca |
| Apr 2026 | Hidden product prices (CSS display:none), cache-bust ?v=2 | d327510 |
| Apr 2026 | Full notification system: EmailJS + WhatsApp + Twilio SMS | ed0329d |
| Apr 2026 | Cloudflare Worker for Twilio SMS (workers/sms-worker.js) | d27f435 |
| Apr 2026 | Domain purchased: patisseriegregory.ca via Cloudflare | — |
| Apr 2026 | Monthly maintenance scheduled task created | — |
