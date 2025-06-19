---
title: "Struktur Halaman HTML"
description: "Mengenal struktur dasar halaman HTML yang terdiri dari elemen-elemen seperti `<header>`, `<footer>`, `<main>`, dan lain-lain."
date: 2025-05-02
categories: ["html"]
image: "images/kategori/html-logo.png"
---

Dalam HTML, struktur halaman dibangun dengan menggunakan berbagai elemen yang memisahkan konten. Beberapa elemen yang sering digunakan adalah:

- **<header>**: Menampilkan bagian atas halaman, biasanya berisi logo atau navigasi.
- **<footer>**: Menampilkan bagian bawah halaman, sering berisi informasi hak cipta atau link tambahan.
- **<main>**: Bagian utama dari konten halaman.
- **<section>**: Membagi halaman menjadi bagian-bagian tertentu.

Contoh struktur dasar HTML:

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Struktur HTML</title>
</head>
<body>
    <header>
        <h1>Selamat Datang di Website Saya</h1>
    </header>
    <main>
        <section>
            <h2>Konten Utama</h2>
            <p>Ini adalah konten utama halaman.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Website Saya</p>
    </footer>
</body>
</html>
```