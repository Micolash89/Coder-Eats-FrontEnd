import parse from "html-react-parser";

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
