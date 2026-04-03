# 🚀 QUICK START GUIDE - Undangan Khitanan Rehan

Panduan cepat untuk memulai website undangan khitanan Rehan.

## ⚡ Langkah 1: Buka Website

### Cara paling mudah:
1. Buka folder `khitanan-rehan`
2. Double-click file `index.html`
3. Website akan otomatis terbuka di browser default Anda

### Atau gunakan Live Server (lebih baik):
1. Buka folder `khitanan-rehan` di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"
4. Browser akan otomatis membuka halaman

---

## 📲 Langkah 2: Personalisasi Undangan

### Untuk membuat URL personal:

**Format dasar:**
```
index.html?to=NAMA_TAMU
```

**Contoh penggunaan:**

| Untuk Siapa | URL |
|-------------|-----|
| Pak Kartono | `index.html?to=Bapak%20Kartono` |
| Bu Tia | `index.html?to=Ibu%20Tia` |
| Khairul | `index.html?to=Khairul` |
| Keluarga Besar | `index.html?to=Keluarga%20Besar` |
| Umum | `index.html?to=Bapak/Ibu%20Saudara/i` |

### Cara menggunakan:
1. Copy salah satu contoh URL di atas
2. Paste di address bar browser
3. Tekan Enter
4. Nama akan berubah di halaman undangan (di bagian atas)

---

## 🎨 Langkah 3: Personalisasi Konten (Opsional)

### Mengubah Nama Anak
1. Buka file `index.html` dengan editor (Notepad++, VS Code, dll)
2. Cari: `Muhammad Rehan`
3. Ganti dengan nama anak yang diinginkan
4. Simpan file
5. Refresh browser

### Mengubah Tanggal Acara
1. Buka `index.html`
2. Cari: `12 April 2026`
3. Ganti dengan tanggal acara
4. Juga update di `script.js`:
   - Cari: `new Date('2026-04-12T09:00:00')`
   - Update tanggal sesuai

### Mengubah Warna (Gold menjadi warna lain)
1. Buka file `style.css`
2. Di bagian paling atas, cari `:root {`
3. Ubah `--primary-gold: #D4AF37` dengan warna yang diinginkan
4. Contoh warna: 
   - Silver: `#C0C0C0`
   - Copper: `#B87333`
   - Rose Gold: `#B76E79`

---

## 📸 Langkah 4: Mengganti Foto

Foto-foto ada di folder: **`image/`**

**Foto yang bisa diganti:**
- `rehan1.png` - Foto di hero (halaman pertama)
- `rehan2.png` - Foto besar di halaman undangan
- `rehan3.png`, `rehan4.png`, `rehan5.png` - Galeri
- `keluarga1.png`, `keluarga2.png` - Foto keluarga

**Cara mengganti:**
1. Siapkan foto baru dengan ukuran cukup besar (min 800x600 px)
2. Rename file menjadi nama yang sama (misal: `rehan1.png`)
3. Timpa file lama
4. Refresh browser
5. Foto akan otomatis berubah

---

## 🌐 Langkah 5: Berbagi Undangan

### Kirim ke WhatsApp:
1. Copy URL dari address bar
2. Kirim via WhatsApp:
   ```
   Assalamu'alaikum, berikut undangan khitanan Rehan:
   [PASTE URL DI SINI]
   ```

### Kirim via Email:
```
Assalamu'alaikum,

Dengan gembira kami undang Anda menghadiri acara khitanan anak kami:

[PASTE URL DI SINI]

Wassalamu'alaikum
```

### Simpan sebagai Link:
Anda bisa menyimpan URL personal untuk setiap tamu
- Untuk keluarga: `index.html?to=Keluarga%20Besar`
- Untuk teman: `index.html?to=Teman-Teman`
- Untuk tetangga: `index.html?to=Tetangga%20Tersayang`

---

## 📍 Layout Website

Website terdiri dari beberapa section:

1. **Hero** 🎯 - Halaman pembuka dengan countdown
2. **Undangan** 📋 - Info utama tentang acara
3. **Info Acara** 📅 - Tanggal, waktu, lokasi, keluarga
4. **Galeri** 📸 - Foto-foto Rehan
5. **Lokasi** 🗺️ - Peta dan panduan arah
6. **RSVP** ✉️ - Form konfirmasi kehadiran
7. **Footer** 🤲 - Penutup

---

## ❓ FAQ (Pertanyaan Umum)

