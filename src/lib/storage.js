import fs from 'fs';
import path from 'path';
import { query } from './mysql.js';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const BLOGS_FILE = path.join(DATA_DIR, 'blogs.json');
const EVENTS_FILE = path.join(DATA_DIR, 'events.json');

// Pastikan folder data dan file JSON awal sudah siap
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  // Seed Blogs jika belum ada
  if (!fs.existsSync(BLOGS_FILE)) {
    const initialBlogs = [
      {
        id: 1,
        title: "Experiential Learning dalam Leadership: Strategi Efektif Mengembangkan Kompetensi Karyawan",
        slug: "experiential-learning-dalam-leadership",
        author: "Ardian Rangga",
        date: "21 September 2026",
        thumb: "1.jpg",
        thumb_full: "1.jpg",
        excerpt: "Banyak studi menunjukkan bahwa 70% efektivitas pembelajaran kepemimpinan berasal dari pengalaman langsung (on-the-job learning), bukan dari ruang kelas semata.",
        content: "<p>Dalam era bisnis yang dinamis saat ini, metode pelatihan konvensional seperti presentasi satu arah di ruang kelas sering kali kurang efektif dalam menghasilkan perubahan perilaku jangka panjang. Di sinilah <strong>Experiential Learning</strong> memegang peranan krusial.</p><p>Experiential Learning berfokus pada siklus belajar dari pengalaman langsung, refleksi kritis, konseptualisasi ide, hingga aplikasi nyata di tempat kerja. Melalui simulasi tantangan bisnis dan dinamika kelompok, setiap anggota tim dapat mengenali kekuatan serta area pengembangan mereka secara nyata.</p><h3>Manfaat Utama untuk Organisasi:</h3><ul><li>Meningkatkan komunikasi dan rasa saling percaya (trust) antar karyawan.</li><li>Menginternalisasi nilai-nilai inti perusahaan (core values) secara mendalam.</li><li>Mengasah kemampuan pemecahan masalah secara kolaboratif di bawah tekanan.</li></ul><p>Fasel Consulting siap membantu organisasi Anda merancang program pelatihan berbasis pengalaman yang disesuaikan dengan kebutuhan spesifik tim Anda.</p>",
        tags: "Experiential Learning, Training",
        status: "published",
        created_at: new Date().toISOString(),
      },
      {
        id: 2,
        title: "Membangun Mindset Kepemimpinan Masa Depan (Growth Mindset Leadership)",
        slug: "membangun-mindset-kepemimpinan-masa-depan",
        author: "Ardian Rangga",
        date: "18 September 2026",
        thumb: "2.jpg",
        thumb_full: "2.jpg",
        excerpt: "Kepemimpinan bukan tentang gelar atau jabatan, melainkan tentang kemampuan menginspirasi orang lain untuk berkembang dan mencapai potensi terbaik mereka.",
        content: "<p>Seorang pemimpin yang adaptif adalah mereka yang memiliki <em>Growth Mindset</em>—keyakinan bahwa kemampuan dan kecerdasan dapat terus diasah melalui dedikasi dan kerja keras. Pemimpin dengan mindset ini melihat kegagalan sebagai batu loncatan untuk belajar, bukan sebagai akhir.</p><p>Program <strong>Leadforward Leadership Transformation</strong> dari Fasel Consulting dirancang untuk membekali para pemimpin muda maupun senior dengan kecerdasan emosional (EQ), kemampuan komunikasi strategis, dan ketangguhan mental dalam memimpin tim.</p>",
        tags: "Leadership, Manajemen",
        status: "published",
        created_at: new Date().toISOString(),
      },
      {
        id: 3,
        title: "Mengapa Team Building Tradisional Sering Gagal dan Cara Mengatasinya",
        slug: "mengapa-team-building-tradisional-sering-gagal",
        author: "Fasel Consulting",
        date: "10 September 2026",
        thumb: "3.jpg",
        thumb_full: "3.jpg",
        excerpt: "Banyak perusahaan menghabiskan anggaran besar untuk outbound dan games, namun setelah kembali ke kantor tidak ada dampak nyata. Apa yang salah?",
        content: "<p>Banyak kegiatan outbound hanya fokus pada kesenangan sesaat (fun) tanpa adanya fasilitasi refleksi dan debriefing yang mendalam. Padahal, inti dari team building yang efektif adalah transfer nilai dari permainan ke realitas kerja sehari-hari.</p><p>Dengan pendekatan terstruktur dan fasilitator tersertifikasi BNSP, Fasel Consulting memastikan setiap sesi team building memiliki output terukur yang membawa dampak positif pada produktivitas tim Anda.</p>",
        tags: "Team Building, Kolaborasi",
        status: "published",
        created_at: new Date().toISOString(),
      },
    ];
    fs.writeFileSync(BLOGS_FILE, JSON.stringify(initialBlogs, null, 2), 'utf-8');
  }

  // Seed Events jika belum ada
  if (!fs.existsSync(EVENTS_FILE)) {
    const initialEvents = [
      {
        id: 1,
        title: "FASEL Crafting Collaboration & Core Values",
        tag: "Experiential Learning Approach",
        thumb: "faselevent1.jpg",
        date: "Batch Mendatang: Kontak Kami",
        location: "Bogor / In-House Company",
        short_desc: "Perusahaan yang kuat dibangun oleh individu yang memiliki visi, motivasi, dan nilai yang selaras. FASEL Crafting Collaboration dirancang untuk menginternalisasi core values dan mempererat engagement karyawan.",
        description: "<h3>Tentang Program:</h3><p>FASEL Crafting Collaboration adalah event interaktif yang memadukan simulasi experiential learning, dinamika kelompok, dan refleksi mendalam. Program ini bertujuan menyatukan persepsi, mengikis sekat komunikasi antar departemen, dan memicu semangat kerja baru.</p><h3>Fokus Pembelajaran:</h3><ul><li>Internalisasi Core Values Perusahaan</li><li>Peningkatan Kepercayaan & Komunikasi Terbuka</li><li>Problem Solving Kolaboratif</li><li>Penyelarasan Visi & Komitmen Bersama</li></ul>",
        btn_text: "Daftar / Konsultasi",
        btn_link: "https://wa.me/6281298319944?text=Halo%20Fasel%20Consulting%2C%20saya%20tertarik%20mengikuti%20program%20FASEL%20Crafting%20Collaboration",
        status: "active",
        created_at: new Date().toISOString(),
      },
      {
        id: 2,
        title: "Leadforward: Youth & Emerging Leader Camp",
        tag: "Leadership Class",
        thumb: "training1.jpg",
        date: "Pendaftaran Terbuka",
        location: "Bogor, Jawa Barat",
        short_desc: "Program akselerasi kepemimpinan intensif untuk calon pemimpin masa depan. Fokus pada self-awareness, communication skills, dan emotional resilience.",
        description: "<h3>Program Overview:</h3><p>Leadforward Camp mengombinasikan pelatihan indoor berbobot dan tantangan experiential outdoor yang menguji kepemimpinan dalam kondisi nyata. Dipandu langsung oleh Master Trainer berlisensi BNSP.</p>",
        btn_text: "Info Lebih Lanjut",
        btn_link: "https://wa.me/6281298319944?text=Halo%20Fasel%20Consulting%2C%20saya%20ingin%20info%20program%20Leadforward",
        status: "active",
        created_at: new Date().toISOString(),
      },
      {
        id: 3,
        title: "Digital Amazing Race & Team Resilience Challenge",
        tag: "Team Building",
        thumb: "training2.jpg",
        date: "Sesuai Jadwal Klien",
        location: "Lokasi Fleksibel (Outdoor / Indoor)",
        short_desc: "Petualangan berbasis aplikasi digital yang memadukan strategi, kecepatan, ketangkasan, dan kekompakan tim dalam menyelesaikan misi-misi menantang.",
        description: "<h3>Keunggulan Digital Amazing Race:</h3><p>Menggunakan platform digital interaktif dengan sistem skor real-time, tantangan augmented puzzle, dan video response yang seru dan memacu adrenalin.</p>",
        btn_text: "Reservasi Tanggal",
        btn_link: "https://wa.me/6281298319944?text=Halo%20Fasel%20Consulting%2C%20kami%20ingin%20mengadakan%20Digital%20Amazing%20Race",
        status: "active",
        created_at: new Date().toISOString(),
      }
    ];
    fs.writeFileSync(EVENTS_FILE, JSON.stringify(initialEvents, null, 2), 'utf-8');
  }
}

