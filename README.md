# Sitenano Web Project

> **Not:** Bu proje, modern Next.js (App Router), Tailwind CSS ve TypeScript ile, SEO uyumlu ve responsive olarak, Türkçe içeriklerle ve ajans kalitesinde bir tasarımla hazırlanmıştır. Tüm ana sayfa ve hizmet sayfaları, SEO meta verileri ve yapısal veri (JSON-LD) ile birlikte eksiksiz çalışır durumdadır. 
>
> **Yapıyı Korumak İçin:**
> - Projeyi bir git deposunda tutun ve düzenli commit atın (şu an ilk commit atıldı).
> - Büyük değişikliklerden önce yeni bir branch açın veya dosya yedeği alın.
> - README ve dokümantasyonu güncel tutun.
> - Gerekirse harici yedek alın.
>
> **Son Durum:**
> - Tüm sayfalar ve ana tasarım bozulmadan, SEO ve responsive kurallara uygun şekilde çalışıyor.
> - Ana sayfa, hizmetler, iletişim ve diğer sayfalar Türkçe ve modern tasarımla hazır.
> - Kodun tamamı commitlendi ve korunuyor.

---

## Structure (Yapı)

The website is composed of the following main pages:

- Anasayfa (Homepage)
- Hakkımızda (About)
- Hizmetler (Services)
- Web Tasarım (Web Design)
- E-ticaret (E-commerce)
- Yapay Zeka (AI Tools)
- Online Sipariş Sistemi (Online Ordering System)
- Projeler (Projects)
- İletişim (Contact)

Each page has its own `.json` design file placed under the `/design` directory. These files include layout, design rules, and SEO metadata.

Shared components such as `Header` and `Footer` must be defined only once (e.g., `Header.jsx`, `Footer.jsx`) and reused across all pages.

All pages must follow a consistent layout and design style. Components, layout grids, and style tokens should be modular and reused across the entire site.

---

## Navbar (Navigasyon Menüsü)

The global navigation bar should include the following links:

- Yapay Zeka
- Web Tasarım
- Online Sipariş Sistemi
- E-ticaret
- Hizmetler
- Projeler
- İletişim

Clicking the logo should always redirect to the homepage.

## Contact Functionality
 -The contact form should send messages to: info@sitenano.com
- The "Contact" page must be SEO-friendly and clearly present the contact form.





---
## SEO Guidelines

### General Rules

- Use semantic HTML elements: `<main>`, `<header>`, `<footer>`, `<section>`, `<article>`.
- Only one `<h1>` tag per page, reflecting the page’s main topic.
- Meta tags must include:
  - `<title>` (max ~60 characters)
  - `<meta name="description">` (max ~160 characters)
  - `<meta name="keywords">` (optional)
  - `<meta name="robots" content="index, follow">`
  - `<link rel="canonical">`
