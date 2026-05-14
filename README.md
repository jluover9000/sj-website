# SJ All-Pro Construction Website

Bilingual (English / 中文) construction company website for **SJ All-Pro Construction Ltd.**, built with Next.js, Tailwind CSS, and Sanity CMS.

**Live site:** `https://sj-website.vercel.app`  
**Admin studio:** `https://sj-allpro.sanity.studio`

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| CMS | Sanity.io v3 |
| i18n | next-intl (EN / ZH) |
| Deployment | Vercel |

---

## Architecture

```mermaid
graph TD
    User["👤 Visitor"] -->|HTTP request| Vercel["Vercel Edge Network"]
    Vercel --> NextJS["Next.js App Router"]
    NextJS -->|locale detection| Middleware["proxy.ts\n(next-intl middleware)"]
    Middleware -->|redirect /→/en or /zh| LocalePage["app/[locale]/page.tsx"]
    LocalePage --> Components["React Components"]
    Components -->|GROQ query| SanityClient["Sanity Client\n(next-sanity)"]
    SanityClient -->|CDN fetch| SanityCDN["Sanity CDN\n(lgul3rtu.api.sanity.io)"]
    SanityCDN --> SanityDataset["Dataset: production"]

    Admin["👤 Admin"] -->|login| Studio["Sanity Studio\nsj-allpro.sanity.studio"]
    Studio -->|write| SanityDataset
    SanityDataset -->|webhook| Vercel
    Vercel -->|ISR rebuild| NextJS
```

---

## Page Layout

```mermaid
graph TD
    Root["app/layout.tsx\n(root shell)"]
    Root --> Locale["app/[locale]/layout.tsx\nNextIntlClientProvider"]
    Locale --> Navbar["Navbar.tsx\nLogo · Nav links · Phone CTA · EN/中文 toggle"]
    Locale --> Main["app/[locale]/page.tsx"]
    Locale --> Footer["Footer.tsx\nContact info · Social icons"]

    Main --> Hero["Hero.tsx\nBackground image · Headline · CTA button"]
    Main --> Services["ServicesGrid.tsx\n5 service cards with icons"]
    Main --> CTA["CtaBanner.tsx\nYour Vision. Our Expertise."]
    Main --> Why["WhyChooseUs.tsx\nBullet points · 2×2 photo grid"]
```

---

## Sanity CMS Schema

```mermaid
erDiagram
    HERO {
        string headlineEn
        string headlineZh
        text subheadlineEn
        text subheadlineZh
        image backgroundImage
        string ctaLabelEn
        string ctaLabelZh
    }
    SERVICE {
        string titleEn
        string titleZh
        text descriptionEn
        text descriptionZh
        image icon
        number order
    }
    PROJECT {
        string titleEn
        string titleZh
        string category
        image image
        number order
    }
    SITE_SETTINGS {
        string phone
        string email
        string address
        url socialFacebook
        url socialInstagram
        url socialLinkedin
    }
```

---

## Bilingual Data Flow

```mermaid
sequenceDiagram
    participant Browser
    participant Middleware as proxy.ts
    participant NextJS as Next.js
    participant Sanity

    Browser->>Middleware: GET /
    Middleware->>Browser: 302 redirect to /en (or /zh)
    Browser->>NextJS: GET /en
    NextJS->>Sanity: GROQ fetch (hero, services, projects)
    Sanity-->>NextJS: JSON with En + Zh fields
    NextJS->>NextJS: select locale fields (e.g. titleEn vs titleZh)
    NextJS-->>Browser: Rendered HTML in correct language
    Browser->>Browser: EN | 中文 toggle → navigate to /zh
```

---

## Local Development

```bash
# Install dependencies
npm install

# Add environment variables
cp .env.local.example .env.local
# Fill in NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_READ_TOKEN

# Start dev server
npm run dev
# → http://localhost:3000
```

### Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID (`lgul3rtu`) |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset (default: `production`) |
| `SANITY_API_READ_TOKEN` | Sanity read-only API token |

---

## Project Structure

```
sj-website/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx       # Locale layout with NextIntlClientProvider
│   │   └── page.tsx         # Home page
│   ├── layout.tsx           # Root shell
│   └── globals.css          # Tailwind + brand color tokens
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ServicesGrid.tsx
│   ├── CtaBanner.tsx
│   ├── WhyChooseUs.tsx
│   └── Footer.tsx
├── sanity/
│   ├── schemas/             # hero, service, project, siteSettings
│   └── lib/                 # client.ts, image.ts
├── messages/
│   ├── en.json              # English UI strings
│   └── zh.json              # Chinese UI strings
├── i18n/
│   ├── routing.ts           # Locale config
│   └── request.ts           # Per-request message loader
├── proxy.ts                 # next-intl locale middleware
├── sanity.config.ts         # Sanity Studio config (root)
└── sanity.cli.ts            # Sanity CLI config
```

---

## Deployment

### Vercel (production)
1. Connect GitHub repo at [vercel.com/new](https://vercel.com/new)
2. Add the three environment variables above
3. Deploy — every push to `main` triggers an automatic redeploy

### Sanity Studio
```bash
npx sanity@latest deploy
# → https://sj-allpro.sanity.studio
```
