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
> - **Güncel Tasarım Sistemi:** Sora font ailesi hero bölümünde, Manrope font ailesi navbar ve features bölümünde kullanılıyor.
> - **Tipografi:** Hero başlığı 45px, letter-spacing: 0.5px, line-height: 1.4 ile optimize edildi.
> - **Features Section:** Tek satır başlık, optimize edilmiş spacing ve font sistemi.

---

## Design System (Tasarım Sistemi)

### Typography (Tipografi)

#### Font Families
- **Sora Font**: Hero bölümleri ve ana başlıklar için kullanılır
  - Font weight: 400 (normal)
  - Letter spacing: 0.5px
  - Line height: 1.4
  - Font size: 45px (hero başlığı)

- **Manrope Font**: Navigasyon menüsü ve features bölümü için kullanılır
  - Font weight: 500 (medium) - navbar
  - Font weight: 600 (semibold) - feature başlıkları
  - Font weight: 500 (medium) - feature alt metinleri
  - Letter spacing: normal
  - Line height: 28px (başlıklar), 30px (alt metinler)
  - Font size: 16px (navbar), 20px (feature başlıkları), 16px (feature alt metinleri)

#### Typography Hierarchy
- **H1 (Hero)**: Sora, 45px, weight 400, letter-spacing 0.5px, line-height 1.4
- **H2 (Features)**: Sora, 60px, weight 400, letter-spacing -3px, line-height 70px, tek satır
- **H3 (Feature Cards)**: Manrope, 20px, weight 600, line-height 28px
- **Feature Body Text**: Manrope, 16px, weight 500, line-height 30px, color rgb(51, 51, 51)
- **Navigation**: Manrope, 16px, weight 500
- **Body Text**: System font stack, 16px, weight 400

### Color Palette (Renk Paleti)
- **Primary**: #1EBBBC (Turkuaz)
- **Primary Dark**: #059669
- **Secondary**: #1F2937 (Dark gray)
- **White**: #FFFFFF
- **Gray Light**: #F3F4F6
- **Gray Dark**: #374151
- **Feature Text**: rgb(51, 51, 51) - alt metinler için
- **Feature Headings**: rgb(17, 17, 17) - başlıklar için

### Spacing System (Boşluk Sistemi)
- **Hero Section**: 700px fixed height, responsive padding
- **Features Section**: 740px fixed height, container-custom padding
- **Grid Gap**: gap-16 (64px) - features grid için
- **Icon Spacing**: mb-8 (32px) - icon ile başlık arası
- **Button Spacing**: px-8 py-4 (32px horizontal, 16px vertical)
- **Card Spacing**: p-8 (32px all around)
- **Section Spacing**: py-24 (96px vertical)

### Component Guidelines (Bileşen Kuralları)
- **Hero Section**: 4-line text layout, responsive width (100%, max-width 700px)
- **Features Section**: Tek satır başlık, 4 sütun grid, gap-16, container-custom
- **Feature Cards**: Icon (48px), başlık (Manrope 20px), alt metin (Manrope 16px, 280px genişlik)
- **Navigation**: Hover effects with color transitions, no background
- **Cards**: Gradient backgrounds, rounded-2xl corners

### Button Design Guidelines (Buton Tasarım Kuralları)

#### Gradient Border Buttons (Gradient Çerçeveli Butonlar)
**DOĞRU YÖNTEM (Çalışan):**
```css
background: 'linear-gradient(transparent, transparent) padding-box, linear-gradient(45deg, #00D4AA, #00B4D8, #0096C7) border-box',
border: '2px solid transparent',
borderRadius: '20px'
```

**YANLIŞ YÖNTEM (Çalışmayan):**
```css
borderImage: 'linear-gradient(45deg, #00D4AA, #00B4D8, #0096C7) 1',
border: '2px solid',
borderRadius: '20px' /* Bu çalışmaz! */
```

#### Buton Hover Efektleri
```javascript
onMouseEnter={(e) => {
  (e.target as HTMLDivElement).style.background = 'linear-gradient(45deg, #00D4AA, #00B4D8, #0096C7)';
  (e.target as HTMLDivElement).style.color = 'white';
}}
onMouseLeave={(e) => {
  (e.target as HTMLDivElement).style.background = 'linear-gradient(transparent, transparent) padding-box, linear-gradient(45deg, #00D4AA, #00B4D8, #0096C7) border-box';
  (e.target as HTMLDivElement).style.color = '#606060';
}}
```

#### Önemli Notlar:
- `borderImage` ile `borderRadius` uyumlu değildir
- Gradient border için `background` ile `padding-box` ve `border-box` kullanın
- `border: '2px solid transparent'` ile birlikte kullanın
- TypeScript'te event target'ı `HTMLDivElement` olarak cast edin