- All images must include descriptive `alt` attributes.
- Page URLs must be in Turkish and kebab-case (e.g., `/web-tasarim`, `/hakkimizda`).
- Language attribute must be declared:
  ```html
  <html lang="tr">


## AI-Generated SEO Context
When generating pages with Cursor AI:

Apply the `seo` field from each JSON file to populate the <head> with metadata. 
Ensure use of semantic HTML, a single H1, properly structured content, and SEO-optimized Turkish meta tags.

## Structured Data (Optional but Recommended)
Implement JSON-LD for:
Organization: company name, logo, homepage


BreadcrumbList: for navigation hierarchy


WebPage: with page title, description, language


All schema must pass validation in Google Rich Results test and schema.org


### Advanced SEO & Technical Best Practices
## Responsive Design
- The website must be fully responsive on mobile, tablet, and desktop.
- Use flexible layouts and relative units (em, %, vw, vh).
- Avoid fixed-width containers and absolute positioning.
- Set viewport properly:
<meta name="viewport" content="width=device-width, initial-scale=1.0">

## Language & Localization
- HTML lang="tr" must be defined.
- If hreflang is used:
- Ensure hreflang values are valid and match canonical URLs.
- All hreflang annotations must be reciprocal.
- Avoid linking to redirected or broken pages.
- Only one page per language.

- Use x-default when needed.
- Avoid mismatch between hreflang and HTML lang.



## HTML & Accessibility
Avoid deprecated elements or plugins (e.g., Flash, Java Applets).
Minimum font size should be 16px.
Ensure all tap targets (buttons, links) are large enough and spaced well.
Use ARIA labels and landmarks where applicable.

## Performance
Minify and compress HTML, CSS, and JS (use Gzip or Brotli).


Avoid oversized HTML files (>100KB).


Optimize images: resize, compress, lazy-load, use WebP format.


Pass Core Web Vitals (CWV):
- LCP: Largest Contentful Paint
-CLS: Cumulative Layout Shift
- INP: Interaction to Next Paint
- FID: First Input Delay

## JavaScript & CSS
-Avoid broken or redirected JS/CSS files.
-Ensure all assets are loaded over HTTPS.
-Avoid loading unused or unnecessary scripts.
-Keep CSS/JS file size under control (<500KB preferred).


## Sitemap & Robots
- The sitemap must:
- Be valid XML and under 50MB / 50,000 URLs.
- Not contain 3XX, 4XX, 5XX, noindex, or non-canonical pages.
- robots.txt file must:
-Be accessible without redirect loops.
- Allow crawl access to indexable pages.
- Be syntactically correct.



## Image Handling
- No broken or redirected images.
- All images must include descriptive alt text.
- Use optimized formats (e.g., WebP).
- Serve all images over HTTPS.
- Keep individual image file size below 300 KB where possible.




## Canonicalization
Every page must include a valid canonical URL:
 <link rel="canonical" href="https://sitenano.com/slug">

Avoid:
Duplicate pages
Redirect chains
URLs with double slashes
More than 3 query parameters in URLs




### Additional SEO Crawler Compatibility (Optional but Recommended)

These issues are commonly flagged by SEO crawlers (Ahrefs, Semrush, etc.) and should be considered for optimization:

- All pages must be **indexable** (no `noindex`, no `disallow` rules).
- Avoid **orphan pages**: every page should have at least one internal link pointing to it.
- Do not use **nofollow** on internal links unless required.
- Each page should have **at least one dofollow internal link** pointing to it.
- Avoid pages with **both nofollow and dofollow** internal links inconsistently.
- Avoid **3XX redirects**; always link directly to the final URL.
- Make sure HTTP versions redirect to HTTPS (but avoid chained redirects).
- Meta description must exist, be unique, and within 160 characters.
- Title should be unique and ~60 characters long.
- Only one `<h1>` tag per page.
- Image `alt` text must be present for all visual elements.
- All pages must have **at least one internal incoming link**.
- Track referring domains for link performance and authority.


## Google Search Engine Optimization Notes

To ensure compatibility with Google Search Engine and Search Console, follow these additional recommendations:

- Use a valid and accessible `robots.txt` file (do not block indexable pages).
- Provide a valid `sitemap.xml` file listing all public, indexable URLs.
- Use HTTPS site-wide and avoid mixed content issues.
- Ensure all pages load fast and meet [Core Web Vitals](https://web.dev/vitals/) standards.
- Add structured data (JSON-LD) for enhanced appearance in Google SERP.
- Use canonical URLs to avoid duplicate content problems.
- Implement `hreflang` attributes if targeting multiple languages.
- Ensure `<title>` and `<meta description>` tags are unique and descriptive.
- Avoid duplicate or low-quality content across pages.
- Set `<html lang="tr">` explicitly.


## AI-Powered Search Optimization (ChatGPT, Google SGE, Bing Copilot, Perplexity)
To ensure that your website content is optimized for modern AI-driven search systems such as OpenAI's ChatGPT, Google Search Generative Experience (SGE), Bing Copilot, and Perplexity, follow these enhanced SEO practices:

### 1. Content Structure & Readability
- Write clear, concise, and scannable content.
- Use meaningful, keyword-rich headings (`<h2>`, `<h3>`) to structure information logically.
- Break content into short paragraphs (3–5 lines).
- Begin each page with a brief summary or **TL;DR** section where relevant.
- Use bullet points, numbered lists, and tables to make data digestible.

### 2. Semantic Markup & Schema
- Use semantic HTML elements: `<article>`, `<section>`, `<header>`, `<footer>`, `<nav>`.
- Implement appropriate Schema.org structured data (e.g., `FAQ`, `Breadcrumb`, `WebPage`, `Organization`, `HowTo`).
- Validate schema using [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org validator](https://validator.schema.org/).

### 3. Named Entities & Contextual Cues
- Clearly state company name, services, location, and industry terms.
  - Example: “Sitenano is a web development company based in Istanbul.”
- Use consistent terminology across all pages.
- Internally link between related pages using **descriptive anchor text** (e.g., "explore our AI services", not "click here").

### 4. Trust Signals (E-E-A-T)
Follow Google's E-E-A-T principles (Experience, Expertise, Authoritativeness, Trustworthiness):
- Include clear contact information and company background.
- If possible, attribute content to a person or team with credentials.
- Show relevant experience and industry authority.
- Ensure all pages are crawlable, indexable, and public.

### 5. Technical Accessibility
- Ensure pages are mobile-first and responsive.
- Use a valid `<html lang="tr">` declaration.
- Avoid duplicate or low-quality content.
- Use HTTPS and avoid mixed content issues.
- Load pages quickly and pass Core Web Vitals (LCP, CLS, INP).

### 6. Crawlability for AI Systems
- Do not block AI crawlers in `robots.txt` or with meta tags.
- Avoid login walls or JavaScript-rendered content that hides key text.
- Make all public pages accessible with clean, canonical URLs.
- Ensure content can be parsed by LLMs — use plain, visible text (not image-based).

### 7. Benefits

By applying these strategies, your content:
- Is more likely to be **cited or linked** in AI-generated responses
- May appear in **zero-click summaries** or **source panels**
- Gains visibility in new AI-driven search models that prioritize clarity, trust, and structured data







