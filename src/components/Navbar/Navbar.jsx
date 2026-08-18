import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MegaMenu from '../MegaMenu/MegaMenu';
import { contactInfo } from '../../services/contactInfo';
import './Navbar.css';
import logo from '../../assets/logo.png';

/**
 * Navbar: thanh hotline/email phía trên, logo, menu chính, ô tìm kiếm - Tuần 4
 */
function Navbar() {
  const [showMega, setShowMega] = useState(false);

  const navItem = ({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`;

  return (
    <header className="navbar">
      <div className="navbar__topbar">
        <div className="container navbar__topbar-inner">
          <span>HOTLINE {contactInfo.hotline} || EMAIL: {contactInfo.email.toUpperCase()}</span>
        </div>
      </div>

      <div className="navbar__main">
        <div className="container navbar__main-inner">
          <NavLink to="/" className="navbar__logo">
            <img src={logo} alt="SBS Techs" className="navbar__logo-img" />
          </NavLink>

          <nav className="navbar__menu">
            <NavLink to="/" className={navItem} end>Trang chủ</NavLink>
            <NavLink to="/gioi-thieu" className={navItem}>Giới thiệu</NavLink>
            <div
              className="navbar__menu-item-hover"
              onMouseEnter={() => setShowMega(true)}
              onMouseLeave={() => setShowMega(false)}
            >
              <NavLink to="/san-pham" className={navItem}>Sản phẩm</NavLink>
              {showMega && <MegaMenu />}
            </div>
            <NavLink to="/lien-he" className={navItem}>Liên hệ</NavLink>
          </nav>

          <form className="navbar__search" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Tìm kiếm..." />
            <button type="submit" aria-label="Tìm kiếm">🔍</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
