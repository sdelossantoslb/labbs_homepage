import React from 'react';
import InputElement from 'src/components/form/Inputs';

const ContactUsForm = () => {
  return (
    <form
      id="contact-form"
      className="contact-form form"
      action="mail.php"
      method="POST"
    >
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <InputElement
              type="text"
              name="name"
              className="form-control"
              required={true}
              placeHolder="Your Name"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <InputElement
              type="email"
              name="email"
              className="form-control"
              required={true}
              placeHolder="Your Email"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <InputElement
              type="text"
              name="name"
              className="form-control"
              required={true}
              placeHolder="Your Phone"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="form-group">
            <InputElement
              type="text"
              name="subject"
              className="form-control"
              required={true}
              placeHolder="Your Subject"
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="form-group">
            <InputElement
              type="bigText"
              name="message"
              className="form-control"
              required={true}
              placeHolder="Your Message"
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <button type="submit" className="default-btn submit-btn">
            Send Message <span></span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactUsForm;
