# Changelog

Ghi nhận các thay đổi chính qua từng tuần phát triển. Tham khảo thêm lịch sử commit chi tiết bằng `git log --oneline`.

## Tuần 12 — Hoàn thiện & bàn giao
- Rà soát toàn bộ route, kiểm thử luồng API thành công/thất bại (404).
- Bổ sung CHANGELOG, cập nhật README bàn giao đầy đủ.
- Viết hướng dẫn deploy (Vercel/Netlify) và bàn giao mã nguồn.

## Tuần 11 — Tối ưu hiệu năng
- Nén ảnh banner sang WebP (giảm ~85% dung lượng: 717KB → 105KB), dùng `<picture>` với fallback JPG.
- Code-splitting theo route bằng `React.lazy` + `Suspense`; trang chủ tải eager, các trang còn lại tải theo nhu cầu.
- Dọn cảnh báo lint, đảm bảo `npx oxlint src` sạch 0 lỗi/cảnh báo.

## Tuần 10 — SEO & Accessibility
- Thêm `react-helmet-async`, component `SEO` dùng chung cho title/meta description động theo từng trang.
- Modal hỗ trợ đóng bằng phím Esc, gán `role="dialog"`, `aria-modal`, focus khi mở.
- Sidebar chuyển từ `<li onClick>` sang `<button>` để hỗ trợ điều hướng bàn phím, `aria-pressed`.
- Thêm favicon thật (từ logo công ty), `lang="vi"`, `theme-color`.
- Bổ sung checklist kiểm thử đa trình duyệt (`docs/cross-browser-checklist.md`).

## Tuần 8-9 — Kết nối REST API thật
- Dựng REST API giả lập bằng `json-server` (`db.json`), script `npm run api`.
- `src/services/api.js` + hook `useFetch` dùng chung, dễ đổi `VITE_API_BASE_URL` sang API thật.
- Trang Sản phẩm chuyển từ mock data sang gọi API thật; thêm ô tìm kiếm (`?q=`).
- Trang Chi tiết sản phẩm (`/san-pham/:id`), trang 404.
- Form Liên hệ gửi thật qua `POST /contacts`, có trạng thái đang gửi/lỗi gửi.
- Gắn logo và banner thật của công ty vào Navbar/Footer/Home.

## Tuần 7 — Hiệu ứng động & validate
- Hiệu ứng hover/transition cho Button, ProductCard.
- Fade-in khi cuộn trang bằng `IntersectionObserver` (`useFadeInOnScroll`).
- Validate form Liên hệ: họ tên, email, số điện thoại.

## Tuần 6 — Trang Sản phẩm & Liên hệ
- Mock data sản phẩm, component `ProductCard`.
- Trang Sản phẩm: lưới sản phẩm + Sidebar lọc theo danh mục.
- Trang Liên hệ: thông tin công ty + form.

## Tuần 5 — Responsive Web Design
- Trang Giới thiệu, Điều khoản dịch vụ; CSS Grid/Flexbox mobile-first.
- Breakpoint dùng chung: 480/768/1024/1280px.

## Tuần 4 — Navbar, MegaMenu, Footer, Sidebar
- Navbar (topbar hotline/email, logo, menu, tìm kiếm), MegaMenu theo nhóm danh mục.
- Footer (thông tin công ty), Sidebar (lọc danh mục), Layout dùng chung.

## Tuần 3 — Thư viện UI component
- Component Button (primary/outline), Input (label + lỗi), Modal (React Portal).
- Trang `/demo-components` kiểm thử trực quan.

## Tuần 2 — Kiến trúc React & routing
- Cấu trúc thư mục component-based, cài `react-router-dom`, route rỗng cho 4 trang chính.
- Dữ liệu dùng chung: `categories.js`, `contactInfo.js`.

## Tuần 1 — Khởi tạo dự án
- Khởi tạo Vite + React, cấu hình ESLint/Prettier, Git, README ban đầu.
