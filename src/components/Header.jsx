import HeaderLi from "./HeaderLi";
import "../css/header.css";
import { Link } from "react-router-dom";

function Header() {
  const vec = [
    { name: "Menu", linkTo: "/Coder-Eats-FrontEnd/menu" },
    { name: "Restaurant", linkTo: "/Coder-Eats-FrontEnd/restaurant" },
    { name: "user", linkTo: "/Coder-Eats-FrontEnd/user" },
    { name: "order", linkTo: "/Coder-Eats-FrontEnd/" },
  ];

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
            <ul className="menuBar__list flexrow">
              {vec.map((item, index) => (
                <HeaderLi
                  key={`${index} ${item.name}`}
                  content={item.name}
                  linkTo={item.linkTo}
                />
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
