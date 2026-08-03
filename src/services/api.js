/**
 * Client gọi REST API dùng chung - Tuần 8
 * BASE_URL lấy từ biến môi trường, mặc định trỏ tới json-server chạy local (npm run api).
 * Khi công ty cấp API thật, chỉ cần đổi VITE_API_BASE_URL trong file .env, không sửa code trang nào khác.
 */
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    const err = new Error(`Yêu cầu thất bại (mã lỗi ${res.status})`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

export const api = {
  getProducts: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/products${query ? `?${query}` : ''}`);
  },
  getProductById: (id) => request(`/products/${id}`),
  getCategories: () => request('/categories'),
  submitContact: (payload) =>
    request('/contacts', { method: 'POST', body: JSON.stringify(payload) }),
};
