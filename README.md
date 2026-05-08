# Handoff: Happy Spin Table Tennis Academy — Marketing Website

## Overview

This is the public marketing site for **Happy Spin Table Tennis Academy**, a coaching club at Mahoneys Reserve, Forest Hill (Melbourne, Australia). The site's primary job is to convert visitors into **trial-session bookings** via a multi-CTA, single-page layout. Secondary goals: explain programs, build trust (coaches, testimonials, child-safety credentials), and provide schedule + access info. The site is **bilingual (English / Simplified Chinese)** with a runtime language toggle, since a meaningful share of the audience is the local Mandarin-speaking community.

## About the Design Files

The files in `design/` are a **design reference**, not production code. They are an HTML prototype (single file, React 18 via Babel standalone, all CSS inline in a `<style>` block) that demonstrates the intended look, copy, layout, interactions, and bilingual content. **Recreate this design in a real codebase** using the framework / tooling appropriate for the project.

Recommended stack if none is in place yet:
- **Next.js (App Router) + TypeScript + Tailwind CSS**, deployed on Vercel or Cloudflare Pages. The site is a content-heavy marketing page with one form — Next.js gives you SSR for SEO (important for a local-business site), built-in image optimisation for the photos, and trivially handles the bilingual i18n via route segments (`/en`, `/zh`) or a context provider.
- Alternative: **Astro + Tailwind** if you want fully static output with islands of interactivity (modal, FAQ accordion, language toggle) and zero runtime JS for the bulk of the page.

Do **not** ship the prototype HTML directly. The Babel-in-browser setup is for design iteration only — it is slow, not SEO-friendly, and ships ~150KB of dev-mode React.

## Fidelity

**High-fidelity.** Colors, type, spacing, copy (both languages), and image crops are final. Recreate pixel-faithfully. The only things that are explicitly placeholder-grade:
- The **Tweaks panel** (bottom-right floating dev panel) — this is a design-tool affordance, **do not ship it**.
- The mid-section illustration `HappySpinEnglish.png` is a brand graphic the client provided; treat it as final.
- Coach bios use stock placeholder names ("Coach Lin", "Coach Wei", "Coach Jess") — confirm real names with the client before launch.
- Testimonials use plausible-sounding but unverified quotes — confirm with the client.

## Tech Notes from the Prototype

- The prototype is **one file**: `design/index.html` (~1,460 lines). It contains the full component tree, all CSS, and an `I18N` dictionary with both English and Simplified Chinese strings.
- `design/tweaks-panel.jsx` is the in-prototype tweak UI. **Skip it** when porting.
- `design/index-print.html` is not included — it was a paginated print variant only used during design review. Ignore.
- All imagery lives in `design/uploads/`. Filenames are preserved so you can grep the prototype to see exactly where each is used.

---

## Design Tokens

Defined as CSS custom properties on `:root` in the prototype. Port these to your token system (Tailwind config / CSS variables / theme file).

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--orange` | `#E8610A` | Primary brand / CTA / accent. ~85% of clickable affordances. |
| `--navy` | `#1B3A8C` | Headings, nav text, dark surfaces (mobile menu bg, footer). |
| `--blue` | `#4BA3D3` | Secondary accent (Chinese tagline, occasional icon). |
| `--white` | `#F8F7F4` | Page background — **off-white, not pure white**. |
| `--dark` | `#111827` | Body text. |
| `--muted` | `#6B7280` | Secondary / helper text, captions. |
| `--card-bg` | `#FFFFFF` | Card / modal / form surfaces (pure white, contrasts with `--white`). |
| `--section-alt` | `#F0F4FF` | Alternating section background (very pale blue-tinted). |

Hover state for primary button: `#c9520a` (≈10% darker orange). The hero has a soft circle decoration in `oklch(0.92 0.05 250)` (pale blue), and the hero badge uses `oklch(0.97 0.02 40)` bg + `oklch(0.85 0.05 40)` border (pale orange).

### Typography

| Family | Source | Weights | Used for |
|---|---|---|---|
| **Barlow Condensed** | Google Fonts | 400, 600, 700, 800, 900 | All headings (`h1`–`h4`), section labels, stat numbers, brand wordmark, mobile menu links. |
| **DM Sans** | Google Fonts | 300, 400, 500, 600 | Body, buttons, nav links, form fields. |

Display headings use Barlow Condensed at heavy weights (800–900) with tight letter-spacing for the "athletic" feel. Body uses DM Sans 400/500. Section labels are uppercase Barlow Condensed 600 with `letter-spacing: .08em`.

The `<html lang>` attribute is updated on language toggle (`en` ↔ `zh-Hans`) — preserve this for accessibility.

