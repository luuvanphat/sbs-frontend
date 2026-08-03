import { Link, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SEO from '../../components/SEO/SEO';
import { api } from '../../services/api';
import { useFetch } from '../../hooks/useFetch';
import './ProductDetail.css';

/**
 * Trang Chi tiết sản phẩm - Tuần 9
 * Lấy dữ liệu theo id từ URL (/san-pham/:id), gọi API GET /products/:id
 */
function ProductDetail() {
  const { id } = useParams();
  const { data: product, loading, error, reload } = useFetch(
    () => api.getProductById(id),
    [id]
  );

  if (loading) return <Spinner label="Đang tải thông tin sản phẩm..." />;
  if (error) return <ErrorMessage message={error} onRetry={reload} />;
  if (!product) return null;

  return (
    <>
      <SEO title={product.name} description={product.description} />
      <div className="product-detail">
      <div className="container product-detail__breadcrumb">
        <Link to="/san-pham">Sản phẩm</Link> / <span>{product.category}</span>
      </div>

      <div className="container product-detail__body">
        <div className="product-detail__image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail__info">
          <span className="product-detail__category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="product-detail__desc">{product.description}</p>

          <table className="product-detail__specs">
            <tbody>
              {product.specs?.map((s) => (
                <tr key={s.label}>
                  <td>{s.label}</td>
                  <td>{s.value}</td>
                </tr>
              ))}
              <tr>
                <td>Hãng sản xuất</td>
                <td>{product.brand}</td>
              </tr>
              <tr>
                <td>Xuất xứ</td>
                <td>{product.origin}</td>
              </tr>
            </tbody>
          </table>

          <Link to="/lien-he">
            <Button>Yêu cầu báo giá</Button>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default ProductDetail;
