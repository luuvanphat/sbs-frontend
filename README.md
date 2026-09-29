# SBS Techs – Frontend (React + Vite)

Xây dựng lại giao diện website **sbstechs.vn** — dự án thực tập Frontend tại
CÔNG TY TNHH CÔNG NGHỆ MỚI SBS (12 tuần).

## Công nghệ sử dụng
- React 18 + Vite
- React Router DOM v6 (kèm code-splitting bằng `React.lazy`/`Suspense`)
- CSS3 thuần (Flexbox/Grid, mobile-first)
- `react-helmet-async` (SEO động)
- `json-server` (REST API giả lập cho môi trường phát triển)
- IntersectionObserver API (hiệu ứng fade-in khi cuộn trang)

## Tính năng chính
- Navbar responsive kèm Mega Menu danh mục sản phẩm, ô tìm kiếm hoạt động thật
- Trang Sản phẩm: lọc theo danh mục (Sidebar) + tìm kiếm theo từ khóa
- Trang Chi tiết sản phẩm, lấy dữ liệu qua REST API
- Trang Liên hệ: form có validate + gửi API thật (loading/error state)
- Responsive 4 breakpoint: 480 / 768 / 1024 / 1280px
- SEO: title/meta description động theo từng trang
- Accessibility: điều hướng bàn phím, đóng Modal bằng Esc, `aria-*` cơ bản
- Hiệu năng: ảnh nén WebP, code-splitting theo route

## Cấu trúc thư mục
```
src/
  components/   # Navbar, MegaMenu, Footer, Sidebar, Button, Input, Modal,
                # ProductCard, Spinner, ErrorMessage, SEO, Layout
  pages/        # Home, About, Products, ProductDetail, Contact, Terms,
                # ComponentsDemo, NotFound
  hooks/        # useContactForm, useFadeInOnScroll, useFetch
  services/     # api.js (gọi REST API), categories.js, contactInfo.js, products.js
  styles/       # variables.css (biến màu, breakpoint dùng chung)
docs/
  cross-browser-checklist.md   # checklist kiểm thử đa trình duyệt
db.json         # dữ liệu cho REST API giả lập (json-server)
```

## Cài đặt và chạy (môi trường phát triển)
Cần chạy **2 lệnh song song** ở 2 terminal riêng: 1 chạy API giả lập, 1 chạy giao diện.

```bash
git clone <repo-url>
cd sbs-frontend
npm install

# copy file env mẫu
cp .env.example .env

# Terminal 1: chạy REST API giả lập (json-server), cổng 4000
npm run api

# Terminal 2: chạy giao diện React, cổng 5173
npm run dev
```
Mở http://localhost:5173

## Kết nối với API thật (khi công ty cấp API)
Sửa file `.env`:
```
VITE_API_BASE_URL=https://api-that-cua-cong-ty.vn
```
Không cần sửa code ở bất kỳ trang nào — toàn bộ lời gọi API đi qua `src/services/api.js`.
API thật cần trả về đúng cấu trúc dữ liệu như mô tả trong `db.json` (products, categories, contacts).

## Build production
```bash
npm run build      # xuất ra thư mục dist/
npm run preview    # xem thử bản build production
```

## Kiểm tra chất lượng mã nguồn
```bash
npm run lint
```

## Quy trình Git
- `main`: code ổn định, dùng để bàn giao/deploy
- `develop`: nhánh tích hợp
- `feature/*`: mỗi nhánh ứng với 1 giai đoạn phát triển — xem chi tiết trong `CHANGELOG.md`

## Hướng dẫn triển khai (Deploy)
Dự án là SPA (Single Page Application) thuần frontend, có thể deploy miễn phí lên **Vercel** hoặc **Netlify**:

1. Đẩy code lên GitHub (đã có sẵn).
2. Vào vercel.com (hoặc netlify.com) → "Import Project" → chọn repo `sbs-frontend`.
3. Cấu hình:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Thêm biến môi trường `VITE_API_BASE_URL` trỏ tới API thật (nếu đã có).
5. Deploy — nền tảng tự cấp domain dạng `sbs-frontend.vercel.app`.

> Lưu ý: `json-server` (`npm run api`) chỉ dùng để phát triển local, **không deploy lên production**. Khi lên production, ứng dụng luôn gọi tới `VITE_API_BASE_URL` cấu hình sẵn.

## Hướng phát triển tiếp theo
- Kết nối API thật thay cho `json-server`.
- Xoá route `/demo-components` khi bàn giao chính thức cho khách hàng cuối.
- Thêm phân trang (pagination) cho trang Sản phẩm khi số lượng sản phẩm lớn.
- Viết unit test cho `useContactForm`, `useFetch`.
- Tích hợp Google Analytics / Search Console sau khi có domain thật.

## Tác giả
Lưu Văn Phát – Thực tập sinh Frontend
Người hướng dẫn: anh Lê Công Việt

