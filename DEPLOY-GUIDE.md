# Greg Patisserie – Deployment & Setup Guide

**Owner:** Gregory Olivier  
**Business:** Greg Patisserie, Laval, QC, Canada  
**Instagram/Twitter/Facebook:** @gregory1824

---

## What Was Built

| Deliverable | File | Status |
|---|---|---|
| Main Website (4 languages) | `index.html` | ✅ Ready |
| Styles | `css/styles.css` | ✅ Ready |
| Multilingual (FR/EN/HT/ES) | `js/i18n.js` | ✅ Ready |
| Online Ordering + Cart | `js/main.js` | ✅ Ready |
| PWA Manifest (Mobile App) | `manifest.json` | ✅ Ready |
| Service Worker (Offline) | `sw.js` | ✅ Ready |
| Logo (Website) | `images/logo-main.svg` | ✅ Ready |
| Logo (Social Media Square) | `images/logo-social.svg` | ✅ Ready |
| Advertising Flyer + QR Code | `flyer/promo-flyer.html` | ✅ Ready |
| Netlify Config | `netlify.toml` | ✅ Ready |

---

## Step 1 – Deploy Website FREE (Netlify)

1. Go to **netlify.com** → Sign up free
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop the **entire project folder** onto the Netlify deploy area
4. Your site goes live instantly at: `https://[random-name].netlify.app`
5. In Site Settings → **Change site name** → set to `gregpatisserie`
   - Result: `https://gregpatisserie.netlify.app` **(FREE)**

### Optional Custom Domain (gregpatisserie.ca)
- Register domain at **namecheap.com** (~$12/yr for .ca)
- In Netlify → Domain Management → Add custom domain
- Point your domain's DNS to Netlify (they guide you step by step)
- SSL/HTTPS is automatic and FREE

---

## Step 2 – Set Up Forms (Free)

Netlify Forms is already wired up in the HTML. Forms work automatically when deployed to Netlify:
- **Order form** → You receive email on every new order
- **Newsletter signup** → Subscribers collected in Netlify dashboard
- **Contact form** → Messages go to your email

To set notification email:
- Netlify Dashboard → Forms → Settings → Email notifications

---

## Step 3 – Connect Payment (Free to Set Up)

### Interac e-Transfer (Canada – Recommended)
- No setup needed
- Update `js/main.js` line with your actual Interac email
- Customers see instructions after selecting Interac at checkout

### PayPal (Free)
1. Create a **PayPal Business** account at paypal.com
2. Get your **PayPal.Me link**: `paypal.me/GregPatisserie`
3. Update the payment instructions in `js/main.js`

### Stripe (Credit/Debit Cards)
1. Create free account at **stripe.com**
2. Get your publishable key
3. Add Stripe.js to index.html and implement payment form
- Fee: 2.9% + 30¢ per transaction (no monthly fee)
- Note: Stripe supports Canadian businesses natively

### Cash on Pickup
- Already configured – no setup needed

---

## Step 4 – Mobile App (PWA – FREE)

The website is already a **Progressive Web App (PWA)**. Customers can install it like a native app:

**Android:**
- Open website in Chrome
- Tap the "Install" banner at the bottom OR tap menu → "Add to Home Screen"
- App icon appears on home screen ✅

**iPhone/iPad:**
- Open website in Safari
- Tap Share → "Add to Home Screen"
- App icon appears on home screen ✅

### True Native App (Optional – has costs)
- **Google Play Store**: One-time $25 registration fee
- **Apple App Store**: $99/year developer fee
- Framework: Capacitor.js (wraps the website into a native app – free)
- Contact Gregory's developer when ready to publish

---

## Step 5 – Email Marketing (Free)

### Mailchimp (Free up to 500 contacts)
1. Create account at **mailchimp.com**
2. Create an "Audience" for Greg Patisserie
3. Export subscriber emails from Netlify dashboard → Import to Mailchimp
4. Create email campaigns with promo offers

### WhatsApp Business (Free)
1. Download **WhatsApp Business** app
2. Set up business profile for Greg Patisserie
3. Use **Broadcast Lists** to send promos to up to 256 contacts at once
4. Create a WhatsApp link: `https://wa.me/15141234567` (already in the website)

### Facebook/Instagram
- Connect Facebook Business Suite (free)
- Schedule posts from Meta Business Suite
- Use Instagram @gregory1824 to share new creations

---

## Step 6 – Social Media Setup

Update these in `index.html` before deploying:

```
Facebook:  https://www.facebook.com/gregory1824
Instagram: https://www.instagram.com/gregory1824
Twitter:   https://www.twitter.com/gregory1824
WhatsApp:  https://wa.me/1[YOUR ACTUAL PHONE NUMBER]
```

**Note on Venmo:** Venmo is US-only and does not operate in Canada.  
**Interac e-Transfer** is the recommended Canadian equivalent.

---

## Step 7 – Print the Flyer

1. Open `flyer/promo-flyer.html` in Chrome
2. Click **"Print Flyer"** button (top right)
3. In print dialog: Paper = Letter (8.5×11"), margins = Minimum, Background graphics = ON
4. Save as PDF or print directly

The QR code links to `gregpatisserie.ca` (update the URL in the flyer if your final domain is different).

---

## Logo Files

| File | Use For | Size |
|---|---|---|
| `images/logo-main.svg` | Website header, email signature | Horizontal |
| `images/logo-social.svg` | Instagram profile, Facebook, Twitter | 1:1 square |

SVG files scale perfectly to any size. For social media:
- **Instagram profile pic**: 320×320px
- **Facebook cover**: 820×312px (use logo-main.svg)
- **Twitter header**: 1500×500px

---

## Monthly Cost Summary

| Service | Cost |
|---|---|
| Netlify hosting | **FREE** |
| Custom domain (.ca) | ~$12/year (optional) |
| SSL certificate | **FREE** (Netlify) |
| Forms (Netlify) | **FREE** (100 submissions/month) |
| Email marketing (Mailchimp) | **FREE** (500 contacts) |
| WhatsApp Business | **FREE** |
| PayPal payments | **FREE** setup, ~2.9% per transaction |
| Stripe credit cards | **FREE** setup, ~2.9% + $0.30 per transaction |
| PWA (Android/iOS) | **FREE** |
| **TOTAL MONTHLY** | **$0 – $1/month** |

---

## Contact / Support

This website was fully built and will be maintained by **Claude (Anthropic)** as your developer.  
For updates, new pages, or features — bring your requests and Claude will implement them.

**Gregory Olivier** – Owner  
Greg Patisserie, Laval, QC, Canada 🇨🇦
