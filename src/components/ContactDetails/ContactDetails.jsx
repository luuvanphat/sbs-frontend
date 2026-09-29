import { Mail, MapPin, Phone } from 'lucide-react';
import './ContactDetails.css';

function ContactDetails({ contactInfo }) {
  return (
    <div className="contact-details">
      <p className="contact-details__item">
        <MapPin aria-hidden="true" size={16} />
        <span>{contactInfo.address}</span>
      </p>
      <p className="contact-details__item">
        <Mail aria-hidden="true" size={16} />
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </p>
      <p className="contact-details__item">
        <Phone aria-hidden="true" size={16} />
        <a href={`tel:${contactInfo.hotline}`}>
          {contactInfo.hotline} ({contactInfo.hotlineOwner})
        </a>
      </p>
    </div>
  );
}

export default ContactDetails;