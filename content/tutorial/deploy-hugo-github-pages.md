---
title: "Cara Deploy Hugo + TailwindCSS ke GitHub Pages dengan GitHub Actions"
date: 2025-05-04
description: Panduan lengkap untuk deploy website Hugo dengan TailwindCSS ke GitHub Pages menggunakan GitHub Actions dan sistem dua branch.
slug: deploy-hugo-github-pages
image: "images/tutorials/github-mark-white.png"
---

Ingin website Hugo kamu langsung online setiap kali push? Di artikel ini, kita akan belajar cara **deploy website Hugo** yang menggunakan **TailwindCSS CLI** ke **GitHub Pages** secara otomatis menggunakan **GitHub Actions**.

## 🚀 Apa yang Akan Kita Bangun?

- Hugo dengan TailwindCSS (pakai `tailwindcss-cli`)
- Auto-deploy dari branch `main` ke `gh-pages`
- GitHub Actions sebagai CI/CD pipeline
- CSS hasil Tailwind sudah teroptimasi dan minify

---

## 🧱 1. Struktur Branch

- `main`: tempat kamu menulis konten, ngoding layout, styling, dsb.
- `gh-pages`: berisi hasil build Hugo yang akan tampil di GitHub Pages.

---

## 🛠️ 2. Konfigurasi `hugo.toml`

```toml
baseURL = 'https://[jogsdevs.github.io](https://jogsdevs.github.io/)/'
languageCode = 'id'
title = 'CodeCraft'
publishDir = 'public'

[markup]
  [markup.highlight]
    noClasses = false
    style = "monokai"

  [markup.goldmark.renderer]
    unsafe = true

ignoreLogs = ["warning-goldmark-raw-html"]
