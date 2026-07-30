import { contactInfo } from '../../services/contactInfo';
import { categories } from '../../services/categories';
import './Footer.css';

/**
 * Footer: thông tin công ty, liên kết nhanh, danh mục sản phẩm - Tuần 4
 */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-sbs">SBS</span>
            <span className="footer__logo-techs">TECHS</span>
          </div>
        </div>

        <div className="footer__col">
          <h4>{contactInfo.companyName}</h4>
          <p>📍 {contactInfo.address}</p>
          <p>✉️ {contactInfo.email}</p>
          <p>☎️ {contactInfo.hotline} ({contactInfo.hotlineOwner})</p>
        </div>

        <div className="footer__col">
          <h4>Danh mục nổi bật</h4>
          <ul>
            {categories.slice(0, 5).map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {new Date().getFullYear()} {contactInfo.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
