import "../css/main.css";
import Ellipse5 from "../images/Ellipse5.png";
import Ellipse3 from "../images/Ellipse3.png";
import ImgHome from "./imgHome";
import { Link } from "react-router-dom";

function Home() {
  const vec = [
    Ellipse5,
    Ellipse5,
    Ellipse5,
    Ellipse5,
    Ellipse5,
    Ellipse5,
    Ellipse5,
    Ellipse5,
  ];

  return (
    <>
      <main className="main flexrow">
        <section className="main__home flexrow">
          <div className="home__container1 flexcolum">
            <div className="home__texto">
              <h1 className="home__texto--title">Soul Food Online</h1>
              <p className="home__texto--p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                dolore eius! Ipsum aspernatur deleniti id, at, dicta, harum
                animi unde placeat facilis laboriosam eligendi odio vitae
                explicabo consequatur impedit ad!
              </p>
            </div>
            <Link className="home__comenzar" to={"/Coder-Eats-FrontEnd/menu"}>
              <button className="home__button">Comenzar!</button>
            </Link>
          </div>

          <div className="home__container2">
            {vec.map((e, i) => (
              <ImgHome
                key={i}
                clase={`home__container${i + 1}--img img`}
                link={e}
              />
            ))}

            <ImgHome clase="home__container9--img img" link={Ellipse3} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