### Layout Specifications (Düzen Özellikleri)
- **Container**: max-w-7xl, mx-auto, px-4 sm:px-6 lg:px-8
- **Features Grid**: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16
- **Feature Text Width**: 280px (alt metinler için)
- **Feature Text Height**: 90px (alt metinler için)
- **Icon Size**: 48px (w-12 h-12)

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

The global navigation bar includes the following links:

- ANASAYFA (Homepage)
- HAKKIMIZDA (About)
- HİZMETLER (Services)
- PROJELER (Projects)

The navbar features:
- Black contact section with phone and email information
- Framed navbar with rounded corners
- "BİZE ULAŞIN" (Contact Us) button positioned on the right
- Unified structure across all pages including homepage

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
## Responsive Design (Mobil Responsive Ayarları)

### 📐 Breakpoint Temelli Görünürlük Kontrolleri

Breakpoints (kırılma noktaları) sayesinde belirli ekran boyutlarında elementleri gösterebilir veya gizleyebilirsiniz. Tailwind varsayılan olarak `sm`, `md`, `lg`, `xl`, `2xl` isimli 5 breakpoint tanımlar.

**Mobil Öncelikli Yaklaşım:**
- Unprefixed (önek almayan) sınıflar tüm cihazlara uygulanır
- Prefix'li sınıflar belirtilen boyut ve üzerinde geçerli olur

```html
<!-- Mobilde görünür (block), orta ve üzeri ekranlarda gizlenir (md:hidden) -->
<div class="block md:hidden">Mobil Menu Ikonu</div>

<!-- Mobilde gizli (hidden), orta ve üzeri ekranlarda görünür (md:block) -->
<div class="hidden md:block">Geniş Ekran Menü</div>
```

### 📦 Padding ve Margin Ayarları

Responsive tasarımda boşluk değerlerini ekran boyutuna göre ayarlamak önemlidir:

```html
<div class="p-4 md:p-8">
  <!-- İçerik: Padding küçük ekranda 1rem, md ve üzeri için 2rem olur -->
</div>

<div class="mt-2 md:mt-6">
  <!-- Margin: Küçük ekranda 0.5rem, md ve üzeri için 1.5rem -->
</div>

<!-- Yatay/Dikey ayarlar -->
<section class="px-2 md:px-6">
  <!-- Küçük ekranda yanlardan 0.5rem, md ve üstünde 1.5rem boşluk -->
</section>
```

### 📏 Öğeler Arası Boşluklar

**Grid veya Flex için:**
```html
<div class="grid grid-cols-2 gap-4">...</div>
```

**Aralarındaki boşluk (space-x / space-y):**
```html
<ul class="flex flex-col space-y-3">
  <li>Birinci madde</li>
  <li>İkinci madde</li>
  <li>Üçüncü madde</li>
</ul>
```

### ✍️ Tipografi (Başlık, Metin)

```html
<h1 class="text-2xl md:text-4xl font-bold">Başlık</h1>
<p class="text-base md:text-lg leading-relaxed">Alt metin</p>
```

**Önemli Sınıflar:**
- `text-*` → font size
- `leading-*` → line-height
- `font-bold`, `font-semibold` gibi ağırlıklarla birlikte kullanılabilir

### 📄 Metin Hizalama

```html
<p class="text-center md:text-left">Responsive hizalama</p>
```

### 🖼️ Görsel Boyutlandırma

```html
<img class="w-full aspect-video object-cover" src="..." />
```

**Önemli Sınıflar:**
- `w-full`: konteyneri kapla
- `aspect-video`: oran koru
- `object-cover`: taşmadan hizala

### 🧱 Flex / Grid Dönüşümleri

```html
<!-- Mobilde alt alta, masaüstünde yan yana -->
<div class="flex flex-col md:flex-row">...</div>

<!-- Grid sütun sayısı değişimi -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">...</div>
```

### 📦 Container & max-w

```html
<div class="container mx-auto px-4">...</div>
<div class="max-w-xl mx-auto">...</div>
```

### 🚫 Taşmayı Engelleme

```html
<div class="overflow-x-auto">...</div>
<p class="break-words">Uzun kelimeler kırılır</p>
```

### 👆 Touch Target (Tıklanabilir Alan)

```html
<button class="w-11 h-11">🔍</button>
```

**Önemli Kurallar:**
- Minimum 44px × 44px önerilir (`w-11`, `h-11` = 44px)
- Metinli butonlar için `py-3 px-4` yeterli olur

### 🛡️ ÖNEMLİ KURAL: Masaüstü Ayarları Asla Değiştirilmemeli

**Responsive düzenleme = sadece küçük ekranlara özel ekleme yapmak demektir.**

✅ **Doğru Yaklaşım:**
```html
<h1 class="text-4xl sm:text-2xl">Başlık</h1>
```
- `text-4xl` → Masaüstü için korunur
- `sm:text-2xl` → Küçük ekranlar için eklenir

