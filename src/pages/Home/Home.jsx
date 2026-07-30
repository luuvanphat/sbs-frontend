import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Home.css';

function Home() {
  return (
    <div className="home-hero">
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
  );
}

export default Home;
