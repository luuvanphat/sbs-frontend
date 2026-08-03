import SEO from '../../components/SEO/SEO';
import './Terms.css';

/**
 * Trang Điều khoản dịch vụ - Responsive mobile-first - Tuần 5
 */
function Terms() {
  const sections = [
    {
      title: '1. Phạm vi áp dụng',
      content:
        'Điều khoản này áp dụng cho toàn bộ khách hàng truy cập và sử dụng dịch vụ tư vấn, cung cấp thiết bị tự động hóa của SBS Techs.',
    },
    {
      title: '2. Chính sách bảo hành',
      content:
        'Sản phẩm được bảo hành theo chính sách của nhà sản xuất, thời hạn cụ thể được ghi rõ trong hợp đồng/báo giá gửi khách hàng.',
    },
    {
      title: '3. Chính sách đổi trả',
      content:
        'Khách hàng có thể yêu cầu đổi trả trong vòng 7 ngày nếu sản phẩm lỗi do nhà sản xuất, còn nguyên tem/nhãn.',
    },
    {
      title: '4. Bảo mật thông tin',
      content:
        'Mọi thông tin khách hàng cung cấp qua form Liên hệ chỉ được sử dụng cho mục đích tư vấn, báo giá, không chia sẻ cho bên thứ ba.',
    },
  ];

  return (
    <>
      <SEO title="Điều khoản dịch vụ" description="Điều khoản dịch vụ của SBS Techs." />
      <div className="terms-page">
        <div className="terms-page__banner">
          <div className="container">
            <h1>Điều khoản dịch vụ</h1>
          </div>
        </div>
        <div className="container terms-page__body">
          {sections.map((s) => (
            <section key={s.title} className="terms-page__section">
              <h3>{s.title}</h3>
              <p>{s.content}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

export default Terms;
