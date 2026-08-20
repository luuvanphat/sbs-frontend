import { contactInfo } from '../../services/contactInfo';
import logo from '../../assets/logo.png'; 
import './Footer.css';

/**
 * Footer: thông tin công ty, liên kết nhanh, danh mục sản phẩm - Tuần 4
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
        <img src={logo} alt="SBS Techs" className="footer__logo-img" />
        </div>

        <div className="footer__col">
          <h4>{contactInfo.companyName}</h4>
          <p>📍 {contactInfo.address}</p>
          <p>✉️ {contactInfo.email}</p>
          <p>☎️ {contactInfo.hotline} ({contactInfo.hotlineOwner})</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
