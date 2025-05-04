---
title: "Responsive Design dengan CSS"
description: "Cara membuat halaman web yang responsif menggunakan CSS agar tampilan menyesuaikan berbagai ukuran layar."
date: 2025-05-02
categories: ["css"]
image: "images/kategori/css-logo.png"
---

Responsive design adalah teknik untuk membuat halaman web agar bisa tampil dengan baik di berbagai ukuran layar, baik desktop, tablet, atau ponsel. Ini dicapai menggunakan media queries di CSS.

Contoh CSS untuk responsive design:

```html
<style>
  /* Default untuk desktop */
  .container {
    width: 80%;
    margin: 0 auto;
  }

  /* Untuk tablet */
  @media (max-width: 768px) {
    .container {
      width: 90%;
    }
  }

  /* Untuk ponsel */
  @media (max-width: 480px) {
    .container {
      width: 100%;
    }
  }
</style>

<div class="container">
  <h1>Responsive Design</h1>
  <p>Halaman ini akan menyesuaikan dengan ukuran layar perangkat.</p>
</div>