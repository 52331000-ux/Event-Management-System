import { Link, useParams } from "react-router-dom";

import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTicketAlt,
} from "react-icons/fa";

import events from "../data/events.js";

function EventDetails() {
  const { id } = useParams();

  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <section className="page-section">
        <div className="container text-center">
          <h1>Event not found</h1>

          <p className="muted-copy">
            This event may have been removed or the link is incorrect.
          </p>

          <Link className="btn btn-purple mt-3" to="/">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <Link to="/" className="back-link">
          ← Back to events
        </Link>

        <div className="row g-5 mt-2 align-items-start">
          <div className="col-lg-7">
            <img
              className="event-detail-image"
              src={event.image}
              alt={event.title}
            />
          </div>

          <div className="col-lg-5">
            <span className="section-kicker">
              {event.category}
            </span>

            <h1 className="detail-title">
              {event.title}
            </h1>

            <p className="muted-copy">
              {event.description}
            </p>

            <div className="detail-facts">
              <p>
                <FaCalendarAlt />
                {event.date}
              </p>

              <p>
                <FaClock />
                {event.time}
              </p>

              <p>
                <FaMapMarkerAlt />
                {event.location}
              </p>

              <p>
                <FaTicketAlt />
                ${event.price} per ticket
              </p>
            </div>

            <a
              href="mailto:hello@eventify.com?subject=Event%20Registration"
              className="btn btn-purple btn-lg mt-3"
            >
              Register Interest
            </a>

            <p className="form-note">
              Registration is a demo and is not processed online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;