import { useEffect, useState } from "react";
import "../css/menu.css";
import MenuCard from "./MenuCard";
import { END_POINTS } from "./EndPoints.Constantes";
import Loader from "./Loader";

function Menu() {
  const [menu, setmenu] = useState(false);

  // const [restaurant, setRestaurant] = useState(0);

  useEffect(() => {
    fetch(`${END_POINTS.DEV}/api/business`)
      .then((respose) => respose.json())
      .then((data) => {
        setmenu(data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2 className="menu__title">Nuestro Menu</h2>
      <section className="menu flexrow">
        <div className="load">{!menu && <Loader />}</div>

        {menu && (
          <MenuCard
            className="menu__menuCard"
            menu={menu}
            //   setRestaurant={setRestaurant}
          />
        )}
      </section>
    </>
  );
}

export default Menu;
