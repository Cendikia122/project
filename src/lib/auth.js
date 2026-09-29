import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fasel_consulting_jwt_secret_default_key';

/**
 * Memverifikasi hak akses admin dari Request Next.js
 * Mendukung autentikasi hybrid: Cookie, Bearer Token, dan Custom Header
 */
export function verifyAdmin(request) {
  // 1. Coba ambil dari Cookie fasel_admin_token
  let token = request.cookies?.get('fasel_admin_token')?.value;

  // 2. Coba ambil dari header Authorization: Bearer <token>
  if (!token) {
    const authHeader = request.headers?.get('authorization');
    if (authHeader && authHeader.toLowerCase().startsWith('bearer ')) {
      token = authHeader.substring(7).trim();
    }
  }

  // 3. Coba ambil dari custom header x-admin-token
  if (!token) {
    const customHeader = request.headers?.get('x-admin-token');
    if (customHeader) {
      token = customHeader.trim();
    }
  }

  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (err) {
    console.warn('[Auth] Token tidak valid atau kedaluwarsa:', err.message);
    return null;
  }
}
