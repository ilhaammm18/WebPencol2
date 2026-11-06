<div align="center">

  # 🇮🇩 Portal Pencol 2
  ### Portal Kemerdekaan, Gotong Royong & Transparansi Anggaran Warga
  **Dusun Randusongo, Desa Pencol, Kec. Gerih, Kab. Ngawi, Jawa Timur**

  <p align="center">
    <a href="#-tentang-proyek">Tentang Proyek</a> •
    <a href="#-fitur-utama">Fitur Utama</a> •
    <a href="#-teknologi">Teknologi</a> •
    <a href="#-struktur-direktori">Struktur Direktori</a> •
    <a href="#-cara-menjalankan">Cara Menjalankan</a> •
    <a href="#-deploy-ke-github-pages">Deploy</a> •
    <a href="#-kontak--sosial-media">Kontak</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Status-Aktif-success?style=for-the-badge" alt="Status" />
  </p>

</div>

---

## 📌 Tentang Proyek

**Web Pencol 2** adalah website resmi berbasis komunitas yang dibangun untuk mewadahi kebersamaan warga dan pemuda **Karang Taruna Dusun Pencol 2 (Randusongo)**, Kecamatan Gerih, Kabupaten Ngawi.

Website ini berfokus pada:
1. **Dokumentasi Sejarah & Kemerdekaan**: Menyimpan dan mempublikasikan rekam jejak kemeriahan perayaan HUT Kemerdekaan Republik Indonesia dari tahun ke tahun.
2. **Keterbukaan & Transparansi Kas**: Membuka pembukuan kas swadaya pemuda dan kepanitiaan 17-an secara terang benderang agar amanah, akuntabel, dan dapat dipantau oleh seluruh warga maupun donatur perantau.
3. **Partisipasi Warga**: Memberikan wadah interaktif bagi warga untuk mengajukan ide perlombaan, saran kegiatan lingkungan, serta musyawarah gotong royong dusun.

---

## ✨ Fitur Utama

### 1. 🇮🇩 Hero & Nuansa Merah Putih Modern
- Visual atmosfer kemerdekaan yang dinamis dan berkelas dengan paduan tipografi *Outfit* dan *Plus Jakarta Sans*.
- Tombol aksi cepat untuk langsung mengajukan ide kegiatan (*Usul Kegiatan*).

### 2. 👥 Profil Guyub Rukun & Susunan Pengurus
- Menampilkan profil nilai kebersamaan: musyawarah terbuka dan gotong royong lingkungan.
- Kartu profil pengurus inti Karang Taruna lengkap dengan jabatan, kutipan semangat, inisial avatar gradasi, dan kontak.

### 3. 📸 Album Dokumentasi & Fullscreen Lightbox Gallery
- **Sistem Tab Multi-Tahun**: Arsip dokumentasi terpisah untuk kegiatan **Agustus 2025** (HUT RI ke-80) dan **Agustus 2026** (HUT RI ke-81).
- **Horizontal Slider**: Slider responsif dengan tombol navigasi *Prev/Next* yang otomatis mendeteksi batas gulir.
- **Modal Gallery Lengkap**:
  - Filter kategori instan: *Semua*, *Lomba 17-an*, *Gotong Royong*, *Musyawarah & Kas*, *Malam Tirakatan*, dan *Panggung Hiburan*.
  - **Tampilan Grid & Mode Single View**: Memperbesar foto dengan deskripsi rinci, tanggal kegiatan, dan tombol panah navigasi.
  - **Navigasi Keyboard**: Mendukung tombol `Esc` (menutup modal) serta `ArrowLeft` & `ArrowRight` (ganti foto).

### 4. 💰 Transparansi Anggaran & Kas 17-an
- **Ringkasan KPI Finansial**: Kartu statistik ringkas menampilkan Total Pemasukan, Total Pengeluaran, dan Sisa Saldo Kas.
- **Tabel Pembukuan Resmi**: Rincian transaksi debit/kredit yang rapi, transparan, dan telah disahkan bersama pengurus RT dan pemuda.

### 5. 💡 Formulir Usul Kegiatan Warga
- Modal formulir interaktif bagi warga setempat maupun warga perantauan untuk mengirimkan usul kegiatan, ide lomba, atau inisiatif dusun langsung ke panitia.

### 6. ❓ Tanya Jawab (Interactive FAQ Accordion)
- Menjawab pertanyaan lazim seputar iuran kas pemuda, pengajuan usulan, pemeriksaan bukti kuitansi fisik, serta mekanisme donasi warga luar kota / perantau.

### 7. 📍 Peta Interaktif & Media Sosial
- Penyematan **Google Maps Dusun Pencol, Gerih, Ngawi** yang interaktif dan dapat di-zoom.
- Tautan media sosial resmi Dusun Pencol 2 (Instagram & TikTok).
- Tombol cepat kembali ke atas (*Scroll to top*).

