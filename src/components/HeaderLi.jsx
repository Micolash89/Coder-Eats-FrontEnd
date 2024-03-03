import parse from "html-react-parser";
import React from "react";

function HeaderLi({ content }) {
  return (
    <>
      <li className="menuBar__item">
        <a className="menuBar__item--a" href="">
          {parse(content)}
        </a>
      </li>
    </>
  );
}

export default HeaderLi;
