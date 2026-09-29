# Panduan Pengaktifan & Deploy Fasel Consulting ke Hostinger

Dokumen ini menjelaskan langkah-langkah lengkap untuk mengaktifkan kembali website **Fasel Consulting** di **Hostinger** menggunakan database **MySQL bawaan Hostinger**.

---

## 1. Akses Admin Dashboard (CMS)

Website kini telah dilengkapi dengan **Admin Panel** bawaan yang terintegrasi langsung:
* **URL Admin:** `https://faselconsulting.com/admin` (atau `http://localhost:3000/admin` saat uji lokal)
* **Kredensial Default:**
  * **Username:** `admin`
  * **Password:** `admin123`

### Fitur yang Bisa Dilakukan di Admin:
1. **Kelola Blog (`/admin/blogs`):**
   * Tambah artikel wawasan baru lengkap dengan judul, foto thumbnail, kategori/tag, tanggal, dan isi konten artikel.
   * Edit artikel yang sudah terbit.
   * Hapus artikel.
2. **Kelola Pelatihan & Event (`/admin/events`):**
   * Tambah program pelatihan/event baru (contoh: *Experiential Learning*, *Leadership Class*, *Team Building*).
   * Menentukan tanggal pelaksanaan, lokasi, poster/foto event, materi, dan link pendaftaran WhatsApp.
   * Edit dan hapus program pelatihan.
3. **Upload Foto Otomatis:**
   * Di form blog & event, terdapat tombol upload file yang otomatis menyimpan gambar ke server (`/assets/img/uploads/`).

---

## 2. Setup Database MySQL di Hostinger

1. Masuk ke **hPanel Hostinger** (`https://hpanel.hostinger.com`).
2. Masuk ke menu **Databases** -> **MySQL Databases**.
3. Buat database baru:
   * **MySQL Database Name:** misal `u123456789_fasel`
   * **MySQL Username:** misal `u123456789_admin`
   * **Password:** Buat password yang kuat dan catat.
4. Klik **Create**.
5. Buka **phpMyAdmin** untuk database yang baru dibuat.
6. Klik tab **Import** di bagian atas phpMyAdmin.
7. Pilih file `database.sql` yang ada di dalam folder proyek ini (`project/database.sql` atau `project/public/database.sql`).
8. Klik tombol **Go / Import** di bagian bawah.
9. Database selesai! Tabel `admin_users`, `blogs`, dan `events` beserta data awal langsung terpasang.

---

## 3. Konfigurasi Environment (`.env.local` / `.env`)

Sesuaikan file `.env.local` dengan kredensial database Hostinger yang baru dibuat:

```env
# Database Configuration (Hostinger MySQL)
DB_HOST=localhost
DB_PORT=3306
DB_USER=u123456789_admin
DB_PASSWORD=PasswordDatabaseAnda
DB_NAME=u123456789_fasel

# Keamanan Token Sesi Admin
JWT_SECRET=fasel_secret_key_production_2026_super_secure

# Akun Admin Default (Fallback)
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123

# Domain Publik
NEXT_PUBLIC_SITE_URL=https://faselconsulting.com
```

> **Catatan Keamanan:** Setelah login pertama kali di production, Anda disarankan mengubah password admin di tabel `admin_users`.

---

## 4. Opsi Deployment ke Hostinger

Tergantung jenis paket hosting Hostinger Anda, pilih salah satu metode di bawah ini:

### Opsi A: Menggunakan Fitur "Node.js Application" di Hostinger (Rekomendasi)
Jika paket hosting Anda memiliki menu **Node.js** di hPanel:
1. Masuk ke menu **Advanced** -> **Node.js** di hPanel.
2. Klik **Create Application**:
   * **Node.js Version:** Pilih versi **18.x** atau **20.x**.
   * **Application Root:** `/` (atau folder aplikasi Anda).
   * **Application Startup File:** `node_modules/next/dist/bin/next` atau buat file `server.js`.
3. Upload seluruh file proyek ke folder root aplikasi via File Manager / Git Deploy.
4. Di terminal hPanel / menu Node.js, jalankan:
   ```bash
   npm install
   npm run build
   ```
5. Klik **Start Application**. Website langsung berjalan secara live!

---

### Opsi B: Menggunakan Static Export + PHP API (Untuk Shared Hosting Standar Tanpa Node.js)
Jika paket hosting Anda adalah Web Hosting standar yang hanya menjalankan LiteSpeed/PHP:
1. Di proyek Next.js, sistem backend PHP siap pakai sudah tersedia di folder `public/api/` (`blogs.php`, `events.php`, `config.php`).
2. Masukkan kredensial database di `public/api/config.php`:
   ```php
   $db_host = 'localhost';
   $db_user = 'u123456789_admin';
   $db_pass = 'PasswordDatabaseAnda';
   $db_name = 'u123456789_fasel';
   ```
3. Export website statis:
   Tambahkan `output: 'export'` di `next.config.mjs`, lalu jalankan:
   ```bash
   npm run build
   ```
4. Folder `out/` akan otomatis tercipta.
5. Upload seluruh isi folder `out/` ke folder `public_html` di File Manager Hostinger.
6. Seluruh halaman web, blog dinamis, event, dan form kontak akan bekerja langsung via PHP & MySQL Hostinger!

---

## 5. Ringkasan Perbaikan yang Telah Diselesaikan

1. **Bug Navigasi `/blog`:** Diperbaiki, kini membuka halaman blog dinamis (`/blog`) dan pembaca artikel (`/blog/[slug]`).
2. **Form Kontak WhatsApp:** Diperbaiki dari nomor dummy (`6281234567890`) ke nomor resmi Fasel Consulting (`+62 812 9831 9944`) dengan format pesan otomatis.
3. **Link Footer Patah:** Tautan layanan `/services/1` dan `terms.txt` diperbaiki.
4. **Fitur Tambah Pelatihan & Event:** Tersedia lengkap di Admin Panel (`/admin/events/new`) dan langsung tampil di homepage serta halaman detail event.
5. **Kompilasi Sukses:** Proyek teruji bersih tanpa error (*build successful*).
