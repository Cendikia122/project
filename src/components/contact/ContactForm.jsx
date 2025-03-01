"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  // Fungsi menangani perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi untuk mengirim data ke WhatsApp
  const handleForm = (event) => {
    event.preventDefault();

    // Format pesan WhatsApp
    const phoneNumber = "6281234567890"; // Ganti dengan nomor tujuan
    const message = `Halo, saya ${formData.name}%0AEmail: ${formData.email}%0AHP: ${formData.phone}%0APesan: ${formData.comments}. Terima kasih!`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Reset form dan tampilkan notifikasi
    setFormData({ name: "", email: "", phone: "", comments: "" });
    toast.success("Pesan Anda telah dikirim ke WhatsApp!");

    // Redirect ke WhatsApp
    window.open(url, "_blank");
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleForm}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                autoComplete="off"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                autoComplete="off"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone"
                type="text"
                autoComplete="off"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                placeholder="Tell Us About Project *"
                autoComplete="off"
                required
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button type="submit" name="submit" id="submit">
              <i className="fa fa-paper-plane"></i> Get in Touch
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