---

## 🛠️ Teknologi yang Digunakan

| Komponen | Deskripsi |
| :--- | :--- |
| **Markup** | HTML5 Semantik dengan standar aksesibilitas (*ARIA roles & attributes*) |
| **Styling** | Custom CSS3 (`css/style.css`) + Tailwind CSS v3 (CDN) dengan *preflight disabled* |
| **Scripting** | Vanilla JavaScript murni (ES6+), ringan tanpa *framework* berat |
| **Tipografi** | Google Fonts (*Outfit* & *Plus Jakarta Sans*) |
| **Ikonografi** | Inline SVG yang ringan dan tajam pada semua resolusi |
| **Aset Visual** | Dokumentasi foto kegiatan asli warga Dusun Pencol 2 & Randusongo |

---

## 📁 Struktur Direktori

```text
Web Pencol 2/
├── index.html                   # Halaman web utama
├── README.md                    # Dokumentasi proyek
├── css/
│   └── style.css                # Styling utama kustom & responsive design
├── js/
│   └── main.js                  # Logika interaktif, data dokumentasi & galeri
└── assets/
    └── images/                  # Aset foto & grafis
        ├── logo_karang_taruna.svg
        ├── hero_pencol.jpg
        ├── gotong_royong.jpg
        ├── musyawarah_desa.jpg
        ├── perayaan_17an.jpg
        └── Dokumentasi/
            └── 2025/
                └── LombaVollyAntarRt-1.jpeg
```

---

## 🚀 Cara Menjalankan Proyek di Komputer Lokal

Karena proyek ini dibangun menggunakan **Vanilla Web Stack (HTML, CSS, JS)** tanpa dependensi *build tool* (seperti Webpack atau Vite), Anda dapat menjalankannya dengan sangat mudah:

### Opsi 1: Buka Langsung di Browser
1. Unduh atau *clone* repository ini:
   ```bash
   git clone https://github.com/ilhaammm18/WebPencol2.git
   ```
2. Buka folder proyek.
3. Klik ganda pada berkas `index.html` untuk langsung melihat website di browser favorit Anda (Chrome, Edge, Firefox, Safari).

### Opsi 2: Menggunakan Ekstensi Live Server (VS Code)
1. Buka folder proyek di Visual Studio Code.
2. Pasang ekstensi **Live Server** (oleh Ritwick Dey).
3. Klik kanan pada berkas `index.html` lalu pilih **"Open with Live Server"**.
4. Website akan berjalan di alamat `http://127.0.0.1:5500`.

---

## 🌐 Deploy ke GitHub Pages (Gratis & Online)

Agar website ini dapat diakses secara online oleh warga Dusun Pencol 2:

1. Buka repositori Anda di GitHub: `https://github.com/ilhaammm18/WebPencol2`.
2. Klik tab **Settings** di bagian atas repositori.
3. Pada bilah navigasi kiri, pilih menu **Pages**.
4. Pada bagian **Build and deployment**:
   - **Source**: Pilih `Deploy from a branch`.
   - **Branch**: Pilih `main` dan folder `/(root)`.
5. Klik **Save**.
6. Tunggu 1–2 menit, website Anda akan live di alamat:
   ```text
   https://ilhaammm18.github.io/WebPencol2/
   ```

---

## 🤝 Berkontribusi

Bagi pemuda, warga, maupun rekan developer Dusun Pencol 2 yang ingin menambahkan foto dokumentasi, memperbarui data kepengurusan, atau menyempurnakan fitur web:

1. **Fork** repositori ini.
2. Buat branch baru untuk fitur Anda:
   ```bash
   git checkout -b fitur-baru-anda
   ```
3. Lakukan commit perubahan:
   ```bash
   git commit -m "feat: menambahkan dokumentasi lomba kemerdekaan terbaru"
   ```
4. Push ke branch Anda:
   ```bash
   git push origin fitur-baru-anda
   ```
5. Buat **Pull Request**.

---

## 📬 Kontak & Sosial Media

- **Dusun / Desa**: Pencol 2 (Randusongo), Desa Pencol
- **Kecamatan / Kabupaten**: Kec. Gerih, Kab. Ngawi, Jawa Timur 63271
- **Instagram**: [https://www.instagram.com/karangtarunapencol2?cplk=cGN0dmdldmlteW04](#)
- **TikTok**: [https://www.tiktok.com/@kartarpencol2?_r=1&_t=ZS-9BBU8iXxzpk](#)
---

<div align="center">
  <sub>Dibuat dengan rasa bangga dan semangat gotong royong untuk warga Dusun Pencol 2, Gerih, Ngawi 🇮🇩</sub>
</div>

