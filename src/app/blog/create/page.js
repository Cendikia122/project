"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlog() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    date: "",
    text: "",
    thumb: "4.jpg",
    thumbFull: "b1.jpg"
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/blog");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Tambah Blog Baru</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
        <input
          type="text"
          name="title"
          placeholder="Judul Blog"
          value={form.title}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border p-2"
        />
        <textarea
          name="text"
          placeholder="Konten Blog"
          value={form.text}
          onChange={handleChange}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Simpan
        </button>
      </form>
    </div>
  );
}
