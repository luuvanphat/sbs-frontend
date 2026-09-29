import { Link } from 'react-router-dom';
import './ProductCard.css';

/**
 * ProductCard: hiển thị thông tin 1 sản phẩm, click vào để xem chi tiết - Tuần 6/9
 */
function ProductCard({ product }) {
  return (
    <Link to={`/san-pham/${product.id}`} className="product-card fade-in">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <span className="product-card__category">{product.category}</span>
      <h4 className="product-card__name">{product.name}</h4>
    </Link>
  );
}

export default ProductCard;
