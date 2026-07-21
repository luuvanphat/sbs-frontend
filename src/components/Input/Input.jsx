import './Input.css';

/**
 * Input dùng chung - hỗ trợ label và hiển thị lỗi - Tuần 3
 */
function Input({ label, error, as = 'input', ...rest }) {
  const Tag = as; // 'input' hoặc 'textarea'
  return (
    <div className="field">
      {label && <label className="field__label">{label}</label>}
      <Tag className={`field__control ${error ? 'field__control--error' : ''}`} {...rest} />
      {error && <span className="field__error">{error}</span>}
    </div>
  );
}

export default Input;
