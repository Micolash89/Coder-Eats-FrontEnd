import React from "react";
import HeaderLi from "./HeaderLi";
import "../css/header.css";

function Header() {
  const vec = [
    "BreakFast",
    "Lunch",
    "Dinner",
    '<i className="ri-git-repository-private-line"></i>login',
  ];

  return (
    <>
      <header className="header">
        <nav className="navegacion flexrow">
          <div className="logo">
            <a href="" className="logo__a">
              <i className="ri-bowl-fill logo__a--icon"></i>
              <span className="logo__a--span">Soul Foul</span>
            </a>
          </div>
          <div className="menuBar">
            <ul className="menuBar__list flexrow">
              {vec.map((item, index) => (
                <HeaderLi key={`${index} ${item}`} content={item} />
              ))}
              {/* <li className="menuBar__item">
                <a className="menuBar__item--a" href="">
                  BreakFast
                </a>
              </li>
              <li className="menuBar__item">
                <a className="menuBar__item--a" href="">
                  Lunch
                </a>
              </li>
              <li className="menuBar__item">
                <a className="menuBar__item--a" href="">
                  Dinner
                </a>
              </li>
              <li className="menuBar__item">
                <a className="menuBar__item--a" href="">
                  <i className="ri-git-repository-private-line"></i>login
                </a>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
