import "../css/main.css";
import Ellipse5 from "../images/Ellipse5.png";
import Ellipse3 from "../images/Ellipse3.png";
import ImgHome from "./imgHome";

function Main() {
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
            <button className="home__button">Comenzar!</button>
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

            {/* <img
              className="home__container2--img img"
              src="./images/Ellipse 5.png"
              alt="food_img"
            />
            <img
              className="home__container3--img img"
              src="./images/Ellipse 5.png"
              alt="food_img"
            />
            <img
              className="home__container4--img img"
              src="./images/Ellipse 5.png"
              alt="food_img"
            />
            <img
              className="home__container5--img img"
              src="./images/Ellipse 5.png"
              alt="food_img"
            />
            <img
              className="home__container6--img img"
              src="./images/Ellipse 5.png"
              alt="food_img"
            />
            <img
              className="home__container7--img img"
              src="./images/Ellipse 5.png"
              alt="food_img"
            />
            <img
              className="home__container8--img img"
              src="./images/Ellipse 5.png"
              alt="food_img"
            /> */}
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
