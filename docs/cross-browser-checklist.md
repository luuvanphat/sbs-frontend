# Checklist kiểm thử đa trình duyệt & thiết bị (Tuần 10)

Đánh dấu ✅/❌ sau khi tự kiểm tra trên máy bạn. Chụp ảnh mỗi ô ✅ đầu tiên trên mỗi trình duyệt làm minh chứng.

## Trình duyệt cần kiểm thử

| Trình duyệt | Trang chủ | Sản phẩm (lọc + tìm kiếm) | Chi tiết SP | Liên hệ (validate) | Responsive |
|---|---|---|---|---|---|
| Chrome (mới nhất) | ☐ | ☐ | ☐ | ☐ | ☐ |
| Firefox (mới nhất) | ☐ | ☐ | ☐ | ☐ | ☐ |
| Microsoft Edge | ☐ | ☐ | ☐ | ☐ | ☐ |
| Safari (nếu có máy Mac/iPhone) | ☐ | ☐ | ☐ | ☐ | ☐ |

## Danh sách kiểm tra chi tiết
- [ ] Font chữ tiếng Việt (dấu) hiển thị đúng, không vỡ chữ.
- [ ] Mega Menu sổ đúng vị trí, không bị tràn ra ngoài màn hình.
- [ ] Ảnh sản phẩm tải đúng, không vỡ layout khi ảnh lỗi.
- [ ] Form Liên hệ: bấm Tab di chuyển qua các trường theo đúng thứ tự.
- [ ] Modal (trang /demo-components): nhấn phím `Esc` đóng được modal.
- [ ] Không có lỗi nào hiện trong Console (F12 → Console) ở mỗi trình duyệt.
- [ ] Kiểm tra trên điện thoại thật (không chỉ giả lập DevTools) ít nhất 1 lần.

## Công cụ hỗ trợ
- Chrome DevTools → Lighthouse: chạy audit Performance/Accessibility/SEO, chụp lại điểm số.
- responsively.app hoặc trang https://www.browserstack.com/responsive (bản miễn phí) nếu không có nhiều thiết bị thật.

## Lỗi phát hiện & cách xử lý (điền khi kiểm thử thực tế)
| Lỗi phát hiện | Trình duyệt | Cách khắc phục |
|---|---|---|
| (ví dụ) Mega Menu bị che khuất trên Firefox ở màn 1024px | Firefox | Thêm `overflow: visible` cho `.navbar__main` |
