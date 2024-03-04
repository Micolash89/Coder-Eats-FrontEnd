import parse from "html-react-parser";
import { Link } from "react-router-dom";

function HeaderLi({ content, linkTo }) {
  return (
    <>
      <li className="menuBar__item">
        <Link className="menuBar__item--a" to={linkTo}>
          {parse(content)}
        </Link>
      </li>
    </>
  );
}

export default HeaderLi;
