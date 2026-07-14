import { useMemo, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../services/products';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import './Products.css';

/**
 * Trang Sản phẩm: lưới sản phẩm kết hợp Sidebar lọc theo danh mục - Tuần 6
 * + Hiệu ứng fade-in khi cuộn trang - Tuần 7
 */
function Products() {
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = useMemo(() => {
    if (!activeCategory) return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  useFadeInOnScroll([filtered]);

  return (
    <div className="products-page">
      <div className="products-page__banner">
        <div className="container">
          <h1>Sản phẩm</h1>
          <p>Trang chủ / Sản phẩm</p>
        </div>
      </div>

      <div className="container products-page__body">
        <Sidebar activeCategory={activeCategory} onSelect={setActiveCategory} />

        <div>
          <div className="products-page__count">
            Hiển thị {filtered.length} / {products.length} kết quả
          </div>
          {filtered.length > 0 ? (
            <div className="products-page__grid">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <p className="products-page__empty">Không có sản phẩm trong danh mục này.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
