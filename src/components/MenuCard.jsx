function MenuCard({ menu }) {
  //  menu.map((e) => e.products.map((e) => console.log(e)));

  return (
    <>
      {menu.map((e) =>
        e.products.map((e, i) => {
          return (
            <div key={i} className="menu__menuCard ">
              <div className="menuCard">
                <img className="menuCard__img" src={e.url} alt="food_picture" />
                <div className="menuCard__info flexcolum">
                  <span className="menuCard__info--id">ID: {e.id}</span>
                  <span className="menuCard__info--name">{e.product}</span>
                  <span className="menuCard__info--price">
                    Precio: $ {e.price}
                  </span>
                </div>
              </div>
              <p className="menuCard__name">{e.product}</p>
            </div>
          );
        })
      )}
    </>
  );
}

export default MenuCard;
