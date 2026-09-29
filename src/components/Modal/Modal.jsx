import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

/**
 * Modal dùng React Portal để hiển thị đè lên nội dung trang - Tuần 3
 * Bổ sung accessibility: đóng bằng phím Esc, gán role/aria đúng chuẩn - Tuần 10
 */
function Modal({ open, title, onClose, children }) {
  const boxRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', handleKeyDown);
    boxRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        ref={boxRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-box__header">
          <h3 id="modal-title">{title}</h3>
          <button className="modal-box__close" onClick={onClose} aria-label="Đóng hộp thoại">
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
