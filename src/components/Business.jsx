import { useState } from "react";
import "../css/business.css";

function Business() {
  const [name, setBusinessName] = useState("");
  const [id, setId] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

  const postBusiness = () => {
    fetch("https://codereats-backend-production.up.railway.app/api/business", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, products: [{ id, product, price, url }] }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Data", data))
      .catch((error) => console.error("Error:", error));
  };
  //hacer que actualice el arrar colocandole uno nuevo y enviarlo

  return (
    <>
      <div className="containerForm flexcolum ">
        <h2 className="businessTitle"> Restaurants</h2>
        <div className="form flexcolum ">
          <label className="form__label">
            <input
              required="required"
              className="form__input"
              type="text"
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <span className="form__input--span">Nombre Negocio</span>
          </label>

          <div className="product__form flexcolum">
            <label className="productLabel">
              <input
                required="required"
                className="form__input"
                type="number"
                onChange={(e) => setId(e.target.value)}
              />
              <span className="form__input--span">ID producto</span>
            </label>

            <label className="productLabel">
              <input
                required="required"
                className="form__input"
                type="text"
                onChange={(e) => setProduct(e.target.value)}
              />
              <span className="form__input--span">Nombre</span>
            </label>

            <label className="productLabel">
              <input
                required="required"
                className="form__input"
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
              <span className="form__input--span">Precio</span>
            </label>

            <label className="productLabel">
              <input
                required="required"
                className="form__input"
                type="text"
                onChange={(e) => setUrl(e.target.value)}
              />
              <span className="form__input--span">URL imagen</span>
            </label>
          </div>
          <div className="imgPrewiev">
            {url && (
              <img className="imgPrewiev" src={`${url}`} alt="imagen previa" />
            )}
          </div>
        </div>

        <div className="button__product">
          <button
            disabled={
              name === "" ||
              id === "" ||
              product === "" ||
              price === "" ||
              url === ""
            }
            className="button__product--button"
            onClick={postBusiness}
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default Business;
