---
title: "Menghitung Luas Persegi dengan JavaScript"
description: "Belajar cara menghitung luas persegi dengan menggunakan JavaScript."
date: 2025-05-02
categories: ["javascript"]
image: "images/kategori/javascript-logo.png"
---

Dalam tutorial ini, kita akan belajar cara menghitung luas persegi menggunakan JavaScript.

Contoh kode untuk menghitung luas persegi:

```html
<script>
  function hitungLuas() {
    const sisi = prompt("Masukkan panjang sisi persegi:");
    const luas = sisi * sisi;
    alert("Luas persegi adalah: " + luas);
  }
</script>

<button onclick="hitungLuas()">Hitung Luas Persegi</button>
