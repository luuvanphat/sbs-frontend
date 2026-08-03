import './ProductCard.css';

/**
 * ProductCard: hiển thị thông tin 1 sản phẩm - Tuần 6
 */
function ProductCard({ product }) {
  return (
    <div className="product-card fade-in">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <span className="product-card__category">{product.category}</span>
      <h4 className="product-card__name">{product.name}</h4>
    </div>
  );
}

export default ProductCard;
