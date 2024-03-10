import { useEffect, useState } from "react";

function MenuCardOrder({
  menu: { id, product, url, price },
  idProducts,
  setIdProducts,
  idBusiness,
}) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(false);
    console.log(isChecked);
  }, [idBusiness]);

  console.log(idBusiness);

  function handleCheck(elementId) {
    if (!elementId) return;

    let arr = [...idProducts];

    if (arr.includes(elementId)) {
      arr = arr.filter((x) => x != elementId);
      setIsChecked(false);
    } else {
      arr.push(parseInt(elementId));
      setIsChecked(true);
    }

    //console.log(isChecked);
    setIdProducts(arr);
    console.log(idProducts);
  }

  return (
    <>
      {
        <label htmlFor={id}>
          <input
            hidden="hidden"
            className="inputRadio"
            type="checkbox"
            value={id}
            id={id}
            name="orderProduct"
            onClick={(e) => handleCheck(e.target.value)}
          />
          <section className={`itemsList `}>
            <div className="itemsList__menuCard flexrow">
              <div>
                <img
                  className="itemsList__menuCard--img"
                  src={url}
                  alt="food_picture"
                />
              </div>
              <div
                className={`itemsList__priceTag ${
                  isChecked ? "itemSelected" : ""
                }`}
              >
                <i className="ri-check-line  itemsList__priceTag--icon"></i>
              </div>

              <div className="itemsList__menuCard--info info flexcolum">
                <span className="info__span">ID: {id}</span>
                <span className="info__span">{product}</span>
                <span className="info__span">Precio: $ {price}</span>
              </div>
            </div>
          </section>
        </label>
      }
    </>
  );
}

export default MenuCardOrder;
