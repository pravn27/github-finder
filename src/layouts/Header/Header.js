import { useState } from "react";
import { Link } from "react-router-dom";
import { NavContainer } from "./HeaderStyled";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const headerTitle = "Github finder";
  const menuNavItems = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Contact Us",
      to: "/contact-us",
    },
  ];
  return (
    <NavContainer className="navbar navbar-expand-sm navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand leftNavbarBrand">
        <i className="fab fa-github fa-2x" />
        <span className="ml-2 title">{headerTitle}</span>
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          {menuNavItems.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <Link className="nav-link" to={item.to}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </NavContainer>
  );
};

export default Header;
