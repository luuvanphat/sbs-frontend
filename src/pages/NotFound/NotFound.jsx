import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './NotFound.css';

/**
 * Trang 404 - hiển thị khi truy cập route không tồn tại - Tuần 10
 */
function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Không tìm thấy trang bạn yêu cầu.</p>
      <Link to="/">
        <Button>Về trang chủ</Button>
      </Link>
    </div>
  );
}
export default NotFound;
