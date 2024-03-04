import "../css/footer.css";

function Footer() {
  return (
    <>
      <footer className="footer flexrow">
        <p className="footer__description">
          Created by: Espindola Javier © 2024 - Web Develop
        </p>
        <nav className="footer__nav">
          <ul className="footer__nav--ul flexrow">
            <li className="footer__nav--list">
              <a className="nav__a" href="wassap">
                <i className="ri-whatsapp-line nav__a--icon"></i>{" "}
              </a>
            </li>
            <li className="footer__nav--list">
              <a className="nav__a" href="#">
                <i className="ri-instagram-fill nav__a--icon"></i>{" "}
              </a>
            </li>
            <li className="footer__nav--list">
              <a className="nav__a" href="#">
                <i className="ri-linkedin-box-fill nav__a--icon"></i>{" "}
              </a>
            </li>
            <li className="footer__nav--list">
              <a className="nav__a" href="#">
                <i className="ri-twitter-x-line nav__a--icon"></i>{" "}
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
