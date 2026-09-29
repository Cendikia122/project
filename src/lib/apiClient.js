/**
 * Client-side fetch helper untuk Admin Panel Fasel Consulting.
 * Otomatis menyisipkan credentials dan header Authorization Bearer dari localStorage.
 */
export async function adminFetch(url, options = {}) {
  let token = null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('fasel_admin_token');
  }

  const headers = {
    ...(options.headers || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
    headers['x-admin-token'] = token;
  }

  return fetch(url, {
    ...options,
    credentials: 'include',
    headers,
  });
}
