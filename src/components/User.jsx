import { useState } from "react";
import "../css/user.css";
import Error from "./Error";
import Loader from "./Loader";
import { END_POINTS } from "./EndPoints.Constantes";
function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  /*new user*/
  const [newUser, setNewUser] = useState(false);

  const postUser = () => {
    setLoading(true);
    fetch(`${END_POINTS.PROD}/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, role, orders: [] }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data", data);
        setNewUser(data.result);
        setError(false);
      })
      .catch((error) => {
        setError(true);
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="containerForm flexcolum ">
        <h2 className="userTitle"> User</h2>
        <div className="form flexcolum ">
          <label className="form__label">
            <input
              required="required"
              className="form__input"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <span className="form__input--span">Nombre de usuario</span>
          </label>

          <label className="userLabel">
            <input
              required="required"
              className="form__input"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="form__input--span">Email</span>
          </label>

          <label className="userLabel">
            <input
              required="required"
              className="form__input"
              type="text"
              onChange={(e) => setRole(e.target.value)}
            />
            <span className="form__input--span">role</span>
          </label>
        </div>
        <div className="button__user">
          <button
            disabled={name === "" || email === "" || role === ""}
            className="button__user--button"
            onClick={postUser}
          >
            Enviar
          </button>
        </div>
        {newUser && (
          <div className="order">
            <h3 className="order__h3">Nuevo usuario</h3>
            <span className="order__span">Nombre: {newUser.name}</span>
            <span className="order__span">Email: {newUser.email}</span>
            <span className="order__span">Role: {newUser.role}</span>
          </div>
        )}
        {loading && <Loader />}
        {error && <Error />}
      </div>
    </>
  );
}

export default User;
