import { useState } from "react";
import "../css/business.css";

function Business() {
  const [businessName, setBusinessName] = useState("");
  const [products, setProducts] = useState([
    { id: "", name: "", price: "", url: "" },
  ]);

  // Función para manejar el cambio en el nombre del negocio
  const handleBusinessNameChange = (e) => {
    setBusinessName(e.target.value);
  };

  // Función para manejar el cambio en los productos
  const handleProductChange = (e, index, field) => {
    const newProducts = [...products];
    newProducts[index][field] = e.target.value;
    setProducts(newProducts);
  };

  // Función para agregar un nuevo producto
  const addProduct = () => {
    setProducts([...products, { id: "", name: "", price: "", url: "" }]);
  };

  // Función para realizar la solicitud POST
  const postBusiness = () => {
    fetch("http://localHost:8080/api/business", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ businessName, products }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Data", data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <div className="containerForm flexcolum ">
        <h2 className="businessTitle"> Restaurants</h2>
        <div className="form ">
          <label className="form__input">
            <span className="form__input--span">Nombre Negocio</span>
            <input
              className="form__input"
              type="text"
              placeholder="Nombre del negocio"
              value={businessName}
              onChange={handleBusinessNameChange}
            />
          </label>
          {products.map((product, index) => (
            <div className="flexcolum" key={index}>
              <label className="productLabel">
                <span className="form__input--span">ID producto</span>
                <input
                  className="form__input"
                  type="text"
                  placeholder={`ID del producto ${index + 1}`}
                  value={product.id}
                  onChange={(e) => handleProductChange(e, index, "id")}
                />
              </label>

              <label className="productLabel">
                <span className="form__input--span">Nombre</span>
                <input
                  className="form__input"
                  type="text"
                  placeholder={`Nombre del producto ${index + 1}`}
                  value={product.name}
                  onChange={(e) => handleProductChange(e, index, "name")}
                />
              </label>

              <label className="productLabel">
                <span className="form__input--span">Precio</span>
                <input
                  className="form__input"
                  type="number"
                  placeholder={`Precio del producto ${index + 1}`}
                  value={product.price}
                  onChange={(e) => handleProductChange(e, index, "price")}
                />
              </label>

              <label className="productLabel">
                <span className="form__input--span">URL imagen</span>
                <input
                  className="form__input"
                  type="text"
                  placeholder={`URL del producto ${index + 1}`}
                  value={product.url}
                  onChange={(e) => handleProductChange(e, index, "url")}
                />
              </label>
            </div>
          ))}
          <div>
            <button className="form__button" onClick={addProduct}>
              Agregar otro producto
            </button>
            <button className="form__button" onClick={postBusiness}>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;