### Spacing & Radius

- Section vertical padding: `80px` desktop, `60px` tablet, `48px` mobile.
- Section horizontal padding: `5vw` (consistent across the site — defines the content gutter).
- Card border-radius: `16px` (photos, program cards, trust cards).
- Button border-radius: `50px` (fully pill-shaped — both primary and secondary).
- Modal border-radius: `20px`.
- Standard card shadow: `0 8px 32px rgba(27,58,140,.12)` (navy-tinted, not neutral grey — keep this).

### Breakpoints

Single breakpoint at **`768px`** for mobile. Below this:
- Hero collapses from 2-col to 1-col (image moves above content, or hides — see `design/index.html` `.hero` query).
- Nav links hide; hamburger appears.
- Mobile sticky-CTA bar appears at the bottom of the viewport.
- Stat strip wraps to 2×2 grid.

---

## Page Structure (in DOM order)

The whole page is a single scrolling route. Sections in order:

1. **Nav** (sticky, 68px tall, white w/ orange bottom border) — logo + brand wordmark, anchor links (`#about`, `#programs`, `#schedule`, `#access`, `#faq`), language toggle (EN / 中文 pill), "Book Trial" CTA. Hamburger on mobile.
2. **Mobile Menu** (full-screen overlay, navy background, slides in from right).
3. **Hero** — 2-col grid. Left: orange uppercase eyebrow, 4-line H1 (line 3 wrapped in `.orange` accent), sub-paragraph, two CTAs (`Book Trial Session` / `View Programs`), 3 trust pills with ✓ ● ★ icons, optional Chinese tagline. Right: `HappySpinEnglish.png` brand graphic. Decorative oklch circle behind.
4. **Marquee** — horizontal auto-scrolling strip of program names separated by ◆ glyphs. Pure CSS animation, infinite loop, duplicated content for seamless scroll.
5. **Stat Strip** — 4 numbers on `--section-alt` background. Stats 1 and 3 use the orange accent on the number; 2 and 4 are navy. Each has a label below.
6. **Trust Bar** — 4 cards: emoji icon (🏓 ⭐ 👥 🏆), title, 1-line description. Equal-width grid, drops to 2×2 on mobile.
7. **About** (`#about`) — 2-col. Left: section label, 3-line title (last line orange), body paragraph, bullet list, `aboutCta` button. Right: 2 stacked, click-to-zoom photos of the hall (`Tables 1.jpg`, `Tables 2.jpg`).
8. **Coaches** — horizontal row of coach cards (avatar circle, name, title, 1-line bio). Currently 3 placeholder coaches.
9. **Testimonials** — quote cards in a 3-up grid. Count is tweakable (1–6) in the prototype; ship with **3** by default.
10. **Programs** (`#programs`) — 3 program cards. Each: badge ("Beginner" / "Improver" / "Competition"), title, price/duration, 5 feature bullets, `Book Trial` button. Middle card is visually highlighted (slight scale + stronger shadow) as the "popular" pick.
11. **How It Works** — 4 numbered steps with icons (Book → Visit → Trial → Enrol).
12. **Schedule** (`#schedule`) — weekly grid table (days × time-slots showing program). Mobile: scroll horizontally or stack as cards. Note row below table with phone link `tel:0433883078` and a button that opens the booking modal.
13. **Access & Parking** (`#access`) — text directions + 2 photos: building exterior (`PXL_20260502_035944189.jpg`) and satellite/site map (`Circles-df647e68.png`). Both photos clickable → open in lightbox. Each photo has a navy caption strip below it.
14. **Mid CTA** — full-bleed orange band, white text, white-pill button. Single line of pressure-text + CTA.
15. **FAQ** (`#faq`) — accordion list. Single-open behavior (clicking one closes others). Plus icon rotates 45° on open.
16. **Final CTA** — centered. Section label, title, contact lines (`tel:` + `mailto:` links), large `Book Trial Session` button.
17. **Footer** — 4-col on desktop: brand block (logo + name + 2-line tagline + address), Programs links, Visit links, Policies (PDF links to Code of Conduct + Child Safety Policy), legal/social. Bottom strip with copyright.
18. **Booking Modal** (overlay) — described below.
19. **Mobile Sticky CTA** — 100% width orange button fixed to bottom, only `< 768px`.
20. **Lightbox** — fullscreen image viewer for the 4 clickable photos. Click backdrop or ✕ to close.

---

## Interactions & Behavior

### Booking Modal (the conversion goal)
Triggered by **every** primary CTA on the page (nav, hero, about, each program card, schedule note, mid CTA, final CTA, mobile menu, mobile sticky CTA, footer). Always opens in `formStep === 'form'`.

