# SBS Techs – Frontend (React + Vite)

Dự án xây dựng lại giao diện website **sbstechs.vn** theo hướng hiện đại hoá.
Thực hiện trong quá trình thực tập tại CÔNG TY TNHH CÔNG NGHỆ MỚI SBS.

## Công nghệ sử dụng
- React 18 + Vite
- React Router DOM
- CSS3 (mobile-first, Flexbox/Grid)
- JavaScript ES6+

## Cấu trúc thư mục
```
src/
  components/   # UI dùng chung: Button, Input, Modal, Navbar, MegaMenu, Footer, Sidebar, ProductCard...
  pages/        # Trang chính: Home, About, Products, Contact, Terms, ComponentsDemo
  hooks/        # Custom hooks: useFadeInOnScroll, useContactForm...
  services/     # Dữ liệu / gọi API: categories, products, contactInfo
  context/      # React Context dùng chung (nếu có)
  styles/       # Biến CSS dùng chung (màu sắc, breakpoint)
```

## Quy ước coding
- Tên component: PascalCase (`Navbar.jsx`)
- Tên hook: camelCase, bắt đầu bằng `use`
- CSS module riêng cho từng component (`Navbar.css`)
- Breakpoint dùng chung: 480px / 768px / 1024px / 1280px

## Chạy dự án
```bash
npm install
npm run dev
```
