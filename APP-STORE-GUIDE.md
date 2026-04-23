# Greg Patisserie – App Store Submission Guide

**App ID:** ca.gregpatisserie.app  
**App Name:** Greg Patisserie  
**Version:** 1.0.0

---

## What's Built

The app is a **Capacitor** native wrapper around the Greg Patisserie website.
It runs as a real native app on Android and iPhone — same content, full offline support (PWA), installable from the store.

| Store | Platform | Fee | Timeline |
|---|---|---|---|
| Google Play | Android | **$25 USD one-time** | 1–3 days review |
| Apple App Store | iOS | **$99 USD/year** | 1–7 days review |

---

## PART 1 — Build the Apps (Codemagic — FREE, no Mac needed)

Codemagic builds both apps in the cloud. Free tier: 500 min/month.

### Step 1.1 — Sign up for Codemagic
1. Go to **codemagic.io** → Sign up with GitHub (use hilairejr16)
2. Click **"Add application"** → Select `hilairejr16/greg-patisserie`
3. Choose **"Other"** as framework (we have `codemagic.yaml` already)
4. Click **"Finish: Add application"**

### Step 1.2 — Start Android Build
1. In Codemagic → click **"android-release"** workflow → **"Start new build"**
2. The first build generates a **debug APK** you can test immediately
3. For a signed release (for Play Store), continue to Part 2A

### Step 1.3 — Start iOS Build
1. Click **"ios-release"** workflow → **"Start new build"**
2. Requires Apple Developer account (Part 2B below)
3. Codemagic handles Xcode — no Mac needed

---

## PART 2A — Google Play Store (Android)

### Step 2A.1 — Create Google Play Developer Account
1. Go to **play.google.com/console** → Sign in with a Google account
2. Click **"Get started"** → Pay the **$25 USD one-time fee**
3. Fill in developer profile:
   - **Developer name:** Greg Patisserie
   - **Email:** gregpatisserie@gmail.com
   - **Phone:** (514) 884-8463

### Step 2A.2 — Create the App Listing
1. In Play Console → **"Create app"**
2. Fill in:
   - **App name:** Greg Patisserie
   - **Default language:** French (fr-CA)
   - **App or game:** App
   - **Free or paid:** Free
3. Click **"Create app"**

### Step 2A.3 — Complete the Store Listing
Go to **"Store listing"** and fill in:

**Short description (80 chars):**
```
Pâtisseries artisanales – Gâteaux, cupcakes, biscuits. Laval, QC.
```

**Full description (4000 chars):**
```
Greg Patisserie – Artisan bakery in 1597 Montée Monette, Laval, QC, H7M4B6, Canada.

Order custom cakes, cupcakes, and cookies online. We serve the Canadian and Haitian communities with authentic flavors and artisanal quality.

🎂 SERVICES:
• Custom Cakes – Birthday, wedding, celebration
• Cupcakes – Dozen packages, all flavors
• Cookies – Decorated and classic varieties
• Catering – Weddings, baby showers, birthdays, engagements

💳 PAYMENT:
• Interac e-Transfer
• Credit card
• PayPal
• Cash on pickup

🌍 LANGUAGES:
French · English · Haitian Creole · Spanish

📍 1597 Montée Monette, Laval, QC, H7M4B6, Canada
📞 (514) 884-8463
✉️ gregpatisserie@gmail.com
📸 Instagram: @gregpatisserie
```

**Category:** Food & Drink

**Screenshots needed (upload from your phone after testing):**
- Minimum 2 screenshots per device type (phone)
- Size: 1080×1920 px recommended

**App icon:**
- Use `images/icon-app.svg` → export as 512×512 PNG

**Feature graphic:** 1024×500 PNG (use logo-main.svg as base)

### Step 2A.4 — Upload the AAB (built by Codemagic)
1. Go to **"Production"** → **"Create new release"**
2. Upload the `.aab` file from Codemagic build artifacts
3. Add release notes:
   ```
   Version 1.0 – Greg Patisserie app launch!
   Order cakes, cupcakes, and cookies online.
   ```
4. Click **"Review release"** → **"Start rollout to Production"**

### Step 2A.5 — Wait for Review
- Google reviews in **1–3 days**
- You'll get an email at gregpatisserie@gmail.com

---

## PART 2B — Apple App Store (iOS)

