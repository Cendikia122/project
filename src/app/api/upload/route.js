import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { verifyAdmin } from '@/lib/auth';

export async function POST(request) {
  const user = verifyAdmin(request);
  if (!user) {
    return NextResponse.json({ success: false, message: 'Akses ditolak' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ success: false, message: 'File tidak ditemukan' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadsDir = path.join(process.cwd(), 'public', 'assets', 'img', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const ext = path.extname(file.name) || '.jpg';
    const cleanName = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
    const fileName = `${cleanName}_${Date.now()}${ext}`;
    const filePath = path.join(uploadsDir, fileName);

    fs.writeFileSync(filePath, buffer);

    const fileUrl = `/assets/img/uploads/${fileName}`;

    return NextResponse.json({
      success: true,
      message: 'Upload berhasil',
      fileName,
      url: fileUrl,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
