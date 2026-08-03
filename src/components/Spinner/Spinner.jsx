import './Spinner.css';

function Spinner({ label = 'Đang tải dữ liệu...' }) {
  return (
    <div className="spinner-wrap" role="status" aria-live="polite">
      <div className="spinner" />
      <span>{label}</span>
    </div>
  );
}
export default Spinner;
