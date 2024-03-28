import HeaderLi from "./HeaderLi";
import "../css/header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const vec = [
    { name: "Menu", linkTo: "/Coder-Eats-FrontEnd/menu" },
    { name: "Restaurant", linkTo: "/Coder-Eats-FrontEnd/restaurant" },
    { name: "user", linkTo: "/Coder-Eats-FrontEnd/user" },
    { name: "order", linkTo: "/Coder-Eats-FrontEnd/order" },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [showButton, setShowButton] = useState(true);

  return (
    <>
      <header className="header">
        <nav className="navegacion flexrow">
          <div className="logo">
            <Link to="/Coder-Eats-FrontEnd/" className="logo__a">
              <i className="ri-bowl-fill logo__a--icon"></i>
              <span className="logo__a--span">Soul Foul</span>
            </Link>
          </div>
          <div className="menuBar">
            <ul
              className={`menuBar__list flexrow ${
                showMenu ? "showMenu" : "hiddeMenu"
              }`}
            >
              <li
                className="menuBar__item"
                onClick={() => {
                  setShowButton(true);
                  setShowMenu(false);
                }}
              >
                <i className="ri-close-line"></i>
              </li>

              {vec.map((item, index) => (
                <HeaderLi
                  key={`${index} ${item.name}`}
                  content={item.name}
                  linkTo={item.linkTo}
                />
              ))}
            </ul>
          </div>
          <div
            className={`menuHeader ${
              showButton ? "showButton" : "hiddeButton"
            }`}
            onClick={() => {
              setShowButton(false);
              setShowMenu(true);
            }}
          >
            <i className="ri-menu-line"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
