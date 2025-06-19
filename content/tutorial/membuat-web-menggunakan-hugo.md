---
date: '2025-05-04T11:15:35+07:00'
draft: true
title: 'Membuat Web Menggunakan Hugo'
image: "images/tutorials/hugo.png"
---

Saya akan membuat tema Hugo custom yang meniru desain Petanikode.com. Mari kita breakdown menjadi beberapa bagian:

# Cheklist Persiapan Awal :

1. [x] Membuat kerangka tema
2. [x] Layout homepage
3. [ ] Sistem grid artikel
4. [ ] Sidebar kanan
5. [ ] Navigasi header
6. [ ] Warna dasar (biru PetaniKode)


## Struktur contoh project website

```bash
themes/petanikode-theme/
├─ layouts/
│  ├─ _default/
│  │  ├─ baseof.html
│  │  ├─ list.html
│  │  └─ single.html
│  ├─ partials/
│  │  ├─ header.html
│  │  └─ footer.html
│  └─ index.html
├─ static/
│  ├─ css/
│  │  └─ style.css
│  └─ images/
│     └─ logo.png
└─ theme.toml
