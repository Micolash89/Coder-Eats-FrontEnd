import { useEffect, useState } from "react";
import MenuCardOrder from "./MenuCardOrder";
import "../css/order.css";

function Order() {
  const [idBusiness, setIdBusiness] = useState("");
  const [idUsers, setIdUsers] = useState("");
  const [idProducts, setIdProducts] = useState([]);
  const [users, setUsers] = useState();
  const [business, setBusiness] = useState();

  useEffect(() => {
    fetch("https://codereats-backend-production.up.railway.app/api/business")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        setBusiness(data.result);
        //users = data.result;
      })
      .catch((error) => console.error(error));

    fetch("https://codereats-backend-production.up.railway.app/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        setUsers(data.result);
        //business = data.result;
      })
      .catch((error) => console.error(error));
  }, []);

  function postBussines() {
    fetch("https://codereats-backend-production.up.railway.app/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        business: idBusiness,
        user: idUsers,
        products: idProducts,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div className="containerForm flexcolum ">
        <h2 className="userTitle"> User</h2>
        <div className="form flexcolum select-container">
          <label className="form__label ">
            <select
              value={idUsers}
              onChange={(e) => setIdUsers(e.target.value)}
              name=""
              id=""
              className="select-box"
            >
              <option className="" value="" disabled={true} hidden={true}>
                Seleccione un Usuario
              </option>
              ;
              {users &&
                users.map((user, index) => {
                  return (
                    <option className="" value={user._id} key={index}>
                      {user.name}
                    </option>
                  );
                })}
            </select>

            {/* <div className="icon-container">
              <i className="ri-arrow-down-s-fill"></i>
            </div> */}
          </label>

          <label className="userLabel">
            <select
              value={idBusiness}
              onChange={(e) => {
                setIdProducts([]);
                setIdBusiness(e.target.value);
              }}
              name=""
              id=""
              className="select-box"
            >
              <option value="" disabled={true} hidden={true}>
                Seleccione un negocio
              </option>
              {business &&
                business.map((bussine, index) => {
                  return (
                    <option value={bussine._id} key={index}>
                      {bussine.name}
                    </option>
                  );
                })}
            </select>

            {/* <div className="icon-container">
              <i className="ri-arrow-down-s-fill"></i>
            </div> */}
          </label>

          <div className="menuList flexcolum">
            <h3 className="menuList__title">Menu</h3>
            <div className="menuList__card">
              {idBusiness &&
                business
                  .find((e) => e._id == idBusiness)
                  .products.map((e, i) => (
                    <MenuCardOrder
                      key={i}
                      menu={e}
                      idProducts={idProducts}
                      setIdProducts={setIdProducts}
                      idBusiness={idBusiness}
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>

      <div className="button__user">
        <button
          disabled={
            idBusiness === "" || idUsers === "" || idProducts.length === 0
          }
          className="button__user--button"
          onClick={postBussines}
        >
          Enviar
        </button>
      </div>
    </>
  );
}

export default Order;
