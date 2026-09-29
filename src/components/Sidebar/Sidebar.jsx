import { categories } from '../../services/categories';
import './Sidebar.css';

/**
 * Sidebar: lọc sản phẩm theo danh mục ở trang Sản phẩm - Tuần 4/6
 * Dùng <button> thay vì <li onClick> để hỗ trợ điều hướng bàn phím - Tuần 10
 */
function Sidebar({ activeCategory, onSelect }) {
  return (
    <aside className="sidebar" aria-label="Bộ lọc danh mục sản phẩm">
      <div className="sidebar__header">DANH MỤC SẢN PHẨM</div>
      <ul className="sidebar__list">
        <li>
          <button
            className={!activeCategory ? 'is-active' : ''}
            onClick={() => onSelect?.(null)}
            aria-pressed={!activeCategory}
          >
            Tất cả sản phẩm
          </button>
        </li>
        {categories.map((c) => (
          <li key={c}>
            <button
              className={activeCategory === c ? 'is-active' : ''}
              onClick={() => onSelect?.(c)}
              aria-pressed={activeCategory === c}
            >
              {c}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
