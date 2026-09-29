import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductCard from '../../components/ProductCard/ProductCard';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SEO from '../../components/SEO/SEO';
import { api } from '../../services/api';
import { useFetch } from '../../hooks/useFetch';
import { useFadeInOnScroll } from '../../hooks/useFadeInOnScroll';
import './Products.css';

/**
 * Trang Sản phẩm: dữ liệu lấy từ REST API thật (json-server) - Tuần 8/9
 * Hỗ trợ lọc theo danh mục (Sidebar) + tìm kiếm theo từ khóa (query string ?q=...)
 */
function Products() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('q') || '';

  const { data: products, loading, error, reload } = useFetch(
    () => api.getProducts(),
    []
  );

  const filtered = useMemo(() => {
    if (!products) return [];
    return products.filter((p) => {
      const matchCategory = activeCategory ? p.category === activeCategory : true;
      const matchKeyword = keyword
        ? p.name.toLowerCase().includes(keyword.toLowerCase())
        : true;
      return matchCategory && matchKeyword;
    });
  }, [products, activeCategory, keyword]);

  useFadeInOnScroll([filtered]);

  return (
    <>
      <SEO
        title="Sản phẩm"
        description="Danh sách thiết bị tự động hóa công nghiệp: Allen Bradley, Pilz, Rotronic, Encoders và nhiều hãng khác."
      />
      <div className="products-page">
      <div className="products-page__banner">
        <div className="container">
          <h1>Sản phẩm</h1>
          <p>Trang chủ / Sản phẩm{keyword && ` / Kết quả tìm kiếm cho "${keyword}"`}</p>
        </div>
      </div>

      <div className="container products-page__body">
        <Sidebar activeCategory={activeCategory} onSelect={setActiveCategory} />

        <div>
          {loading && <Spinner label="Đang tải danh sách sản phẩm..." />}
          {error && <ErrorMessage message={error} onRetry={reload} />}

          {!loading && !error && (
            <>
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
                <p className="products-page__empty">
                  Không tìm thấy sản phẩm phù hợp.
                </p>
              )}
            </>
          )}
        </div>
      </div>
      </div>
    </>
  );
}

export default Products;
