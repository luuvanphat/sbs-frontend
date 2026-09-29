# SBS Techs – Frontend (React + Vite)

Xây dựng lại giao diện website **sbstechs.vn** — dự án thực tập tại
CÔNG TY TNHH CÔNG NGHỆ MỚI SBS.

## Công nghệ sử dụng
- React 18 + Vite
- React Router DOM v6
- CSS3 thuần (Flexbox/Grid, mobile-first)
- IntersectionObserver API (hiệu ứng fade-in)

## Tính năng chính
- Navbar responsive kèm Mega Menu danh mục sản phẩm
- Trang Sản phẩm: lọc theo danh mục qua Sidebar
- Trang Liên hệ: form có validate (tên/email/số điện thoại)
- Responsive 4 breakpoint: 480 / 768 / 1024 / 1280px
- Hiệu ứng động khi hover và khi cuộn trang

## Cấu trúc thư mục
\`\`\`
src/
  components/   # Navbar, MegaMenu, Footer, Sidebar, Button, Input, Modal, ProductCard, Layout
  pages/        # Home, About, Products, Contact, Terms, ComponentsDemo
  hooks/        # useContactForm, useFadeInOnScroll
  services/     # categories.js, contactInfo.js, products.js (mock data)
  styles/       # variables.css (biến màu, breakpoint dùng chung)
\`\`\`

## Cài đặt và chạy
\`\`\`bash
git clone https://github.com/luuvanphat/sbs-frontend.git
cd sbs-frontend
npm install
npm run dev
\`\`\`
Mở http://localhost:5173

## Build production
\`\`\`bash
npm run build
npm run preview
\`\`\`

## Quy trình Git
- `main`: code ổn định
- `develop`: nhánh tích hợp
- `feature/*`: mỗi nhánh ứng với 1 tuần phát triển (xem lịch sử commit)