### Step 2B.1 — Create Apple Developer Account
1. Go to **developer.apple.com/programs/**
2. Sign in with (or create) an Apple ID
3. Enroll as **Individual** → Pay **$99 USD/year**
4. Fill in:
   - **Legal name:** Gregory Olivier
   - **Address:** 1597 Montée Monette, Laval, QC, H7M4B6, Canada

### Step 2B.2 — Create App in App Store Connect
1. Go to **appstoreconnect.apple.com**
2. Click **"+"** → **"New App"**
3. Fill in:
   - **Platform:** iOS
   - **Name:** Greg Patisserie
   - **Primary language:** French
   - **Bundle ID:** ca.gregpatisserie.app
   - **SKU:** GREGPATISSERIE001
4. Click **"Create"**

### Step 2B.3 — App Store Listing

**Subtitle (30 chars):**
```
Artisan Bakery · Laval, QC
```

**Description (4000 chars):**
```
Greg Patisserie – Artisan bakery in 1597 Montée Monette, Laval, QC, H7M4B6, Canada.

Order custom cakes, cupcakes, and cookies online. We proudly serve the Canadian and Haitian communities with authentic flavors and artisanal quality.

🎂 SERVICES
• Custom Cakes – Birthday, wedding, celebration
• Cupcakes – Dozen packages, all flavors  
• Cookies – Decorated and classic varieties
• Catering – Weddings, baby showers, birthdays, engagements, corporate

💳 PAYMENT
• Interac e-Transfer to (514) 884-8463
• Credit card · PayPal · Cash on pickup

🌍 4 LANGUAGES
Français · English · Kreyòl ayisyen · Español

📍 1597 Montée Monette, Laval, QC, H7M4B6, Canada
📞 (514) 884-8463
✉️ gregpatisserie@gmail.com
```

**Keywords (100 chars):**
```
patisserie,cake,cupcake,cookies,Laval,Quebec,haitian,gâteau,biscuits,traiteur,bakery
```

**Support URL:** https://gregpatisserie.ca  
**Marketing URL:** https://gregpatisserie.ca  
**Privacy Policy URL:** https://gregpatisserie.ca/#contact

**Category:** Food & Drink  
**Secondary Category:** Lifestyle

**Age Rating:** 4+ (no objectionable content)

### Step 2B.4 — Screenshots
Apple requires screenshots for each device size:
- **iPhone 6.9"** (required): 1320×2868 px
- **iPhone 6.5"** (required): 1242×2688 px
- **iPad 13"** (if supporting iPad): 2064×2752 px

Take screenshots on a real device or iOS Simulator in Xcode.

### Step 2B.5 — Upload IPA via Codemagic
Codemagic submits directly to TestFlight automatically after a successful build (configured in codemagic.yaml).

From TestFlight → Add the build to your App Store submission.

### Step 2B.6 — Submit for Review
1. In App Store Connect → click **"Submit for Review"**
2. Answer the export compliance questions (No encryption → Yes)
3. Answer content rights questions
4. Click **"Submit"**
5. Apple reviews in **1–7 days**

---

## PART 3 — Codemagic Setup for Signing

### Android Keystore (one-time)
Generate a keystore to sign your Android app:

```bash
keytool -genkey -v -keystore greg-patisserie.keystore \
  -alias gregpatisserie \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -dname "CN=Gregory Olivier, OU=Greg Patisserie, O=Greg Patisserie, L=Laval, ST=QC, C=CA"
```

Upload `greg-patisserie.keystore` to Codemagic → Teams → Code signing identities.
**Keep this file safe forever** — losing it means you cannot update the app.

### iOS Certificates (via Codemagic automatic signing)
In Codemagic → your app → Environment variables, add:
- `APP_STORE_CONNECT_KEY_IDENTIFIER` — from App Store Connect API key
- `APP_STORE_CONNECT_ISSUER_ID` — from App Store Connect
- `APP_STORE_CONNECT_PRIVATE_KEY` — the .p8 file contents

Codemagic generates signing certificates automatically.

---

## PART 4 — After Launch

### Updates
Any time Claude makes changes to the website:
1. Files are pushed to GitHub automatically
2. Cloudflare Pages re-deploys the website instantly
3. For app updates: run `npm run sync` → Codemagic builds new version → submit update to stores

### App Store Optimization (ASO)
- Add your Instagram photos as app screenshots
- Ask happy customers to leave reviews
- Update the app description seasonally (holiday specials, etc.)

---

## Cost Summary

| Item | Cost |
|---|---|
| Google Play one-time fee | $25 USD |
| Apple Developer fee | $99 USD/year |
| Codemagic builds | FREE (500 min/month) |
| App updates | FREE |
| **Total Year 1** | **~$124 USD** |
| **Every year after** | **~$99 USD** |

---

## Quick Reference — Key Info

| Field | Value |
|---|---|
| App ID / Bundle | ca.gregpatisserie.app |
| App Name | Greg Patisserie |
| Owner | Gregory Olivier |
| Email | gregpatisserie@gmail.com |
| Phone | (514) 884-8463 |
| Website | gregpatisserie.ca |
| Instagram | @gregpatisserie |
| Country | Canada (QC) |
