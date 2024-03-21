import { useState } from "react";
import "../css/user.css";

function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const postUser = () => {
    fetch("https://codereats-backend-production.up.railway.app/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, role, orders: [] }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Data", data))
      .catch((error) => console.error("Error:", error));
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
    </>
  );
}

export default User;
