import { megaMenuGroups } from '../../services/categories';
import './MegaMenu.css';

/**
 * MegaMenu: hiển thị dropdown theo từng nhóm danh mục khi rê chuột - Tuần 4
 */
function MegaMenu() {
  return (
    <div className="mega-menu">
      <div className="mega-menu__inner">
        {megaMenuGroups.map((group) => (
          <div className="mega-menu__group" key={group.title}>
            <h4>{group.title}</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MegaMenu;
