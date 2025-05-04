---
title: "Memahami Box Model di CSS"
description: "Pengenalan konsep Box Model di CSS yang sangat penting untuk mengatur layout halaman web."
date: 2025-05-02
categories: ["css"]
image: "images/kategori/css-logo.png"
---

CSS Box Model adalah konsep dasar yang digunakan untuk mendesain elemen di halaman web. Setiap elemen HTML diperlakukan sebagai sebuah kotak, dan memiliki bagian-bagian berikut:

1. **Content**: Isi dari elemen.
2. **Padding**: Ruang di sekitar konten, di dalam elemen.
3. **Border**: Garis yang mengelilingi padding (jika ada).
4. **Margin**: Ruang di luar border.

Contoh penggunaan Box Model:

```html
<style>
  div {
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 15px;
    background-color: lightgray;
  }
</style>

<div>Ini adalah kotak dengan Box Model</div>
