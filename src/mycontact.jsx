import "./mycontact.css";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Mycontact() {
  return (
    <section className="contact-section">

      <div className="contact-header">
        <h4>CONTACT ME</h4>

        <h1>
          Let's Work <span>Together</span>
        </h1>

        <p>
          Looking for a frontend developer?
          Let's create something amazing together.
        </p>
      </div>

      <div className="contact-container">

        {/* LEFT CARD */}

        <div className="contact-info">

          <h2>
            Let's build something
            amazing <span>together.</span>
          </h2>

          <div className="info-divider"></div>

          <div className="info-item">
            <FaEnvelope />
            <div>
              <h5>Email</h5>
              <p>anishagrawal404@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhone />
            <div>
              <h5>Phone</h5>
              <p>+91 6350533125</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <h5>Location</h5>
              <p>Rajasthan, India</p>
            </div>
          </div>

          <div className="info-divider"></div>

          <div className="social-icons">

            <a
              href="https://www.linkedin.com/in/anish-agrawal-b902a3330/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/anish-123-2006"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:anishagrawal404@gmail.com"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* RIGHT CARD */}

        <div className="cta-card">

          <h3>Available For Work</h3>

          <p>
            I'm currently open to freelance projects,
            internships and collaboration opportunities.
          </p>

          <div className="services">

            <div className="service-box">
              <h4>Frontend Development</h4>
              <p>
                React, JavaScript, Responsive Design
              </p>
            </div>

          

            <div className="service-box">
              <h4>Quick Response</h4>
              <p>
                Usually reply within 24 hours
              </p>
            </div>

          </div>

          <div className="cta-buttons">

            <a
              href="mailto:anishagrawal404@gmail.com"
              className="email-btn"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/anish-agrawal-b902a3330"
              target="_blank"
              rel="noreferrer"
              className="linkedin-btn"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM CARD */}

      <div className="contact-footer">

        <div className="quote-box">
          <p>
            "Design is not just what it looks like and feels like.
            Design is how it works."
          </p>

          <span>— Steve Jobs</span>
        </div>

        <div className="availability">
          <div className="green-dot"></div>

          <div>
            <h3>Open For Opportunities</h3>
            <p>Frontend • Video Editing • Freelance</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Mycontact;