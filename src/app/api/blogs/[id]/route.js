import { NextResponse } from 'next/server';
import { getBlogByIdOrSlug, updateBlog, deleteBlog } from '@/lib/storage';
import { verifyAdmin } from '@/lib/auth';

// GET: Ambil detail blog berdasarkan ID atau SLUG
export async function GET(request, { params }) {
  const { id } = params;
  try {
    const blog = await getBlogByIdOrSlug(id);
    if (!blog) {
      return NextResponse.json({ success: false, message: 'Artikel tidak ditemukan' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: blog });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// PUT: Update blog (Khusus Admin)
export async function PUT(request, { params }) {
  const user = verifyAdmin(request);
  if (!user) {
    return NextResponse.json({ success: false, message: 'Akses ditolak' }, { status: 401 });
  }

  const { id } = params;
  try {
    const body = await request.json();
    const result = await updateBlog(id, body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// DELETE: Hapus blog (Khusus Admin)
export async function DELETE(request, { params }) {
  const user = verifyAdmin(request);
  if (!user) {
    return NextResponse.json({ success: false, message: 'Akses ditolak' }, { status: 401 });
  }

  const { id } = params;
  try {
    const result = await deleteBlog(id);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
