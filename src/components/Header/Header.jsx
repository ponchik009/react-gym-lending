import React from "react";
import { Link } from "react-scroll";

import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import "./Header.css";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="Лого" className="logo" />

      {!menuOpen && mobile ? (
        <div
          style={{
            background: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              // activeClass="active"
              to="hero"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
