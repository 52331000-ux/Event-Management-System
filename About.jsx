import {
  FaBullseye,
  FaHeart,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-hero text-center">
          <span className="section-kicker">WHO WE ARE</span>

          <h1>About Eventify</h1>

          <p>
            We bring people together through meaningful events and
            memorable experiences.
          </p>
        </div>

        <div className="row align-items-center g-5 mt-4">
          <div className="col-lg-6">
            <img
              className="about-image"
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200"
              alt="People attending an event"
            />
          </div>

          <div className="col-lg-6">
            <h2 className="content-title">
              Making every event easier to discover
            </h2>

            <p className="muted-copy">
              Eventify is an event discovery platform designed to help
              people find experiences they love. From music festivals
              and creative exhibitions to professional conferences,
              we make exploring events simple.
            </p>

            <p className="muted-copy">
              Our goal is to connect organizers with attendees and
              make event information easy to access in one place.
            </p>
          </div>
        </div>

        <div className="row g-4 mt-5">
          <div className="col-md-4">
            <div className="info-card">
              <FaBullseye />
              <h3>Our Mission</h3>
              <p>
                Make discovering and exploring events simple for everyone.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-card">
              <FaHeart />
              <h3>Our Vision</h3>
              <p>
                Create stronger communities through shared experiences.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-card">
              <FaUsers />
              <h3>Our Community</h3>
              <p>
                Bring attendees and event organizers closer together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;