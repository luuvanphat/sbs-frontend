import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';
import banner from '../../assets/banner.jpg';
import './Home.css';

function Home() {
  return (
    <div className="home-hero"
    style={{ backgroundImage: `url(${banner})` }}  >
      <div className="home-hero__overlay" /> 
      <div className="container home-hero__inner">
        <h1>CÔNG TY TNHH CÔNG NGHỆ MỚI SBS</h1>
        <p>
          Chúng tôi cung cấp đa dạng thiết bị điện, giải pháp điều khiển và tự động hóa cho nhiều ngành công nghiệp,
           từ tư vấn kỹ thuật, lựa chọn thiết bị đến thay thế và chuyển đổi thiết bị tương đương, 
           giúp tối ưu hiệu suất, chi phí và độ ổn định của hệ thống. <br /> <br />
         <strong>SBS - Tư vấn đúng giải pháp | Cung cấp đúng thiết bị | Chuyển đổi đúng nhu cầu</strong>
        </p>
        <div className="home-hero__actions">
          <NavLink to="/san-pham"><Button>Xem sản phẩm</Button></NavLink>
          <NavLink to="/lien-he"><Button variant="outline">Liên hệ ngay</Button></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
