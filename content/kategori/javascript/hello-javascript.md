---
title: "Hello JavaScript!"
description: "Langkah pertama belajar JavaScript: Menampilkan pesan di konsol dan memanipulasi elemen HTML."
date: 2025-05-02
categories: ["javascript"]
image: "images/kategori/javascript-logo.png"
---

JavaScript adalah bahasa pemrograman untuk membuat halaman web jadi interaktif.

Contoh kode pertama:

```js
function hello() {
  console.log("Hello world!");
}
```

```html
<script>
  console.log("Halo dari JavaScript!");
  alert("Selamat datang di website saya!");
</script>
```

```
<script>
  function ubahTeks() {
    document.getElementById("teks").innerText = "Teks telah diubah!";
  }
</script>
```

<button onclick="ubahTeks()">Klik aku!</button>
<p id="teks">Teks awal</p>