// Helper membaca file JSON lokal
function readJson(filePath) {
  ensureDataDir();
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

// Helper menulis file JSON lokal
function writeJson(filePath, data) {
  ensureDataDir();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .substring(0, 100);
}

// ==========================================
// BLOGS CRUD (Hybrid MySQL + JSON Storage)
// ==========================================

export async function getBlogs(limit = null) {
  // 1. Coba ambil dari MySQL
  try {
    let sql = 'SELECT * FROM blogs WHERE status = "published" ORDER BY id DESC';
    if (limit) sql += ` LIMIT ${limit}`;
    const rows = await query(sql);
    if (rows && rows.length > 0) {
      return { source: 'mysql', data: rows };
    }
  } catch (dbErr) {
    // MySQL offline / tidak terpasang lokal
  }

  // 2. Fallback ke JSON Storage
  const blogs = readJson(BLOGS_FILE);
  const activeBlogs = blogs.filter(b => b.status !== 'draft');
  const result = limit ? activeBlogs.slice(0, limit) : activeBlogs;
  return { source: 'json', data: result };
}

export async function getBlogByIdOrSlug(identifier) {
  const isNumeric = /^\d+$/.test(identifier);

  // 1. Coba ambil dari MySQL
  try {
    const sql = isNumeric ? 'SELECT * FROM blogs WHERE id = ?' : 'SELECT * FROM blogs WHERE slug = ?';
    const rows = await query(sql, [identifier]);
    if (rows && rows.length > 0) {
      return rows[0];
    }
  } catch (dbErr) {
    // MySQL offline
  }

  // 2. Fallback ke JSON Storage
  const blogs = readJson(BLOGS_FILE);
  if (isNumeric) {
    return blogs.find(b => b.id === parseInt(identifier)) || null;
  }
  return blogs.find(b => b.slug === identifier) || null;
}

export async function createBlog(item) {
  const baseSlug = slugify(item.title);
  const slug = item.slug || `${baseSlug}-${Date.now().toString().slice(-4)}`;
  const date = item.date || new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  const author = item.author || 'Fasel Consulting';
  const thumb = item.thumb || '1.jpg';
  const excerpt = item.excerpt || (item.content ? item.content.replace(/<[^>]*>?/gm, '').slice(0, 160) + '...' : '');
  const tags = item.tags || 'Training, Consulting';
  const status = item.status || 'published';

  // Selalu simpan ke JSON lokal agar aman
  const blogs = readJson(BLOGS_FILE);
  const newId = blogs.length > 0 ? Math.max(...blogs.map(b => b.id || 0)) + 1 : 1;
  const newBlog = {
    id: newId,
    title: item.title,
    slug,
    author,
    date,
    thumb,
    thumb_full: thumb,
    excerpt,
    content: item.content,
    tags,
    status,
    created_at: new Date().toISOString()
  };

  blogs.unshift(newBlog);
  writeJson(BLOGS_FILE, blogs);

  // Coba sinkronkan ke MySQL jika MySQL aktif
  try {
    const res = await query(
      `INSERT INTO blogs (title, slug, author, date, thumb, thumb_full, excerpt, content, tags, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [item.title, slug, author, date, thumb, thumb, excerpt, item.content, tags, status]
    );
    if (res && res.insertId) {
      newBlog.id = res.insertId;
    }
  } catch (dbErr) {
    console.log('[Storage] MySQL offline, data disimpan di JSON lokal.');
  }

  return { success: true, blog: newBlog, id: newBlog.id, slug };
}

export async function updateBlog(id, item) {
  const numericId = parseInt(id);

  // Update di JSON lokal
  const blogs = readJson(BLOGS_FILE);
  const index = blogs.findIndex(b => b.id === numericId);
  if (index !== -1) {
    blogs[index] = { ...blogs[index], ...item, id: numericId, updated_at: new Date().toISOString() };
    writeJson(BLOGS_FILE, blogs);
  }

  // Coba update di MySQL jika aktif
  try {
    await query(
      `UPDATE blogs SET 
        title = COALESCE(?, title),
        excerpt = COALESCE(?, excerpt),
        content = COALESCE(?, content),
        author = COALESCE(?, author),
        date = COALESCE(?, date),
        thumb = COALESCE(?, thumb),
        thumb_full = COALESCE(?, thumb_full),
        tags = COALESCE(?, tags),
        status = COALESCE(?, status)
       WHERE id = ?`,
      [item.title, item.excerpt, item.content, item.author, item.date, item.thumb, item.thumb, item.tags, item.status, numericId]
    );
  } catch (dbErr) {
    // MySQL offline
  }

  return { success: true, message: 'Artikel berhasil diperbarui' };
}

export async function deleteBlog(id) {
  const numericId = parseInt(id);

  // Hapus dari JSON lokal
  const blogs = readJson(BLOGS_FILE);
  const filtered = blogs.filter(b => b.id !== numericId);
  writeJson(BLOGS_FILE, filtered);

  // Coba hapus dari MySQL jika aktif
  try {
    await query('DELETE FROM blogs WHERE id = ?', [numericId]);
  } catch (dbErr) {
    // MySQL offline
  }

  return { success: true, message: 'Artikel berhasil dihapus' };
}

// ==========================================
// EVENTS CRUD (Hybrid MySQL + JSON Storage)
// ==========================================

export async function getEvents(limit = null) {
  // 1. Coba ambil dari MySQL
  try {
    let sql = 'SELECT * FROM events WHERE status = "active" ORDER BY id DESC';
    if (limit) sql += ` LIMIT ${limit}`;
    const rows = await query(sql);
    if (rows && rows.length > 0) {
      return { source: 'mysql', data: rows };
    }
  } catch (dbErr) {
    // MySQL offline
  }

  // 2. Fallback ke JSON Storage
  const events = readJson(EVENTS_FILE);
  const activeEvents = events.filter(e => e.status !== 'inactive');
  const result = limit ? activeEvents.slice(0, limit) : activeEvents;
  return { source: 'json', data: result };
}

export async function getEventById(id) {
  const numericId = parseInt(id);

  // 1. Coba ambil dari MySQL
  try {
    const rows = await query('SELECT * FROM events WHERE id = ?', [numericId]);
    if (rows && rows.length > 0) {
      return rows[0];
    }
  } catch (dbErr) {
    // MySQL offline
  }

  // 2. Fallback ke JSON Storage
  const events = readJson(EVENTS_FILE);
  return events.find(e => e.id === numericId) || null;
}

export async function createEvent(item) {
  const tag = item.tag || 'Experiential Learning Approach';
  const thumb = item.thumb || 'faselevent1.jpg';
  const date = item.date || 'Pendaftaran Terbuka';
  const location = item.location || 'Bogor, Jawa Barat';
  const short_desc = item.short_desc || (item.description ? item.description.replace(/<[^>]*>?/gm, '').slice(0, 160) + '...' : '');
  const description = item.description || `<p>${short_desc}</p>`;
  const btn_text = item.btn_text || 'Daftar Sekarang';
  const btn_link = item.btn_link || `https://wa.me/6281298319944?text=${encodeURIComponent('Halo Fasel, saya ingin mendaftar: ' + item.title)}`;
  const status = item.status || 'active';

  // Simpan ke JSON lokal
  const events = readJson(EVENTS_FILE);
  const newId = events.length > 0 ? Math.max(...events.map(e => e.id || 0)) + 1 : 1;
  const newEvent = {
    id: newId,
    title: item.title,
    tag,
    thumb,
    date,
    location,
    short_desc,
    description,
    btn_text,
    btn_link,
    status,
    created_at: new Date().toISOString()
  };

  events.unshift(newEvent);
  writeJson(EVENTS_FILE, events);

  // Coba sinkronkan ke MySQL jika MySQL aktif
  try {
    const res = await query(
      `INSERT INTO events (title, tag, thumb, date, location, short_desc, description, btn_text, btn_link, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [item.title, tag, thumb, date, location, short_desc, description, btn_text, btn_link, status]
    );
    if (res && res.insertId) {
      newEvent.id = res.insertId;
    }
  } catch (dbErr) {
    console.log('[Storage] MySQL offline, event disimpan di JSON lokal.');
  }

  return { success: true, event: newEvent, id: newEvent.id };
}

export async function updateEvent(id, item) {
  const numericId = parseInt(id);

  // Update di JSON lokal
  const events = readJson(EVENTS_FILE);
  const index = events.findIndex(e => e.id === numericId);
  if (index !== -1) {
    events[index] = { ...events[index], ...item, id: numericId, updated_at: new Date().toISOString() };
    writeJson(EVENTS_FILE, events);
  }

  // Coba update di MySQL jika aktif
  try {
    await query(
      `UPDATE events SET 
        title = COALESCE(?, title),
        tag = COALESCE(?, tag),
        thumb = COALESCE(?, thumb),
        date = COALESCE(?, date),
        location = COALESCE(?, location),
        short_desc = COALESCE(?, short_desc),
        description = COALESCE(?, description),
        btn_text = COALESCE(?, btn_text),
        btn_link = COALESCE(?, btn_link),
        status = COALESCE(?, status)
       WHERE id = ?`,
      [item.title, item.tag, item.thumb, item.date, item.location, item.short_desc, item.description, item.btn_text, item.btn_link, item.status, numericId]
    );
  } catch (dbErr) {
    // MySQL offline
  }

  return { success: true, message: 'Event berhasil diperbarui' };
}

export async function deleteEvent(id) {
  const numericId = parseInt(id);

  // Hapus dari JSON lokal
  const events = readJson(EVENTS_FILE);
  const filtered = events.filter(e => e.id !== numericId);
  writeJson(EVENTS_FILE, filtered);

  // Coba hapus dari MySQL jika aktif
  try {
    await query('DELETE FROM events WHERE id = ?', [numericId]);
  } catch (dbErr) {
    // MySQL offline
  }

  return { success: true, message: 'Event berhasil dihapus' };
}
