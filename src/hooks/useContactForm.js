import { useState } from 'react';
import { api } from '../services/api';

/**
 * Hook quản lý state + validate + gửi API cho form Liên hệ - Tuần 7/8
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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setSubmitError(null);
    if (!validate()) return false;

    setSubmitting(true);
    try {
      await api.submitContact({ ...values, createdAt: new Date().toISOString() });
      setSubmitted(true);
      setValues(initialState);
      return true;
    } catch (err) {
      console.error('Loi gui lien he:', err);
      setSubmitError('Gửi liên hệ thất bại, vui lòng thử lại sau.');
      return false;
    } finally {
      setSubmitting(false);
    }
  };

  return { values, errors, submitted, submitting, submitError, handleChange, handleSubmit };
}
