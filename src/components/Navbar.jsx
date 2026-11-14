import { Link, NavLink } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <FaCalendarAlt className="me-2" />
          Eventify
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <li className="nav-item" key={path}>
                <NavLink
                  end={path === "/"}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active" : ""}`
                  }
                  to={path}
                >
                  {label}
                </NavLink>
              </li>
            ))}

            <li className="nav-item">
              <Link to="/#events" className="btn btn-purple nav-cta">
                Explore Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;