### Q: Foto tidak muncul?
A: 
- Pastikan foto ada di folder `image/`
- Cek nama file harus benar dan case-sensitive
- Format harus PNG atau JPG

### Q: Map tidak muncul?
A: 
- Pastikan Internet aktif
- Refresh halaman (F5)
- Cek browser compatibility

### Q: URL parameter tidak bekerja?
A: 
- Pastikan format benar: `index.html?to=NAMA`
- Ganti spasi dengan `%20`
- Refresh browser setelah mengubah URL

### Q: Bagaimana cara print undangan?
A: 
- Tekan Ctrl+P (atau Cmd+P di Mac)
- Design otomatis menyesuaikan untuk print
- Klik "Print"

### Q: Bisa diakses offline?
A: 
- Ya! Website ini punya offline support via Service Worker
- Setelah pertama kali dibuka, bisa dibuka tanpa internet

---

## 🎯 Checklist Sebelum Mengirim

- [ ] Nama anak sudah benar
- [ ] Tanggal acara sudah benar
- [ ] Tempat acara sudah benar
- [ ] Foto-foto sudah update
- [ ] Warna tema sudah sesuai keinginan
- [ ] URL parameter sudah tested
- [ ] Map lokasi sudah benar
- [ ] RSVP form sudah berfungsi
- [ ] Halaman sudah dibuka di berbagai device (mobile, tablet, desktop)

---

## 📱 Testing di Berbagai Device

### Desktop:
- Buka browser di komputer
- Test semua menu dan fitur

### Mobile:
Cara 1:
- Buka di phone yang sama network
- Dari address bar: `192.168.x.x:5500` (lihat di VS Code)

Cara 2:
- Screenshot halaman
- Kirim ke HP teman
- Buka link dari HP

### Tablet:
- Test responsivitas
- Pastikan layout tetap bagus

---

## 🔧 Troubleshooting Cepat

| Masalah | Solusi |
|---------|--------|
| Halaman blank | Refresh F5 atau Ctrl+Shift+R |
| Foto tidak muncul | Clear cache browser (Ctrl+Shift+Delete) |
| Map error | Cek koneksi internet |
| URL param tidak work | Refresh dan ganti spasi ke %20 |
| Font tidak benar | Update browser ke versi terbaru |

---

## 💡 Tips & Tricks

### Buat shortcut untuk setiap tamu:
```
Buat folder bernama "Undangan Rehan" di desktop, 
lalu buat text file shortcut untuk setiap orang:

👨 Pak Kartono.txt berisi: index.html?to=Bapak%20Kartono
👩 Bu Tia.txt berisi: index.html?to=Ibu%20Tia
👨‍👩‍👦 Keluarga.txt berisi: index.html?to=Keluarga%20Besar
```

### Bagikan dengan mudah:
1. Upload folder `khitanan-rehan` ke hosting gratis (Netlify, Vercel, GitHub Pages)
2. Bagikan link publik
3. Tamu bisa langsung akses tanpa download

### Simpan versi backup:
1. Copy seluruh folder `khitanan-rehan`
2. Rename jadi `khitanan-rehan-backup`
3. Simpan di external drive

---

## 📞 Info Acara (Referensi)

| Item | Detail |
|------|--------|
| Nama | Muhammad Rehan |
| Tanggal | 12 April 2026 |
| Waktu | 09:00 WIB |
| Lokasi | Kp. Ciseukcut Barat, Pandeglang |
| Ayah | Bpk. Kartono |
| Ibu | Ibu Siti Atiahul Mubarokah/Tia |

---

## 🎉 Selesai!

Website undangan Khitanan Rehan sudah siap untuk dibagikan! 

**Langkah selanjutnya:**
1. ✅ Personalisasi dengan URL untuk setiap tamu
2. ✅ Test di berbagai device
3. ✅ Bagikan ke teman dan keluarga
4. ✅ Terima RSVP dari tamu

---

### Pertanyaan lebih lanjut?

Lihat file-file dokumentasi:
- `README.md` - Dokumentasi lengkap
- `GUIDE.html` - Panduan interaktif
- `PROJECT_SUMMARY.md` - Ringkasan project

---

**Wassalamu'alaikum Wa Rahmatullahi Wa Barakatuh** 🤲

*Semoga website ini membantu menyampaikan undangan dengan indah!*

---

**Version**: 1.0  
**Last Update**: April 2026  
**Language**: Bahasa Indonesia  
**Status**: Ready to Use ✅
