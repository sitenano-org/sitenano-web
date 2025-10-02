# Proje Detay Sayfası Template Kullanım Kılavuzu

## 📁 Dosyalar
- `project-detail-template.tsx` - Ana template dosyası
- `project-detail-responsive.css` - Responsive CSS dosyası

## 🚀 Yeni Proje Detay Sayfası Oluşturma

### 1. Template Dosyalarını Kopyala
```bash
cp templates/project-detail-template.tsx app/projeler/[slug]/page.tsx
cp templates/project-detail-responsive.css app/projeler/[slug]/responsive.css
```

### 2. Proje Verilerini Düzenle
`projectData` objesine yeni proje ekle:

```typescript
const projectData = {
  'yeni-proje-slug': {
    title: 'Proje Başlığı',
    category: 'Kategori',
    heroImage: '/images/proje-resmi.jpg',
    mainImage: '/images/proje-resmi.jpg',
    sections: [
      // Bölümler buraya eklenecek
    ]
  }
}
```

### 3. Bölüm Yapısı

#### Projeye Genel Bakış
```typescript
{
  title: 'Projeye Genel Bakış',
  content: 'Ana proje açıklaması...',
  subsections: [
    {
      title: 'Alt Başlık 1',
      content: 'İçerik 1...'
    },
    {
      title: 'Alt Başlık 2', 
      content: 'İçerik 2...'
    }
  ]
}
```

#### Planlamadan Uygulamaya
```typescript
{
  title: 'Planlamadan Uygulamaya',
  subtitle: 'Her başarılı proje, planlı ve öngörülebilir bir süreçle şekillenir.',
  subsections: [
    {
      title: 'Adım 1',
      content: 'Adım açıklaması...'
    },
    // 6 adım önerilir
  ]
}
```

#### Öne Çıkan Fonksiyonlar
```typescript
{
  title: 'Öne Çıkan Fonksiyonlar',
  subsections: [
    {
      title: 'Fonksiyon 1',
      content: 'Fonksiyon açıklaması...',
      icon: '🔧' // Opsiyonel
    },
    // 4 fonksiyon önerilir
  ]
}
```

#### Performans Sonuçları
```typescript
{
  title: 'Performans Sonuçları',
  content: 'Sonuçlar açıklaması...',
  results: [
    {
      metric: 'Metrik 1',
      description: 'Açıklama 1...'
    },
    // İstediğiniz kadar metrik
  ]
}
```

## 🎨 Özellikler

### Responsive Tasarım
- Masaüstü: 2x2 grid layout
- Mobil: Tek sütun layout
- Otomatik font boyutu ayarlaması
- Kart boyutları optimizasyonu

### Bölümler
- **Hero Section**: Kategori badge + başlık
- **Projeye Genel Bakış**: Resim + metin layout
- **Planlamadan Uygulamaya**: 6 adımlı süreç kartları
- **Öne Çıkan Fonksiyonlar**: 4 renkli fonksiyon kartı
- **Performans Sonuçları**: Metrik kartları

### CSS Sınıfları
- `.project-hero-badge` - Kategori badge
- `.project-hero-title` - Ana başlık
- `.project-overview-container` - Genel bakış container
- `.project-process-grid` - Süreç grid'i
- `.project-process-card` - Süreç kartları
- `.project-process-number` - Adım numaraları

## 📱 Mobil Responsive
Tüm responsive ayarlar `responsive.css` dosyasında tanımlı:
- 768px ve altı ekranlarda aktif
- Font boyutları otomatik küçülür
- Grid layout tek sütuna geçer
- Kart boyutları optimize edilir

## 🔧 Kullanım Örnekleri

### Yeni Proje Ekleme
1. Template dosyalarını kopyala
2. `projectData` objesine yeni proje ekle
3. İçerikleri düzenle
4. Resimleri `/public/images/` klasörüne ekle
5. Test et

### Mevcut Proje Düzenleme
1. `app/projeler/[slug]/page.tsx` dosyasını aç
2. `projectData` objesinde ilgili projeyi bul
3. İçerikleri güncelle
4. Test et

## ⚠️ Önemli Notlar
- Resim yolları `/images/` ile başlamalı
- Slug'lar URL'de kullanılacak, Türkçe karakter kullanmayın
- Her bölüm için en az 1 subsection gerekli
- Icon'lar emoji olarak eklenebilir
- CSS sınıflarını değiştirmeyin, responsive bozulur
