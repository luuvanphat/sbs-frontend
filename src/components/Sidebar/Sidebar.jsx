import { categories } from '../../services/categories';
import './Sidebar.css';

/**
 * Sidebar: lọc sản phẩm theo danh mục ở trang Sản phẩm - Tuần 4/6
 */
function Sidebar({ activeCategory, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">DANH MỤC SẢN PHẨM</div>
      <ul className="sidebar__list">
        <li
          className={!activeCategory ? 'is-active' : ''}
          onClick={() => onSelect?.(null)}
        >
          Tất cả sản phẩm
        </li>
        {categories.map((c) => (
          <li
            key={c}
            className={activeCategory === c ? 'is-active' : ''}
            onClick={() => onSelect?.(c)}
          >
            {c}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
