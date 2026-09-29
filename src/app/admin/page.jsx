"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";
import { adminFetch } from "@/lib/apiClient";

export default function AdminDashboardPage() {
  const [blogs, setBlogs] = useState([]);
  const [events, setEvents] = useState([]);
  const [dataSource, setDataSource] = useState("loading");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [blogRes, eventRes] = await Promise.all([
          adminFetch("/api/blogs"),
          adminFetch("/api/events"),
        ]);
        const blogData = await blogRes.json();
        const eventData = await eventRes.json();

        if (blogData.success) {
          setBlogs(blogData.data || []);
          setDataSource(blogData.source || "mysql");
        }
        if (eventData.success) {
          setEvents(eventData.data || []);
        }
      } catch (err) {
        console.error("Error loading dashboard data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <AdminLayout title="Dashboard Overview">
      {/* Status Alert Banner */}
      <div className="alert alert-info border-0 shadow-sm d-flex align-items-center justify-content-between mb-4">
        <div className="d-flex align-items-center gap-3">
          <i className="fas fa-database fa-2x text-primary"></i>
          <div>
            <h6 className="mb-0 fw-bold">Status Penyimpanan Data</h6>
            <small className="text-muted">
              {dataSource === "mysql" ? (
                <span className="text-success fw-bold">
                  <i className="fas fa-check-circle me-1"></i> Terhubung langsung ke Database MySQL
                </span>
              ) : (
                <span className="text-warning fw-bold">
                  <i className="fas fa-exclamation-triangle me-1"></i> Mode Offline / JSON Fallback (Database MySQL belum dikonfigurasi)
                </span>
              )}
            </small>
          </div>
        </div>
        <a
          href="/database.sql"
          download
          className="btn btn-outline-dark btn-sm d-flex align-items-center gap-1"
        >
          <i className="fas fa-download"></i> Unduh database.sql
        </a>
      </div>

      {/* Metrics Cards */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-muted small fw-bold">TOTAL BLOG / ARTIKEL</span>
                <h2 className="fw-bold mt-2 mb-0 text-dark">{blogs.length}</h2>
              </div>
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "54px", height: "54px", backgroundColor: "#e7f1ff", color: "#0d6efd" }}
              >
                <i className="fas fa-newspaper fa-lg"></i>
              </div>
            </div>
            <div className="mt-3">
              <Link href="/admin/blogs" className="small text-decoration-none fw-bold">
                Kelola Blog <i className="fas fa-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-muted small fw-bold">PELATIHAN & EVENT</span>
                <h2 className="fw-bold mt-2 mb-0 text-dark">{events.length}</h2>
              </div>
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "54px", height: "54px", backgroundColor: "#e8f7f0", color: "#198754" }}
              >
                <i className="fas fa-calendar-check fa-lg"></i>
              </div>
            </div>
            <div className="mt-3">
              <Link href="/admin/events" className="small text-decoration-none text-success fw-bold">
                Kelola Pelatihan <i className="fas fa-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-muted small fw-bold">WHATSAPP RESMI</span>
                <h5 className="fw-bold mt-2 mb-0 text-dark">+62 812 9831 9944</h5>
              </div>
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "54px", height: "54px", backgroundColor: "#d1e7dd", color: "#0f5132" }}
              >
                <i className="fab fa-whatsapp fa-lg"></i>
              </div>
            </div>
            <div className="mt-3">
              <span className="badge bg-success">Terkoneksi Form</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-muted small fw-bold">AKSI CEPAT</span>
                <div className="d-flex flex-column gap-2 mt-2">
                  <Link href="/admin/blogs/new" className="btn btn-primary btn-sm fw-bold">
                    <i className="fas fa-plus me-1"></i> Tulis Blog Baru
                  </Link>
                  <Link href="/admin/events/new" className="btn btn-outline-success btn-sm fw-bold">
                    <i className="fas fa-plus me-1"></i> Tambah Pelatihan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tables Preview Grid */}
      <div className="row g-4">
        {/* Recent Blogs */}
        <div className="col-12 col-lg-6">
          <div className="card border-0 shadow-sm rounded-4 h-100 bg-white">
            <div className="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 fw-bold text-dark">
                <i className="fas fa-newspaper me-2 text-primary"></i> Artikel Blog Terbaru
              </h6>
              <Link href="/admin/blogs" className="btn btn-sm btn-outline-primary">
                Lihat Semua
              </Link>
            </div>
            <div className="card-body p-0">
              {loading ? (
                <div className="p-4 text-center text-muted">Memuat data...</div>
              ) : blogs.length === 0 ? (
                <div className="p-4 text-center text-muted">Belum ada artikel blog.</div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="ps-3">Judul</th>
                        <th>Penulis</th>
                        <th>Tanggal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {blogs.slice(0, 5).map((blog) => (
                        <tr key={blog.id}>
                          <td className="ps-3 fw-semibold text-truncate" style={{ maxWidth: "220px" }}>
                            {blog.title}
                          </td>
                          <td className="small text-muted">{blog.author}</td>
                          <td className="small text-muted">{blog.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recent Events / Trainings */}
        <div className="col-12 col-lg-6">
          <div className="card border-0 shadow-sm rounded-4 h-100 bg-white">
            <div className="card-header bg-white border-bottom py-3 d-flex justify-content-between align-items-center">
              <h6 className="mb-0 fw-bold text-dark">
                <i className="fas fa-calendar-alt me-2 text-success"></i> Pelatihan & Event Terdaftar
              </h6>
              <Link href="/admin/events" className="btn btn-sm btn-outline-success">
                Lihat Semua
              </Link>
            </div>
            <div className="card-body p-0">
              {loading ? (
                <div className="p-4 text-center text-muted">Memuat data...</div>
              ) : events.length === 0 ? (
                <div className="p-4 text-center text-muted">Belum ada pelatihan atau event.</div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="ps-3">Nama Pelatihan / Event</th>
                        <th>Kategori</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.slice(0, 5).map((evt) => (
                        <tr key={evt.id}>
                          <td className="ps-3 fw-semibold text-truncate" style={{ maxWidth: "220px" }}>
                            {evt.title}
                          </td>
                          <td>
                            <span className="badge bg-secondary">{evt.tag}</span>
                          </td>
                          <td>
                            <span className="badge bg-success">Aktif</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
