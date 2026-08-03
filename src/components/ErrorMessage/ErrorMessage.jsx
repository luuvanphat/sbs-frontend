import Button from '../Button/Button';
import './ErrorMessage.css';

function ErrorMessage({ message = 'Không tải được dữ liệu.', onRetry }) {
  return (
    <div className="error-box" role="alert">
      <p>⚠️ {message}</p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry}>
          Thử lại
        </Button>
      )}
    </div>
  );
}
export default ErrorMessage;
