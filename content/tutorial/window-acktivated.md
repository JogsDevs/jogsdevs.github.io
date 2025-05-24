---
title: "Aktivated Windows Dan Office"
summary: "Aktivasi windows dan office online."
date: 2025-05-14
image: "images/tutorials/keys.png"
---

## Bagaimana cara mengaktifkan Windows/Office?
#### Method 1 - PowerShell (Windows 8 dan yang lebih baru) ❤️

{{< info title="PowerShell Activation" type="tip" >}}

1. **Open PowerShell**  
	Untuk melakukannya, tekan tombol Windows + X, lalu pilih PowerShell atau Terminal.

2. **Salin dan tempel kode di bawah ini, lalu tekan enter.**  

```code
irm https://get.activated.win | iex
```
Sebagai alternatif, Anda dapat menggunakan yang berikut ini (ini akan ditinggalkan di masa mendatang):

```code
irm https://massgrave.dev/get | iex
```

3.  Anda akan melihat opsi aktivasi.
    Tekan [1] HWID untuk aktivasi Windows.
    Tekan [2] Ohook untuk aktivasi Office.

4. **Selasai**

{{< /info >}}

#### Method 2 - Tradisional (Windows vista dan yang lebih baru) ❤️

{{< details summary="Lihat detail" >}}
1. Unduh berkas menggunakan salah satu tautan di bawah ini:  
`https://github.com/massgravel/Microsoft-Activation-Scripts/archive/refs/heads/master.zip`  
atau
`https://git.activated.win/massgrave/Microsoft-Activation-Scripts/archive/master.zip`
2. Klik kanan pada file zip yang diunduh dan ekstrak.
3. Pada folder hasil ekstraksi, cari folder bernama `All-In-One-Version`.
4. Jalankan file bernama `MAS_AIO.cmd`.
5. Anda akan melihat opsi aktivasi. Ikuti petunjuk di layar.
6. Dan itu saja.

{{< /details >}}
___

- **[Office for macOS](office_for_mac.md)**  
- Untuk menjalankan skrip dalam mode tanpa pengawasan, periksa[disini](command_line_switches.md).

---

### Jika tidak berkerja ❓

- Jika Anda **tidak dapat meluncurkan MAS** menggunakan metode PowerShell, lihat **Metode 2** di atas.
- Jika MAS diluncurkan tetapi menampilkan kesalahan, periksa langkah pemecahan masalah yang disorot dengan warna biru dan ikuti langkah-langkah tersebut.
- Jika masalah masih berlanjut, jangan ragu untuk menghubungi kami [disini](troubleshoot.md).

---

{{< info title="PowerShell Activation" type="tip" >}}

- Perintah IRM di PowerShell mengunduh skrip dari URL yang ditentukan, dan perintah IEX mengeksekusinya.
- Selalu periksa ulang URL sebelum menjalankan perintah dan verifikasi sumbernya dapat dipercaya saat mengunduh file secara manual.
- Berhati-hatilah, karena beberapa orang menyebarkan malware yang menyamar sebagai MAS dengan mengubah URL pada perintah IRM.

{{< /info >}}

---

### MAS Latest Release

Terakhir Dikeluarkan - v3.2 (6-May-2025)  
[GitHub](https://github.com/massgravel/Microsoft-Activation-Scripts) / [Azure DevOps](https://dev.azure.com/massgrave/_git/Microsoft-Activation-Scripts) / [Self-hosted Git](https://git.activated.win/massgrave/Microsoft-Activation-Scripts)

---

### Fitur

-   **HWID (Digital License)** Metode Aktivasi Windows Secara Permanen
-   **Ohook** Metode Aktivasi Office Secara Permanen
-   **TSforge** Metode Aktivasi Windows/ESU/Office Secara Permanen
-   **KMS38** Cara Aktivasi Windows Hingga Tahun 2038
-   **Online KMS** Cara Aktivasi Windows/Office Selama 180 Hari (Seumur Hidup dengan Tugas Perpanjangan)
-   Pemecahan Masalah Aktivasi Lanjutan
-   $OEM$ Folder Untuk Pra-Aktivasi
-   Ubah Edisi Windows
-   Ubah Edisi Office
-   Periksa Status Aktivasi Windows/Office
-   Tersedia dalam versi All In One dan Separate Files
-   Sepenuhnya Open Source dan Berdasarkan Skrip Batch
-   Deteksi Antivirus Lebih Sedikit

---

### Ringkasan Aktivasi

| Activation Type | Supported Product      | Activation         Period                    | Is Internet Needed? |
|:----------------|:-----------------------|:-------------------------------------|:--------------------|
| HWID            | Windows 10-11          | Permanent                            | Yes                 |
| Ohook           | Office                 | Permanent                            | No                  |
| TSforge         | Windows / ESU / Office | Permanent                            | No                  |
| KMS38           | Windows 10-11-Server   | Till the Year 2038                   | No                  |
| Online KMS      | Windows / Office       | 180 Days. Lifetime With Renewal Task | Yes                 |

Untuk detail lebih lanjut, gunakan detail aktivasi masing-masing di Dokumen dan [comparison chart](chart.md).  
Untuk mengaktifkan produk yang tidak didukung seperti **Office on Mac**, cek [disini](unsupported_products_activation.md).

---

### Tangkapan Layarat

![Deskripsi gambar](/images/tutorials/MAS_AIO.png)

![Deskripsi gambar](/images/tutorials/MAS_HWID.png)

![Deskripsi gambar](/images/tutorials/MAS_Ohook.png)

![Deskripsi gambar](/images/tutorials/MAS_TSforge.png)

![Deskripsi gambar](/images/tutorials/MAS_Troubleshoot.png)

![Deskripsi gambar](/images/tutorials/MAS_change_windows_edition.png)

![Deskripsi gambar](/images/tutorials/MAS_change_office_edition_1.png)

![Deskripsi gambar](/images/tutorials/MAS_change_office_edition_2.png)

![Deskripsi gambar](/images/tutorials/MAS_change_office_edition_3.png)

---
Made with Love ❤️