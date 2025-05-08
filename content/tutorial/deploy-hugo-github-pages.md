---
title: "Cara Deploy Hugo + TailwindCSS ke GitHub Pages dengan GitHub Actions"
date: 2025-05-04
description: Panduan lengkap untuk deploy website Hugo dengan TailwindCSS ke GitHub Pages menggunakan GitHub Actions dan sistem dua branch.
slug: deploy-hugo-github-pages
image: "images/tutorials/github-mark-white.png"
---

## Pendahuluan

Hugo adalah static site generator yang sangat cepat dan mudah digunakan. Setelah selesai membangun website dengan Hugo, langkah selanjutnya adalah melakukan deploy agar website dapat diakses publik melalui internet. Salah satu cara termudah adalah menggunakan GitHub Pages.

## Persiapan

Sebelum mulai deploy, pastikan kamu sudah memiliki:

- Website Hugo yang sudah jadi.
- Akun GitHub.
- Git sudah terinstal di komputer kamu.

## Langkah-langkah Deploy

### 1. Inisialisasi Git Repository

Masuk ke direktori project Hugo kamu, lalu inisialisasi Git:

```bash
git init
git add .
git commit -m "Initial commit"
