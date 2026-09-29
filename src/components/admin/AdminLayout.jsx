"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { adminFetch } from "@/lib/apiClient";

export default function AdminLayout({ children, title, actionButton }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [adminUser, setAdminUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    // 1. Cek local session untuk rendering instan
    let hasLocal = false;
    if (typeof window !== "undefined") {
      const localUser = localStorage.getItem("fasel_admin_user");
      const localToken = localStorage.getItem("fasel_admin_token");
      if (localUser && localToken) {
        try {
          const parsed = JSON.parse(localUser);
          setAdminUser(parsed);
          setLoading(false);
          hasLocal = true;
        } catch (e) {
          // ignore parse error
        }
      }
    }

    // 2. Verifikasi ke backend API
    async function checkAuth() {
      try {
        const res = await adminFetch("/api/auth/me", { cache: "no-store" });
        const data = await res.json();

        if (isMounted) {
          if (res.ok && data.authenticated) {
            setAdminUser(data.user);
            setLoading(false);
            if (typeof window !== "undefined") {
              localStorage.setItem("fasel_admin_user", JSON.stringify(data.user));
            }
          } else {
            // Jika token server tidak valid dan tidak ada session lokal, redirect ke login
            if (!hasLocal) {
              setLoading(false);
              window.location.replace("/admin/login");
            }
          }
        }
      } catch (err) {
        if (isMounted) {
          if (!hasLocal) {
            setLoading(false);
            window.location.replace("/admin/login");
          } else {
            setLoading(false);
          }
        }
      }
    }

    checkAuth();

    // 3. Batas waktu maksimal spinner 1.5 detik
    const timer = setTimeout(() => {
      if (isMounted) {
        setLoading((currentLoading) => {
          if (currentLoading) {
            if (!hasLocal) {
              window.location.replace("/admin/login");
            }
            return false;
          }
          return false;
        });
      }
    }, 1500);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  const handleLogout = async () => {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem("fasel_admin_token");
        localStorage.removeItem("fasel_admin_user");
      }
      await adminFetch("/api/auth/logout", { method: "POST" });
      toast.success("Berhasil keluar.");
      window.location.replace("/admin/login");
    } catch (err) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("fasel_admin_token");
        localStorage.removeItem("fasel_admin_user");
      }
      window.location.replace("/admin/login");
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f8f9fa" }}>
        <div className="text-center p-4">
          <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted fw-bold mb-2">Memuat Fasel Admin...</p>
          <div className="mt-3">
            <a href="/admin/login" className="btn btn-outline-primary btn-sm">
              <i className="fas fa-sign-in-alt me-1"></i> Ke Halaman Login
            </a>
          </div>
        </div>
      </div>
    );
  }

  const navLinks = [
    { href: "/admin", label: "Dashboard", icon: "fas fa-tachometer-alt" },
    { href: "/admin/blogs", label: "Kelola Blog", icon: "fas fa-newspaper" },
    { href: "/admin/events", label: "Kelola Pelatihan & Event", icon: "fas fa-calendar-alt" },
  ];

  return (
    <div className="fasel-admin-wrapper" style={{ minHeight: "100vh", backgroundColor: "#f4f6f9", display: "flex", flexDirection: "column" }}>
      <style>{`
        .fasel-admin-wrapper .btn {
          padding: 0.375rem 0.75rem !important;
          font-size: 0.875rem !important;
          border-radius: 0.375rem !important;
          text-transform: none !important;
          letter-spacing: normal !important;
        }
        .fasel-admin-wrapper .btn-sm {
          padding: 0.25rem 0.5rem !important;
          font-size: 0.8125rem !important;
        }
        .fasel-admin-wrapper .btn-primary {
          background-color: #0d6efd !important;
          border-color: #0d6efd !important;
          color: #ffffff !important;
        }
        .fasel-admin-wrapper .btn-success {
          background-color: #198754 !important;
          border-color: #198754 !important;
          color: #ffffff !important;
        }
        .fasel-admin-wrapper .btn-danger {
          background-color: #dc3545 !important;
          border-color: #dc3545 !important;
          color: #ffffff !important;
        }
        .fasel-admin-wrapper .btn-outline-primary {
          background-color: transparent !important;
          border-color: #0d6efd !important;
          color: #0d6efd !important;
        }
        .fasel-admin-wrapper .btn-outline-primary:hover {
          background-color: #0d6efd !important;
          color: #ffffff !important;
        }
        .fasel-admin-wrapper .btn-outline-secondary {
          background-color: transparent !important;
          border-color: #6c757d !important;
          color: #6c757d !important;
        }
        .fasel-admin-wrapper .btn-outline-secondary:hover {
          background-color: #6c757d !important;
          color: #ffffff !important;
        }
        .fasel-admin-wrapper .btn-outline-success {
          background-color: transparent !important;
          border-color: #198754 !important;
          color: #198754 !important;
        }
        .fasel-admin-wrapper .btn-outline-success:hover {
          background-color: #198754 !important;
          color: #ffffff !important;
        }
        .fasel-admin-wrapper .btn-outline-danger {
          background-color: transparent !important;
          border-color: #dc3545 !important;
          color: #dc3545 !important;
        }
        .fasel-admin-wrapper .btn-outline-danger:hover {
          background-color: #dc3545 !important;
          color: #ffffff !important;
        }
        .fasel-admin-wrapper .form-control, .fasel-admin-wrapper .form-select {
          font-size: 0.9rem !important;
          border: 1px solid #ced4da !important;
          border-radius: 0.375rem !important;
          padding: 0.5rem 0.75rem !important;
        }
        .fasel-admin-wrapper .table {
          font-size: 0.9rem !important;
        }
      `}</style>

      {/* Top Header Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow-sm sticky-top">
        <div className="container-fluid">
          <Link href="/admin" className="navbar-brand fw-bold d-flex align-items-center gap-2">
            <span style={{ color: "#f8b739" }}>FASEL</span>
            <span className="badge bg-secondary">Admin Panel</span>
          </Link>

          <div className="d-flex align-items-center gap-3">
            <div className="navbar-nav d-none d-md-flex flex-row gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link px-3 py-2 rounded ${isActive ? "active bg-primary text-white fw-bold" : "text-light"}`}
                  >
                    <i className={`${link.icon} me-1`}></i> {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="vr text-secondary d-none d-md-block" style={{ height: "24px" }}></div>

            <Link href="/" target="_blank" className="btn btn-outline-light btn-sm d-flex align-items-center gap-1">
              <i className="fas fa-external-link-alt"></i>
              <span className="d-none d-sm-inline">Lihat Web</span>
            </Link>

            <button onClick={handleLogout} className="btn btn-danger btn-sm d-flex align-items-center gap-1">
              <i className="fas fa-sign-out-alt"></i>
              <span className="d-none d-sm-inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Sub Header / Page Title Banner */}
      <div className="bg-white border-bottom py-3 px-4 shadow-sm">
        <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div>
            <h4 className="mb-0 fw-bold text-dark">{title}</h4>
            <small className="text-muted">Login sebagai: <strong>{adminUser?.username || "Admin"}</strong></small>
          </div>
          {actionButton && <div>{actionButton}</div>}
        </div>
      </div>

      {/* Main Content Body */}
      <main className="container-fluid p-4 flex-grow-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-top py-3 text-center text-muted small">
        &copy; {new Date().getFullYear()} Fasel Consulting • Admin Content Management System
      </footer>
    </div>
  );
}
