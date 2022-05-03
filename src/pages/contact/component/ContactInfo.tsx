import React from 'react';

interface ContactInfoProp {
  title?: string;
  descripcion: string;
  phone: string;
  email?: string;
}
const ContactInfo = ({ descripcion, phone, email, title }: ContactInfoProp) => {
  return (
    <div className="contact-info-content">
      <h5>{title}</h5>
      <p>{descripcion}</p>
      {phone && <a href={`tel:${phone.replace('-', '')}`}>{phone}</a>}
      {email && <a href={`mailto:${email}`}>{email}</a>}
    </div>
  );
};

export default ContactInfo;
