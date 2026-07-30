import { contactInfo } from '../../services/contactInfo';
import './About.css';

/**
 * Trang Giới thiệu - Responsive mobile-first - Tuần 5
 */
function About() {
  return (
    <div className="about-page">
      <div className="about-page__banner">
        <div className="container">
          <h1>Giới thiệu</h1>
          <p>Trang chủ / Giới thiệu</p>
        </div>
      </div>

      <div className="container about-page__body">
        <h2>{contactInfo.companyName}</h2>
        <p>
          SBS là đơn vị chuyên <strong>tư vấn, cung cấp và chuyển đổi thiết bị điện công nghiệp</strong>,
          đồng hành cùng doanh nghiệp trong việc lựa chọn giải pháp phù hợp với nhu cầu vận hành và sản xuất.
        </p>
        <p>
          Chúng tôi cung cấp đa dạng thiết bị điện, giải pháp điều khiển và tự động hóa cho nhiều ngành
          công nghiệp, từ <strong>tư vấn kỹ thuật, lựa chọn thiết bị</strong> đến{' '}
          <strong>thay thế và chuyển đổi thiết bị tương đương</strong>, giúp tối ưu hiệu suất, chi phí và
          độ ổn định của hệ thống.
        </p>
        <p className="about-page__slogan">
          SBS – Tư vấn đúng giải pháp | Cung cấp đúng thiết bị | Chuyển đổi đúng nhu cầu
        </p>

        <h3>Lĩnh vực chuyên môn</h3>
        <ul className="about-page__list">
          <li>Cung cấp thiết bị tự động hóa công nghiệp</li>
          <li>Thiết bị đo lường và kiểm định chất lượng</li>
          <li>Tư vấn và triển khai dự án công nghiệp</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
