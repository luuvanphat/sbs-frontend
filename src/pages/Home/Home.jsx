import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';
import SEO from '../../components/SEO/SEO';
import bannerWebp from '../../assets/banner.webp';
import bannerJpg from '../../assets/banner.jpg';
import './Home.css';

/**
 * Trang chủ - Tuần 2/5
 * Ảnh banner tối ưu hiệu năng: dùng <picture> để trình duyệt ưu tiên tải WebP
 * (nhẹ hơn ~85% so với JPG gốc), fallback JPG cho trình duyệt cũ - Tuần 11
 */
function Home() {
  return (
    <>
      <SEO title="Trang chủ" description="Tư vấn, cung cấp và chuyển đổi thiết bị điện công nghiệp - SBS Techs." />
      <div className="home-hero">
        <picture className="home-hero__picture">
          <source srcSet={bannerWebp} type="image/webp" />
          <img src={bannerJpg} alt="" className="home-hero__bg" fetchpriority="high" />
        </picture>
        <div className="home-hero__overlay" />
        <div className="container home-hero__inner">
          <h1>CÔNG TY TNHH CÔNG NGHỆ MỚI SBS</h1>
          <p>
            Tư vấn đúng giải pháp | Cung cấp đúng thiết bị | Chuyển đổi đúng nhu cầu
          </p>
          <div className="home-hero__actions">
            <NavLink to="/san-pham"><Button>Xem sản phẩm</Button></NavLink>
            <NavLink to="/lien-he"><Button variant="outline">Liên hệ ngay</Button></NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
