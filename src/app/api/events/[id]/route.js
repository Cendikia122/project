import { NextResponse } from 'next/server';
import { getEventById, updateEvent, deleteEvent } from '@/lib/storage';
import { verifyAdmin } from '@/lib/auth';

// GET: Ambil detail event berdasarkan ID
export async function GET(request, { params }) {
  const { id } = params;
  try {
    const event = await getEventById(id);
    if (!event) {
      return NextResponse.json({ success: false, message: 'Event tidak ditemukan' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: event });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// PUT: Update event (Khusus Admin)
export async function PUT(request, { params }) {
  const user = verifyAdmin(request);
  if (!user) {
    return NextResponse.json({ success: false, message: 'Akses ditolak' }, { status: 401 });
  }

  const { id } = params;
  try {
    const body = await request.json();
    const result = await updateEvent(id, body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// DELETE: Hapus event (Khusus Admin)
export async function DELETE(request, { params }) {
  const user = verifyAdmin(request);
  if (!user) {
    return NextResponse.json({ success: false, message: 'Akses ditolak' }, { status: 401 });
  }

  const { id } = params;
  try {
    const result = await deleteEvent(id);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