❌ **Yanlış Yaklaşım:**
```html
<h1 class="text-2xl">Başlık</h1>
```
- Masaüstü ayarı yanlışlıkla değiştirilmiş olur

**🛡️ Kural Özeti:**
- 🔒 [KURAL] Masaüstü layout (padding, font-size, margin vb.) korunur
- ✅ Yapılacak: `sm:/md:/lg:` ile responsive sınıf EKLENİR
- 🚫 Yapılmayacak: Mevcut sınıflar silinerek düzen yapılmaz

### Responsive Düzenleme Notu

Sayfa, mobil uyumluluk için yeniden yapılandırıldı.  
Mobil ve masaüstü bileşenler aynı dosyada yer almakta ve görünürlükleri Tailwind sınıfları (`block md:hidden`, `hidden md:block`) ile yönetilmektedir.  
Bu yöntem sayesinde bileşenler DOM'da yer almaya devam eder, SEO dostudur ve performans kaybı yaşanmaz.

Üst yapısal elementlere dokunulmamış, düzenlemeler sadece component düzeyinde yapılmıştır.

### Viewport Ayarları

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Responsive Tasarım Rehberi

Mobil öncelikli yaklaşımla farklı ekran boyutlarına uyum sağlayan (responsive) arayüzler oluşturmak için yukarıdaki CSS yapı taşlarını kullanabilirsiniz. Her bölümde, ilgili Tailwind CSS yardımcı sınıfları ve örnek kullanımlar sade bir dille açıklanmıştır.

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

---

## 📁 Proje Yapısı

```
sitenano-web-platform/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global stiller
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Ana sayfa
│   ├── hakkimizda/              # Hakkımızda sayfası
│   ├── hizmetler/               # Hizmetler sayfası
│   ├── projeler/                # Projeler sayfası
│   └── iletisim/                # İletişim sayfası
├── components/
│   └── layout/
│       ├── Header.tsx           # Header bileşeni (Unified navbar)
│       └── Footer.tsx           # Footer bileşeni
├── public/                      # Statik dosyalar
│   ├── robots.txt              # SEO robots
│   └── site.webmanifest        # PWA manifest
├── tailwind.config.js          # Tailwind konfigürasyonu
├── next.config.js              # Next.js konfigürasyonu
├── tsconfig.json               # TypeScript konfigürasyonu
└── package.json                # Bağımlılıklar
```

## 🧭 Navigasyon Yapısı

### Navbar Özellikleri
- **Unified Structure**: Tüm sayfalarda aynı navbar yapısı
- **Black Contact Bar**: Telefon ve e-posta bilgileri
- **Framed Design**: Yuvarlatılmış köşeli çerçeve
- **Contact Button**: "BİZE ULAŞIN" butonu sağ tarafta

### Navigasyon Linkleri
- **ANASAYFA** (`/`) - Ana sayfa
- **HAKKIMIZDA** (`/hakkimizda`) - Hakkımızda sayfası
- **HİZMETLER** (`/hizmetler`) - Hizmetler sayfası
- **PROJELER** (`/projeler`) - Projeler sayfası

## 📄 Sayfalar

### 1. Ana Sayfa (`/`)
- Hero section
- Hizmetler önizlemesi
- Özellikler
- Call-to-action
- **Unified navbar structure**

### 2. Hakkımızda (`/hakkimizda`)
- Şirket hakkında bilgiler
- Misyon ve vizyon
- Ekip bilgileri
- Referanslar

### 3. Hizmetler (`/hizmetler`)
- Tüm hizmetlerin listesi
- Detaylı açıklamalar
- Hizmet kategorileri
- Teknoloji stack

### 4. Projeler (`/projeler`)
- Tamamlanan projeler
- Referanslar
- Portföy
- Proje detayları

### 5. İletişim (`/iletisim`)
- Hero section with "/ İletişim /" text
- İletişim formu
- Şirket bilgileri
- Call-to-action section
- Harita ve sosyal medya

## 🔧 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone <https://github.com/sitenanogit/sitenano-web.git>
cd sitenano-web-platform
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
# veya
yarn dev
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## 🚀 Production Build

```bash
# Production build
npm run build

# Production sunucusunu başlatın
npm start
```

## 📧 İletişim Formu

İletişim formu şu alanları içerir:
- Ad ve Soyad
- E-posta
- Telefon
- Hizmet türü
- Mesaj

Form gönderimi için backend entegrasyonu gereklidir.

## 🔧 Özelleştirme

### Renk Değişikliği
`tailwind.config.js` dosyasında renk değerlerini güncelleyin:

```javascript
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
}
```

### Font Değişikliği
`app/globals.css` dosyasında font importlarını güncelleyin.

### İçerik Güncelleme
Her sayfa dosyasında metadata ve içerik bölümlerini güncelleyin.

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 Destek

Herhangi bir sorunuz için:
- E-posta: info@sitenano.com
- Telefon: +90 (212) 555 0123