**Form fields** (all required unless noted):
- `bookingFor` — radio: `myself` | `child` (default `myself`). When `child`, reveal `childName` and `age` fields.
- `name` — text
- `phone` — tel
- `email` — email
- `program` — select (Beginner / Improver / Competition / "Not sure yet")
- `level` — select (Never played / Beginner / Intermediate / Advanced)
- `message` — textarea, optional

**On submit**: prevent default, swap to `formStep === 'success'` view (🎉 + confirmation copy + "we'll call you within 24 hours" + Done button). The prototype does **not** wire up a backend — implement this against the client's preferred form handler (Formspree, Resend + a small API route, or direct email-to-inbox).

Closing: ✕ button OR clicking the dim backdrop (not the modal itself).

### Language Toggle
Two pill buttons (`EN` / `中文`) in the nav. Switches the `lang` state, which is the key into the `I18N` object. **Every** user-visible string on the page is keyed (`t.heroTitle1`, `t.bookTrial`, etc.) — there is no hard-coded English. When porting:
- Use the framework's i18n primitive (Next.js i18n routing, `next-intl`, `react-i18next`, etc.).
- Extract both EN and ZH strings from the `I18N` object in `design/index.html` (search for `const I18N = {`). Both are complete.
- Update `<html lang>` on toggle.
- Persist the choice in `localStorage` so returning visitors land in their preferred language.

### FAQ Accordion
Single-open: clicking an open item closes it. Clicking a closed item opens it and closes whichever was open.

### Lightbox
Opens for the 4 photos (`Tables 1.jpg`, `Tables 2.jpg`, `PXL_20260502_035944189.jpg`, `Circles-df647e68.png`). Backdrop is rgba black, image centered, max 90vw × 90vh. ✕ in top-right. Esc to close (add this — prototype only does click-to-close).

### Smooth Scroll
`html { scroll-behavior: smooth; }`. Anchor links in nav scroll to sections with this. Keep.

