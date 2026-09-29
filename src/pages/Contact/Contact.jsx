import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import ContactDetails from '../../components/ContactDetails/ContactDetails';
import SEO from '../../components/SEO/SEO';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../../services/contactInfo';
import { useContactForm } from '../../hooks/useContactForm';
import './Contact.css';

/**
 * Trang Liên hệ: thông tin liên hệ + form (validate) - Tuần 6 & 7
 */
function Contact() {
  const { values, errors, submitted, submitting, submitError, handleChange, handleSubmit } =
    useContactForm();

  return (
    <>
      <SEO
        title="Liên hệ"
        description="Liên hệ Công ty TNHH Công Nghệ Mới SBS để được tư vấn thiết bị tự động hóa công nghiệp."
      />
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
              label="Tên của bạn"
              placeholder="Tên của bạn"
              value={values.name}
              onChange={handleChange('name')}
              error={errors.name}
            />
            <Input
              label="Email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange('email')}
              error={errors.email}
            />
            <Input
              label="Số điện thoại"
              placeholder="Số điện thoại"
              value={values.phone}
              onChange={handleChange('phone')}
              error={errors.phone}
            />
            <Input
              as="textarea"
              rows={5}
              label="Nội dung"
              placeholder="Nội dung"
              value={values.message}
              onChange={handleChange('message')}
              error={errors.message}
            />
            <Button type="submit" disabled={submitting}>
              {submitting ? 'Đang gửi...' : 'Gửi liên hệ'}
            </Button>
            {submitted && (
              <p className="contact-page__success" role="status" aria-live="polite">
                <CheckCircle2 aria-hidden="true" size={16} />
                Gửi liên hệ thành công! Chúng tôi sẽ phản hồi sớm nhất.
              </p>
            )}
            {submitError && (
              <p className="contact-page__error" role="alert">
                <AlertCircle aria-hidden="true" size={16} />
                {submitError}
              </p>
            )}
          </form>
        </div>

        <aside className="contact-page__info">
          <h4>{contactInfo.companyName}</h4>
          <ContactDetails contactInfo={contactInfo} />
        </aside>
      </div>
      </div>
    </>
  );
}

export default Contact;
