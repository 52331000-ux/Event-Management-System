import { useState } from "react";

import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

    setSent(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSent(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-hero text-center">
          <span className="section-kicker">GET IN TOUCH</span>

          <h1>Contact Us</h1>

          <p>
            Have a question or suggestion? We would be happy to hear from you.
          </p>
        </div>

        <div className="row g-5 mt-3">
          <div className="col-lg-5">
            <h2 className="content-title">Let's talk</h2>

            <p className="muted-copy mb-4">
              Reach out to our team for general questions about Eventify.
            </p>

            <div className="contact-detail">
              <FaEnvelope />

              <div>
                <strong>Email</strong>
                <p>hello@eventify.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <FaPhoneAlt />

              <div>
                <strong>Phone</strong>
                <p>+961 1 234 567</p>
              </div>
            </div>

            <div className="contact-detail">
              <FaMapMarkerAlt />

              <div>
                <strong>Location</strong>
                <p>Lebanon</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="name">
                    Full Name
                  </label>

                  <input
                    id="name"
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    className="form-control"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    className="form-control"
                    rows="5"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <button className="btn btn-purple" type="submit">
                    Send Message
                  </button>
                </div>
              </div>

              {sent && (
                <p className="success-message" role="status">
                  Thank you! Your message has been recorded in this demo.
                </p>
              )}

              <p className="form-note">
                Demo form: messages are not sent to a server.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;