# 🌟 Website Undangan Khitanan Muhammad Rehan

Selamat datang di website undangan khitanan yang elegan dan modern untuk anak kami, Muhammad Rehan.

## 📋 Daftar Isi
- [Fitur Utama](#fitur-utama)
- [Panduan Penggunaan](#panduan-penggunaan)
- [Personalisasi](#personalisasi)
- [Struktur Folder](#struktur-folder)
- [Tips Penggunaan](#tips-penggunaan)

## ✨ Fitur Utama

### 1. **Desain Islami yang Elegan**
- Tema warna putih, abu-abu, dan emas yang mencerminkan nilai islami
- Responsive design untuk semua ukuran layar (desktop, tablet, mobile)
- Animasi smooth dan interaktif

### 2. **Countdown Timer**
- Menampilkan hitung mundur hingga acara khitanan
- Update real-time setiap detik
- Format: Hari, Jam, Menit, Detik

### 3. **Peta Interaktif**
- Integrasi OpenStreetMap (Leaflet.js)
- Menampilkan lokasi acara dengan marker custom
- Clickable popup dengan informasi lengkap
- Link langsung ke OpenStreetMap

### 4. **Galeri Foto**
- Tata letak grid yang menarik dengan area yang beragam
- Hover effects dengan zoom dan overlay
- Modal/lightbox untuk melihat foto secara full-screen
- Styling CSS dengan border, filter, dan animasi

### 5. **Personalisasi dengan URL Parameters**
Gunakan format URL: `index.html?to=NamaHari`
Contoh: `index.html?to=Khairul`
Maka di halaman akan tertulis "Kepada Yth. Khairul"

### 6. **RSVP Form**
- Form konfirmasi kehadiran yang mudah digunakan
- Menyimpan data di localStorage
- Validasi input
- Pesan sukses setelah submit

### 7. **Informasi Lengkap**
- Tanggal & Waktu Acara
- Lokasi dengan panduan arah
- Profil Keluarga
- Doa dan ucapan

## 🚀 Panduan Penggunaan

### 1. Membuka Website
Buka file `index.html` di browser:
- Double-click `index.html`, atau
- Gunakan live server (VS Code extension)

### 2. Navigasi Menu
- **Undangan**: Informasi utama khitanan
- **Info Acara**: Tanggal, waktu, lokasi, keluarga
- **Galeri**: Foto-foto Rehan
- **Lokasi**: Peta dan panduan arah
- **RSVP**: Form konfirmasi kehadiran

### 3. Menggunakan Countdown
- Countdown otomatis menghitung mundur ke tanggal 12 April 2026, pukul 09:00 WIB
- Update setiap detik

### 4. Melihat Lokasi
- Peta otomatis menampilkan lokasi acara
- Klik pada marker untuk melihat detail
- Klik tombol "Buka di OpenStreetMap" untuk navigasi lebih detail

### 5. Upload Foto
- Foto disimpan di folder `image/`
- Format yang didukung: PNG, JPG, JPEG, WebP
- Recommended ukuran: 800x600px atau lebih tinggi

## 🎨 Personalisasi

### URL Parameters
**Format**: `?to=NAMA_UNDANGAN`

**Contoh**:
- `index.html?to=Bapak%20Kartono`
- `index.html?to=Ibu%20Tia`
- `index.html?to=Keluarga%20Besar`

**Hasil**: Nama yang ditulis akan muncul di awal halaman setelah "Kepada Yth."

### Edit Konten Utama
Edit bagian-bagian berikut di `index.html`:

1. **Judul/Nama**
   - Cari: `<h2 class="child-name">Muhammad Rehan</h2>`
   - Ubah nama sesuai kebutuhan

2. **Tanggal & Waktu**
   - Cari: `Minggu, 12 April 2026`
   - Update tanggal acara

3. **Lokasi**
   - Cari: `Kp. Ciseukcut Barat, RT01/RW04`
   - Ubah alamat lengkap

4. **Orang Tua**
   - Cari: `Bpk. Kartono & Ibu Siti Atiahul Mubarokah/Tia`
   - Ubah nama orang tua

### Edit Warna Tema
Di `style.css`, ubah root variables:
```css
:root {
  --primary-gold: #D4AF37;    /* Gold utama */
  --primary-gold-light: #E8C547; /* Gold lebih terang */
  --white: #FFFFFF;          /* Putih */
  --light-gray: #F5F5F5;     /* Abu-abu terang */
  --dark-gray: #808080;      /* Abu-abu gelap */
  --text-dark: #2C2C2C;      /* Teks hitam */
}
```

## 📁 Struktur Folder

```
khitanan-rehan/
├── index.html          # Halaman utama
├── style.css           # Styling CSS
├── script.js           # JavaScript functionality
├── sw.js               # Service Worker (offline support)
├── README.md           # File dokumentasi ini
└── lib/                # Folder untuk library (jika ada)
```

## 📸 Detail Foto yang Digunakan

Foto berada di folder `image/`:

1. **rehan1.png** - Foto profil di hero section
2. **rehan2.png** - Foto penuh di home section
3. **rehan3.png** - Galeri foto 1
4. **rehan4.png** - Galeri foto 2
5. **rehan5.png** - Galeri foto 3
6. **keluarga1.png** - Foto keluarga di info section
7. **keluarga2.png** - Foto keluarga di galeri

## 💡 Tips Penggunaan

### 1. Print-Friendly
- Tekan Ctrl+P atau Cmd+P untuk print
- Design otomatis menyesuaikan untuk print

### 2. Offline Support
- Website dapat diakses offline dengan Service Worker
- Cache otomatis menyimpan halaman untuk offline

### 3. Mobile Optimization
- Responsive pada semua ukuran layar
- Touch-friendly buttons dan forms

### 4. Performance
- Lazy loading untuk gambar
- CSS animations yang ringan
- Minimal external dependencies

### 5. SEO & Metadata
- Edit meta tags di bagian `<head>` index.html untuk SEO lebih baik

## 🔧 Troubleshooting

### Map tidak muncul
- Pastikan koneksi internet aktif
- Refresh halaman (F5)
- Cek console browser untuk error messages

### Foto tidak muncul
- Pastikan path relatif sudah benar: `image/nama-file.png`
- Format file harus PNG atau JPG
- Ukuran file tidak terlalu besar (< 5MB)

### Countdown tidak update
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh halaman
- Pastikan waktu sistem komputer sudah benar

### RSVP form tidak mengirim
- Clear localStorage jika data sudah penuh
- Gunakan browser tab baru
- Cek console browser untuk error

## 📞 Informasi Acara

**Nama Anak**: Muhammad Rehan  
**Usia**: 2 Tahun (ke-2)  
**Hari/Tanggal**: Minggu, 12 April 2026 / 24 Syawal 1447 H  
**Waktu**: 09:00 WIB s.d. Selesai  
**Lokasi**: Kp. Ciseukcut Barat, RT01/RW04, Ds. Mekarsari Kec. Panimbang, Kab. Pandeglang, Banten

**Orang Tua**:
- Bapak: Kartono
- Ibu: Siti Atiahul Mubarokah / Tia

## 📝 License

Website ini dibuat dengan cinta untuk acara khitanan Muhammad Rehan. Bebas digunakan dan dimodifikasi untuk keperluan pribadi.

---

**Wassalamu'alaikum Wa Rahmatullahi Wa Barakatuh**

Semoga website ini bermanfaat untuk menyebarkan undangan khitanan anak kami kepada semua orang terkasih. 🤲

*Last Updated: April 2026*
# khitanan-rehan
