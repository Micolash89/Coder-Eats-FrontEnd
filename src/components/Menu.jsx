import { useEffect, useState } from "react";
import "../css/menu.css";
import MenuCard from "./MenuCard";

function Menu() {
  const [menu, setmenu] = useState();
  // const [restaurant, setRestaurant] = useState(0);

  useEffect(() => {
    fetch("https://micolash89.github.io/api/business")
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