### Marquee
Pure CSS — `@keyframes` translating `-50%` over `~30s linear infinite`. Content is duplicated inside the track so the wrap is invisible. `prefers-reduced-motion` should pause it (add this — prototype currently doesn't).

### Mobile Sticky CTA
`display: none` on desktop, `display: block` `< 768px`. Fixed bottom, full width, white background, 12px padding, single orange button.

### Hover States
- Primary button: `bg #c9520a`, `transform: scale(1.03)`.
- Photos (clickable): `transform: scale(1.03)` on hover, smooth 0.3s.
- Nav links: color shift navy → orange.
- Cards: subtle shadow lift (already implicit; matches prototype).

### Animations
Marquee aside, the prototype has no scroll-triggered animations. **Keep it that way** — stutter on a slow phone is worse than no animation. If anything, a single fade-in on hero load is the ceiling.

---

## State Management

Everything is local component state in the prototype. Map to your framework's idioms.

- `language` — `'en' | 'zh'`. Persist to `localStorage`. Drives all copy + `<html lang>`.
- `menuOpen` — boolean. Mobile menu visibility.
- `modalOpen` — boolean. Booking modal visibility.
- `formStep` — `'form' | 'success'`. Resets to `'form'` every time the modal opens.
- `formData` — `{ name, phone, email, program, message, bookingFor, childName, age, level }`.
- `faqOpen` — `number | null`. Index of the currently open FAQ.
- `lightboxSrc` — `string | null`. Image src to display in lightbox; null = closed.

Do **not** put these in a global store. They are local to the page and modal.

---

## Content / Copy Source

The full bilingual copy is in `design/index.html`. Search for `const I18N = {`. Structure:

```js
const I18N = {
  en: { heroTitle1: "...", heroTitle2: "...", /* ~200 keys */ },
  zh: { heroTitle1: "...", /* same keys, translated */ }
}
```

Every visible string — including microcopy like "Book Trial", success-message body, FAQ questions/answers, footer headings, schedule note, accessibility ✕ labels — is keyed. **Do not paraphrase** when porting; the Chinese translations are localized for the Melbourne Mandarin-speaking community and the English copy is the client's voice.

---

## Assets (in `design/uploads/`)

| File | Used in | Notes |
|---|---|---|
| `ac5d8fb6-c076-4cec-bb12-7cf3b813a2c9.png` | Nav logo, footer logo | Rename to `logo.png` when porting. Square, transparent bg. |
| `HappySpinEnglish.png` | Hero right column | Brand graphic — illustrative, not photographic. |
| `Tables 1.jpg` / `Tables 2.jpg` | About section, lightbox | Photos of the playing hall. |
| `PXL_20260502_035944189.jpg` | Access & Parking, lightbox | Building exterior — captioned "The venue at Mahoneys Reserve". |
| `Circles-df647e68.png` | Access & Parking, lightbox | Annotated satellite view showing parking + entry. |
| `HappySpinCodeOfConduct.pdf` | Footer link | Open in new tab. |
| `HappySpinChildSafetyPolicy.pdf` | Footer link | Open in new tab. |

When porting to Next.js, run all four photos through `next/image` with appropriate `sizes` — the hall photos render at ~50vw on desktop and 100vw on mobile.

Logo **does not** have an SVG version provided. If you can get one from the client, use it for the nav (the PNG is fine for the footer at small size). Otherwise, the PNG with `next/image priority` works.

There is **no favicon** in the prototype. Generate one from the logo before launch (32×32, 180×180 apple-touch, 512×512 maskable).

---

## SEO / Meta (the prototype does not include these — add before launch)

- `<title>`: "Happy Spin Table Tennis Academy | Forest Hill Melbourne — Coaching for All Ages" (already set in prototype, refine for length).
- `<meta name="description">`: 150–160 chars, mention "Forest Hill", "table tennis coaching", "trial session".
- Open Graph tags: title, description, `og:image` (use `HappySpinEnglish.png` or a custom 1200×630 OG card), `og:locale` (`en_AU` / `zh_CN`).
- LocalBusiness schema (JSON-LD): name, address (Mahoneys Reserve, Forest Hill VIC), telephone (`0433883078`), email (`happyspintt@gmail.com`), URL, opening hours from the schedule, image. This is high-leverage for a local-search site.
- `hreflang` alternates between EN and ZH versions if you implement language as separate routes.
- `sitemap.xml` and `robots.txt`.

---

## Files in This Bundle

```
design_handoff_happy_spin_website/
├── README.md                                  ← this file
└── design/
    ├── index.html                             ← the full prototype (single file, 1458 lines)
    ├── tweaks-panel.jsx                       ← skip when porting (design-tool only)
    └── uploads/
        ├── ac5d8fb6-c076-4cec-bb12-7cf3b813a2c9.png   logo
        ├── HappySpinEnglish.png                       hero graphic
        ├── Tables 1.jpg                               hall photo
        ├── Tables 2.jpg                               hall photo
        ├── PXL_20260502_035944189.jpg                 building photo
        ├── Circles-df647e68.png                       site/satellite photo
        ├── HappySpinCodeOfConduct.pdf
        └── HappySpinChildSafetyPolicy.pdf
```

To preview the prototype locally (matches what the designer saw):

```bash
cd design/
python3 -m http.server 8000     # or: npx serve .
# open http://localhost:8000
```

You need a local server, not `file://`, because the prototype loads `tweaks-panel.jsx` and image assets via relative URLs.

---

## Implementation Checklist

- [ ] Stand up framework (Next.js + TS + Tailwind recommended).
- [ ] Port design tokens (colors, fonts, radii, shadows) to `tailwind.config` or CSS variables.
- [ ] Add Google Fonts (Barlow Condensed + DM Sans) via `next/font`.
- [ ] Set up i18n (EN / ZH-Hans). Lift the full `I18N` dictionary from `design/index.html`.
- [ ] Optimize and import the 6 image assets via `next/image`.
- [ ] Build sections in order — they are mostly independent, build-and-ship each.
- [ ] Wire booking modal to a real form handler (Formspree / Resend / mailto fallback). Add basic spam protection (honeypot + rate-limit).
- [ ] Add `lang` switch + `localStorage` persistence + `<html lang>` updates.
- [ ] FAQ accordion (single-open).
- [ ] Lightbox with Esc-to-close + focus trap.
- [ ] Mobile menu + mobile sticky-CTA.
- [ ] Add SEO meta + OG tags + LocalBusiness JSON-LD + sitemap + favicon.
- [ ] `prefers-reduced-motion` pauses marquee.
- [ ] Lighthouse pass (target ≥ 95 on Performance, Accessibility, SEO, Best Practices for a marketing site).
- [ ] Test on a real Android phone — the audience is mostly mobile.

---

## Questions to Take Back to the Client

1. Real coach names / bios / headshots (placeholders currently).
2. Real, attributed testimonials (placeholders currently).
3. Confirmed program prices and durations.
4. Up-to-date weekly schedule.
5. Form-submission destination — email inbox? Booking system (Calendly / Acuity)? CRM?
6. Phone and email confirmed (`0433883078`, `happyspintt@gmail.com`).
7. SVG version of the logo if available.
8. Custom 1200×630 OG image, or OK to use the brand graphic.
9. Domain registered? DNS / hosting plan?
