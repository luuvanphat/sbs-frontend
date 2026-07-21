import { createPortal } from 'react-dom';
import './Modal.css';

/**
 * Modal dùng React Portal để hiển thị đè lên nội dung trang - Tuần 3
 */
function Modal({ open, title, onClose, children }) {
  if (!open) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-box__header">
          <h3>{title}</h3>
          <button className="modal-box__close" onClick={onClose} aria-label="Đóng">
            ×
          </button>
        </div>
        <div className="modal-box__body">{children}</div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
