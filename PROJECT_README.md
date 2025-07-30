# Sitenano Web Platform

Modern, multi-page, SEO-optimized ve responsive web uygulaması. Next.js (App Router) ve Tailwind CSS kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Modern Teknoloji Stack**: Next.js 14, TypeScript, Tailwind CSS
- **SEO Optimizasyonu**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Responsive Tasarım**: Mobil, tablet ve desktop uyumlu
- **Performans**: Optimized images, lazy loading, Core Web Vitals
- **Türkçe İçerik**: Tamamen Türkçe dil desteği
- **PWA Hazır**: Web app manifest ve service worker desteği

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

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: `#1EBBBC` (Turkuaz - Ana renk)
- **Secondary**: `#1F2937` (Dark gray - Koyu aksan)
- **Primary Dark**: `#059669` (Hover durumu)

### Fontlar
- **Hero & Headings**: Sora (Google Fonts)
  - Font weight: 400 (normal)
  - Letter spacing: 0.5px
  - Line height: 1.4
  - Font size: 45px (hero başlığı)
- **Navigation**: Manrope (Google Fonts)
  - Font weight: 500 (medium)
  - Letter spacing: 0.2px
  - Word spacing: 0.5px
  - Font size: 16px
- **Body Text**: System font stack (16px, weight 400)

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

### Component Guidelines (Bileşen Kuralları)
- **Hero Section**: 4-line text layout, responsive width (100%, max-width 700px), 700px fixed height
- **Navigation**: Hover effects with color transitions, no background, Manrope font
- **Buttons**: Rounded corners (rounded-lg), hover scale effects, px-8 py-4 spacing
- **Cards**: Gradient backgrounds, rounded-2xl corners, p-8 spacing
- **Typography**: Sora for headings, Manrope for navigation, system fonts for body text

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

## 📱 Responsive Tasarım

Proje tamamen responsive olarak tasarlanmıştır:

- **Mobile First**: Mobil öncelikli tasarım
- **Flexible Grid**: CSS Grid ve Flexbox kullanımı
- **Breakpoint System**: Tailwind CSS breakpoint sistemi
- **Touch Friendly**: Dokunmatik cihazlar için optimize edilmiş

## 🔍 SEO Optimizasyonu

### Meta Tags
- Title (60 karakter)
- Description (160 karakter)
- Keywords
- Open Graph
- Twitter Cards

### Structured Data (JSON-LD)
- Organization schema
- WebPage schema
- Service schema
- ContactPage schema

### Technical SEO
- Semantic HTML
- Alt attributes
- Canonical URLs
- Sitemap
- Robots.txt

## 🎯 Performans

### Core Web Vitals
- **LCP**: Largest Contentful Paint
- **CLS**: Cumulative Layout Shift
- **INP**: Interaction to Next Paint

### Optimizasyonlar
- Image optimization (next/image)
- Font optimization
- Code splitting
- Lazy loading
- Minification

## 🌐 Çoklu Dil Desteği

- HTML lang="tr" attribute
- Türkçe meta tags
- Türkçe içerik
- Türkçe URL yapısı

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

---

**Sitenano** - Modern Web Çözümleri ve Yapay Zeka Araçları 