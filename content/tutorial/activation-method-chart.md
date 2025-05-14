---
title: "Aktivated Method Chart"
summary: "perbandingan metode aktivasi yang ditawarkan oleh Microsoft Activation Scripts."
date: 2025-05-14
image: "images/tutorials/keys.png"
---

# Bagan Metode Aktivasi

Di bawah ini adalah perbandingan metode aktivasi yang ditawarkan oleh Microsoft Activation Scripts.

Dasar-dasar
------
| | HWID | Ohook | KMS38 | KMS Online | TSforge (ZeroCID) |
| --- | :---: | :---: | :---: | :---: | :---: |
| Bekerja secara offline | ❌ | ✅ | ✅ | ❌ | ✅ |
| Aktivasi bersifat permanen | ✅ | ✅ | ✅[^1] | ✅[^2] | ✅ |
| Tidak meninggalkan file apa pun di sistem untuk mempertahankan status aktivasi | ✅ | ❌ | ✅ | ❌ | ✅ |

Kegigihan
-----------
| | HWID | Ohook | KMS38 | KMS Online | TSforge (ZeroCID) |
| --- | :---: | :---: | :---: | :---: | :---: |
| Bertahan di antara perubahan perangkat keras | ❌ | ✅ | ❌ | ✅ | ✅ |
| Bertahan di antara instalasi bersih pada perangkat keras yang sama | ✅ | ❌ | ❌ | ❌ | ❌ |
| Bertahan di antara pemutakhiran fitur Windows 10 / 11 | ✅ | ✅ | ✅ | ❌ |

Dukungan
-------
| | HWID | Ohook | KMS38 | KMS Online | TSforge (ZeroCID) |
| --- | :---: | :---: | :---: | :---: | :---: |
| Windows Vista / 7 / 8 / 8.1 | ❌ | ❌ | ❌ | ✅[^3] | ✅ |
| Windows 10 / 11 | ✅ | ❌ | ✅[^3] | ✅[^3] | ✅ |
| Windows Server 2008 / 2008 R2 / 2012 / 2012 R2 | ❌ | ❌ | ❌ | ✅ | ✅ |
| Windows Server 2016 dan yang lebih baru | ❌ | ❌ | ✅ | ✅ | ✅ |
| Office 2010 | ❌ | ✅ | ❌ | ✅[^3] | ❌ |
| Office 2013 dan yang lebih baru | ❌ | ✅ | ❌ | ✅[^3] | ✅[^4] |
| Host Windows / Office KMS | ❌ | ❌ | ❌ | ❌ | ✅ |
| Pembaruan Keamanan Lanjutan Windows | ❌ | ❌ | ❌ | ❌ | ✅ |
| Add-on OCUR / RP / APPXLOB | ❌ | ❌ | ❌ | ❌ | ✅ |

---

[^1]: Berlaku hingga tahun 2038.
[^2]: Berlaku selama 180 hari secara default. Permanen dengan tugas pembaruan terpasang.
[^3]: Hanya edisi yang mendukung aktivasi volume.
[^4]: Hanya didukung pada Windows 8 dan yang lebih baru; edisi langganan tidak didukung.