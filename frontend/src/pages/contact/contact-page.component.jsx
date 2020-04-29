import React from "react";
import './contact-page.styles.scss';

const ContactPage = () => {
  return (
    <div className="contact-info">
      <div className="card">
        <i className="card-icon far fa-envelope"></i>
        <p>aboubacarmsr@gmail.com</p>
      </div>

      <div className="card">
        <i className="card-icon fas fa-phone"></i>
        <p>+21654474900</p>
      </div>

      <div className="card">
        <i className="card-icon fas fa-map-marker-alt"></i>
        <p>Tunis, TUNISIA</p>
      </div>
    </div>
  );
};

export default ContactPage;
