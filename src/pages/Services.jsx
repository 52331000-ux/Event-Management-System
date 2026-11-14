import {
  FaSearch,
  FaTicketAlt,
  FaCalendarCheck,
  FaPeopleArrows,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const services = [
  {
    icon: FaSearch,
    title: "Discover Events",
    text: "Browse different event categories and find activities that interest you.",
  },
  {
    icon: FaTicketAlt,
    title: "Event Information",
    text: "View event descriptions, dates, locations, and ticket prices.",
  },
  {
    icon: FaCalendarCheck,
    title: "Simple Registration",
    text: "Get the information you need before deciding to attend an event.",
  },
  {
    icon: FaPeopleArrows,
    title: "Connect with Organizers",
    text: "Explore opportunities to connect with event communities and organizers.",
  },
];

function Services() {
  return (
    <section className="page-section soft-background">
      <div className="container">
        <div className="page-hero text-center">
          <span className="section-kicker">WHAT WE OFFER</span>

          <h1>Our Services</h1>

          <p>
            Tools and information to make your event discovery experience easier.
          </p>
        </div>

        <div className="row g-4 mt-4">
          {services.map(({ icon: Icon, title, text }) => (
            <div className="col-sm-6 col-lg-3" key={title}>
              <div className="info-card service-card">
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <h2 className="content-title">Ready to explore?</h2>

          <p className="muted-copy">
            Find an event that matches your interests.
          </p>

          <Link to="/#events" className="btn btn-purple mt-2">
            Explore Events
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;