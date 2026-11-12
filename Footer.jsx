import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-5">
            <h3>
              <FaCalendarAlt className="me-2" />
              Eventify
            </h3>
            <p>
              Discover events, connect with people, and create unforgettable
              experiences.
            </p>
          </div>

          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <hr />

        <p className="copyright">
          © 2026 Eventify. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;