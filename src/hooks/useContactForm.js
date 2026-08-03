import { useState } from 'react';

/**
 * Hook quản lý state + validate cho form Liên hệ
 * - Họ tên: không được để trống
 * - Email: đúng định dạng
 * - Số điện thoại: đúng định dạng (VN, 9-11 số)
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(0|\+84)[0-9]{9,10}$/;

const initialState = { name: '', email: '', phone: '', message: '' };

export function useContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Vui lòng nhập họ tên.';
    if (!values.email.trim()) {
      next.email = 'Vui lòng nhập email.';
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
      next.email = 'Email không đúng định dạng.';
    }
    if (!values.phone.trim()) {
      next.phone = 'Vui lòng nhập số điện thoại.';
    } else if (!PHONE_REGEX.test(values.phone.trim())) {
      next.phone = 'Số điện thoại không đúng định dạng.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = validate();
    setSubmitted(ok);
    if (ok) {
      // TODO: gọi API gửi thông tin liên hệ
      console.log('Gửi liên hệ:', values);
    }
    return ok;
  };

  return { values, errors, submitted, handleChange, handleSubmit };
}
