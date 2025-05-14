---
title: "Event Handler di JavaScript"
description: "Menggunakan event handler untuk menangani interaksi pengguna seperti klik tombol atau input."
date: 2025-05-02
categories: ["javascript"]
image: "images/kategori/javascript-logo.png"
---

JavaScript memungkinkan kita untuk menangani berbagai interaksi pengguna menggunakan event handler. Contohnya, menangani klik tombol.

Contoh penggunaan event handler:

```html
<button id="tombol">Klik saya!</button>
<p id="pesan"></p>

<script>
  const tombol = document.getElementById("tombol");
  tombol.addEventListener("click", function() {
    document.getElementById("pesan").innerText = "Tombol telah diklik!";
  });
</script>