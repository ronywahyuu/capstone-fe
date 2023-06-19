# Panduan Menggunakan Aplikasi Togetherboost
 Aplikasi ini dibuat untuk memenuhi tugas capstone project dari Dicoding. 
 <!-- deployed version -->
 Apliksi ini dapat diakses melalui link berikut: [Togetherboost](https://togetherboost.vercel.app/)

## Daftar Isi
<ol>
  <li><a href="#deskripsi">Deskripsi</a></li>
  <li><a href="#persyaratan-sistem">Persyaratan Sistem</a></li>
  <li><a href="#instalasi">Instalasi</a></li>
  <li><a href="#menjalankan-aplikasi">Menjalankan Aplikasi </a></li>
  <li><a href="#menggunakan-aplikasi-lewat-deployed-version">Menggunakan Aplikasi lewat Deployed Version</a></li>
</ol>

## Deskripsi
Togetherboost merupakan platform untuk siapa saja yang mau menyumbangkan apapun untuk kelangsungan pendidikan seperti uang, buku, kode akses belajar, dll. Aplikasi melalui donatur (role donatur) dapat memberikan bantuan dana langsung kepada siapa saja (role penerima) yang memenuhi persyaratan yang telah ditetapkan secara mandiri oleh donatur.



## Persyaratan Sistem
sebelum menjalankan aplikasi ini secara lokal, pastikan anda sudah memenuhi persyaratan sistem berikut:
- Menginstall [Node.js](https://nodejs.org/en/)
- Browser yang kompatibel seperti Google Chrome, Mozilla Firefox, atau Microsoft Edge
- Koneksi internet yang stabil
- Sistem operasi yang kompatibel seperti Windows, Linux, atau MacOS

## Instalasi
<ol>
  <li>
    <a href="#clone-repository">Clone repository</a>
  </li>
  <li>
    <a href="#install-dependencies">Install dependencies</a>
  </li>
  <li>
    <a href="#konfigurasi">Konfigurasi</a>
  </li>
  <li>
    <a href="#konfigurasi-backend">Konfigurasi Backend</a>
  </li>
</ol>

## Clone repository
Clone repository ini ke direktori lokal anda dengan menjalankan perintah berikut:
```bash
  git clone https://github.com/ronywahyuu/capstone-fe
```

## Install dependencies
Masuk ke direktori lokal repository yang telah di-clone, lalu jalankan perintah berikut:
```bash
  npm install
```

## Konfigurasi
Gunakan branch `local` untuk menjalankan aplikasi ini secara lokal., jalankan perintah berikut untuk berpindah ke branch `local`:
```bash
  git checkout local
```

## Konfigurasi Backend
Aplikasi ini membutuhkan backend untuk menjalankannya. Backend yang digunakan adalah [Togetherboost Backend](https://github.com/ronywahyuu/capstone-be). Silahkan lakukan clone repository dan instalasi dependencies seperti pada aplikasi ini. 

### Branch
masuk ke branch `main` pada repository backend, lalu jalankan perintah berikut untuk berpindah ke branch `local`:
```bash
  git checkout main
```

### env
Setelah itu, buat file `.env` pada direktori root aplikasi ini, lalu isi file tersebut dengan konfigurasi berikut:
```bash
DATABASE_URL="mysql://<username_mysql>:<password_mysql>@localhost:3306/capstone_be"

JWT_SECRET="BUAT_KOMBINASI_RUMIT_SESUAI_KEINGINAN_ANDA"

```

### Migration dan build
Setelah itu, jalankan perintah berikut untuk melakukan migration dan build:
```bash
  npm run build-prisma 
```

### Menjalankan aplikasi
Setelah itu, jalankan perintah berikut untuk menjalankan aplikasi:
```bash
  npm run start
```




## Fitur-fitur
Berikut adalah fitur-fitur yang ada pada aplikasi ini:
- Login dan register
- Membuat Donasi
- Melihat Donasi yang telah dibuat
- Melihat detail donasi yang telah dibuat
- Memberi komentar pada donasi yang telah dibuat
- Memberi like pada donasi yang telah dibuat
- Menyimpan donasi yang telah dibuat
- Melihat donasi yang telah disimpan
- Membuat blog
- Melihat blog yang telah dibuat
- Melihat detail blog yang telah dibuat
- Memberi komentar pada blog yang telah dibuat
- Memberi like pada blog yang telah dibuat

## Menjalankan aplikasi
Jalankan perintah berikut untuk menjalankan aplikasi ini secara lokal:
```bash
  npm run dev
```
Aplikasi secara default akan berjalan pada port 5173. Buka browser dan akses `http://localhost:5713` untuk mengakses aplikasi.

## Menggunakan aplikasi lewat deployed version
Aplikasi ini juga dapat diakses secara publik tanpa perlu melakukan tahap instalasi atau konfigurasi secara manual. Berikut adalah link untuk mengakses aplikasi:
[Togetherboost](https://togetherboost.vercel.app/)

Pada halaman landing page, terdapat FAQ yang berisi penjelesan secara umum dari aplikasi dan cara menggunakannya


## Feedback dan Support
Kami sangat terbuka dengan kritik dan saran yang membangun untuk pengembangan aplikasi ini. Silahkan hubungi kami melalui email berikut: ronywahyu1@gmail.com

## Team
- [Rony Wahyu Utama](https://github.com/ronywahyuu)
- [Candra Wali Sanjaya](https://github.com/chndrwali)
- [Suci Sukmawati](https://github.com/Sucisw)
- [Sindi Rinaldi](https://github.com/SindiRinaldi)



