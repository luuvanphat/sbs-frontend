import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { contactInfo } from '../../services/contactInfo';
import { useContactForm } from '../../hooks/useContactForm';
import './Contact.css';

/**
 * Trang Liên hệ: thông tin liên hệ + form (validate) - Tuần 6 & 7
 */
function Contact() {
  const { values, errors, submitted, handleChange, handleSubmit } = useContactForm();

  return (
    <div className="contact-page">
      <div className="contact-page__banner">
        <div className="container">
          <h1>Liên hệ</h1>
        </div>
      </div>

      <div className="container contact-page__body">
        <div className="contact-page__form-wrap">
          <h2>Liên hệ</h2>
          <p className="contact-page__desc">
            Bạn vui lòng điền đầy đủ thông tin và nội dung đề xuất của bạn vào biểu mẫu dưới đây,
            sau đó gửi cho chúng tôi, chúng tôi sẽ liên hệ với bạn ngay sau khi nhận được thông tin của bạn.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <Input
              placeholder="Tên của bạn"
              value={values.name}
              onChange={handleChange('name')}
              error={errors.name}
            />
            <Input
              placeholder="Số điện thoại"
              value={values.phone}
              onChange={handleChange('phone')}
              error={errors.phone}
            />
            <Input
              as="textarea"
              rows={5}
              placeholder="Nội dung"
              value={values.message}
              onChange={handleChange('message')}
              error={errors.message}
            />
            <Button type="submit">Gửi liên hệ</Button>
            {submitted && (
              <p className="contact-page__success">✅ Gửi liên hệ thành công! Chúng tôi sẽ phản hồi sớm nhất.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
