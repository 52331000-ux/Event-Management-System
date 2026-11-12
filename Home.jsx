import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaHeadset,
  FaStar,
} from "react-icons/fa";

import events from "../data/events.js";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <span className="hero-label">
              DISCOVER. CONNECT. EXPERIENCE.
            </span>

            <h1>
              Make Every Moment
              <span>Unforgettable.</span>
            </h1>

            <p>
              Discover exciting events, explore new experiences, and create
              unforgettable memories with Eventify.
            </p>

            <div className="hero-buttons">
              <a href="#events" className="btn btn-purple btn-lg">
                Explore Events <FaArrowRight />
              </a>

              <Link to="/about" className="btn btn-outline-light btn-lg">
                Learn More
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <h3>500+</h3>
                <span>Events</span>
              </div>

              <div>
                <h3>10K+</h3>
                <span>Participants</span>
              </div>

              <div>
                <h3>50+</h3>
                <span>Organizers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="events-section" id="events">
        <div className="container">
          <div className="section-heading text-center">
            <span>OUR EVENTS</span>
            <h2>Upcoming Events</h2>
            <p>
              Explore exciting events and find your next experience.
            </p>
          </div>

          <div className="row g-4 mt-4">
            {events.map((event) => (
              <div className="col-md-6 col-lg-4" key={event.id}>
                <article className="event-card">
                  <div className="event-image-container">
                    <img src={event.image} alt={event.title} />
                    <span className="event-category">
                      {event.category}
                    </span>
                  </div>

                  <div className="event-card-body">
                    <h4>{event.title}</h4>

                    <p className="event-description">
                      {event.description}
                    </p>

                    <div className="event-info">
                      <p>
                        <FaCalendarAlt />
                        {event.date}
                      </p>

                      <p>
                        <FaMapMarkerAlt />
                        {event.location}
                      </p>
                    </div>

                    <div className="event-bottom">
                      <h5>${event.price}</h5>

                      <Link
                        to={`/events/${event.id}`}
                        className="btn btn-purple"
                      >
                        Details <FaArrowRight className="ms-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <div className="section-heading text-center">
            <span>WHY EVENTIFY?</span>
            <h2>Why Choose Us?</h2>
            <p>
              Everything you need for an amazing event experience.
            </p>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="why-card">
                <FaCalendarAlt />
                <h4>Discover Events</h4>
                <p>
                  Find exciting events that match your interests.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="why-card">
                <FaTicketAlt />
                <h4>Easy Booking</h4>
                <p>
                  Explore event details and registration options in one place.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="why-card">
                <FaHeadset />
                <h4>Great Experience</h4>
                <p>
                  Enjoy a simple and convenient event discovery platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <FaStar className="cta-icon" />

          <h2>Ready for Your Next Experience?</h2>

          <p>
            Explore our events and discover something amazing.
          </p>

          <a href="#events" className="btn btn-light btn-lg">
            Find Your Event
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;