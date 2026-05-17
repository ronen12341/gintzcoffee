# קפה גינץ / Gintz Coffee — Project Reference

## Overview

A modern, RTL Hebrew B2B website for **קפה גינץ (Gintz Coffee)**, combining two existing businesses:
- **Coffee machines for businesses** (formerly gintz.co.il)
- **Branded paper cups** (formerly gilcups.com)

The site is fully static (no backend/database). Forms submit client-side and show a success state only.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.5 | App Router, SSR/SSG |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^3.4 | Styling |
| lucide-react | ^0.400 | Icons |
| clsx + tailwind-merge | latest | Class merging utility (`cn()`) |

---

## Brand

- **Phone:** 03-9600550
- **WhatsApp:** 972-3-9600550
- **Email:** info@gintzcoffee.co.il
- **Address:** רחוב הירקון 39, בני ברק, קומה 3

### Colors (`tailwind.config.ts`)

| Token | Hex | Use |
|-------|-----|-----|
| `brown` | `#3B1F0A` | Navbar, hero, footer |
| `brown-dark` | `#2A1506` | Deeper backgrounds |
| `brown-light` | `#5C3015` | Hover states |
| `gold` | `#C8922A` | Primary accent |
| `cream` | `#F5F0E8` | Page background |
| `cream-dark` | `#EDE5D5` | Alternate sections |

### Fonts (`next/font/google`)

| Class | Font | Use |
|-------|------|-----|
| `font-heebo` | Heebo | Hebrew body/headings (default) |
| `font-playfair` | Playfair Display | English display |
| `font-montserrat` | Montserrat | English labels/tracking |

---

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx          Root layout — dir="rtl", lang="he", fonts, Navbar, Footer, WhatsAppButton
│   ├── globals.css         Tailwind directives + base RTL styles
│   ├── page.tsx            Homepage (/)
│   ├── machines/page.tsx   Coffee machines (/machines)
│   ├── beans/page.tsx      Coffee beans (/beans)
│   ├── cups/page.tsx       Branded cups (/cups)
│   ├── bargains/page.tsx   Used machines (/bargains)
│   └── contact/page.tsx    Contact page (/contact)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      Sticky navbar — "use client" (mobile menu + usePathname active link)
│   │   └── Footer.tsx      Footer — server component
│   ├── ui/
│   │   ├── ImagePlaceholder.tsx   Gray placeholder with camera icon — server component
│   │   └── WhatsAppButton.tsx     Fixed bottom-left WhatsApp CTA — client component
│   ├── LeadForm.tsx        Lead capture form — "use client", validates name+phone
│   ├── CupsQuoteForm.tsx   Cups quote form with quantity selector — "use client"
│   └── ProductCard.tsx     Product card (image/placeholder, features, CTA link) — server component
│
├── data/
│   └── products.ts         All static product data
│
└── lib/
    └── utils.ts            cn() utility

public/
└── images/                 Product images go here (see Image Conventions)
```

---

## Pages

| Route | Key sections |
|-------|-------------|
| `/` | Hero, Services (3 cards), Why Us (4 points), Featured Products, Cups Highlight, Lead Form |
| `/machines` | Hero, Product grid (5 machines), Info strip, Lead Form |
| `/beans` | Hero, Bean cards with origin/roast badges, Process steps, Lead Form |
| `/cups` | Hero, Category grid (4), Process steps, CupsQuoteForm |
| `/bargains` | Hero, Used machines grid (3), Info strip, Lead Form |
| `/contact` | Contact cards (phone/WA/email/address/hours), Map placeholder, Lead Form |

---

## Key Components

### `<ImagePlaceholder>`
```tsx
<ImagePlaceholder label="הוסף תמונה" width={400} height={300} />
```
Gray `#D1D5DB` box, dashed border, camera icon. Aspect ratio via `paddingBottom`.

### `<LeadForm>`
```tsx
<LeadForm title="כותרת" className="" />
```
Fields: שם מלא*, טלפון*, אימייל, סוג עסק, הודעה. Client-side validation only.

### `<ProductCard>`
```tsx
<ProductCard
  name="שם"
  description="תיאור"
  priceRange="₪1,000–₪2,000"
  features={["feature"]}
  image="/images/product.jpg"  // optional, falls back to ImagePlaceholder
  badge="מציאון"               // optional
  ctaHref="#contact"
/>
```

---

## Image Conventions

Pre-existing images are in `/publicimages/` at the project root — **they must be moved to `/public/images/`** to be served by Next.js.

Known images:
```
publicimages/Melitta_Solo_Silver.png   → coffee machine
publicimages/X8.jpg                    → coffee machine (Jura X8)
publicimages/91361.jpg                 → product image
publicimages/91371.jpg                 → product image
publicimages/5782-Two-Coffees.png      → cups/coffee
publicimages/5788-Coffee-Beans (1).png → coffee beans
publicimages/5774-Coffee.png           → coffee
publicimages/clip_image002.JPG         → unknown
publicimages/clip_image004.JPG         → unknown
publicimages/clip_image0222.JPG        → unknown
```

After moving to `public/images/`, update the `image` field in `src/data/products.ts`:
```ts
{ id: "jura-e8", image: "/images/X8.jpg", ... }
```

---

## RTL Notes

- `dir="rtl"` on `<html>` governs the whole site.
- Phone numbers/emails always get `dir="ltr"` inline.
- Use `start`/`end` Tailwind utilities (`ps-`, `pe-`, `ms-`, `me-`) for directional spacing.

---

## Running Locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## TODO

- [ ] Move images from `/publicimages/` → `/public/images/`
- [ ] Map images to products in `src/data/products.ts`
- [ ] Wire forms to real backend (email, CRM, serverless)
- [ ] Embed real Google Maps iframe on `/contact`
- [ ] Add Open Graph metadata
- [ ] Add more used machines to `/bargains`
